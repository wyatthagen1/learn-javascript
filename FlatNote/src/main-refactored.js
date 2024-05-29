import './styles.css';
import {Controller, Project, Task} from './classes.js';
import {renderProject,drawProjectSidebar, drawHeader} from './dom-functions.js'; 



function loadFlatNote(){
    if(localStorage.getItem('appData')===null){
        const appData = new Controller();

        appData.activeProject = appData.createProject('Example Project'); // shows what the active project on the page is 
        appData.createTask(appData.activeProject,'sample task','description for sample task','complete');
        console.log('no local storage data was found')
        return appData;
    }else{
        const appData = new Controller();
        const serializedAppData = localStorage.getItem('appData');
        const rawAppData = JSON.parse(serializedAppData);


        for(let i=0;i<rawAppData.projects.length;i++){ // loop through projects
            let prjToConvert = rawAppData.projects[i];
            console.log(prjToConvert)
            let tempProject = appData.createProject(prjToConvert.name);

            for(let j=0;j< prjToConvert.tasks.length;j++){ // loop through tasks
                let tskToConvert = prjToConvert.tasks[j];
                // extract the fields 
                let tTaskName = tskToConvert.name;
                let tTaskDes = tskToConvert.description;
                let tTaskStatus = tskToConvert.status;
                let tTaskId = tskToConvert.id;
                let tTaskDD = tskToConvert.dueDate; 
                // create the task obj and append to prj
                appData.createTask(tempProject,tTaskName,tTaskDes,tTaskStatus,tTaskDD,tTaskId);
            }

        }

        // assign the active project
        appData.activeProject = appData.projects[0];

        console.log('local storage data was found')
        return appData;
    }
}


const appData = loadFlatNote();
drawHeader(appData);
drawProjectSidebar(appData);
console.log(appData)
renderProject(appData, appData.activeProject);

