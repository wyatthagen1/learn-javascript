import {Project,Task,Controller} from "./classes";
import initPage from "./setupUi";
import './style.css';

initPage()


function domRenderProjects(){
    // USE appData OBJECT -- FLAG
    // dom create/re-create project on UI
}

function domRenderTask(task){
    // reRender the task FLAG
}



const appData = {
    projects: []
}

const newProject = Controller.createProject('First Project',appData);
Controller.createTask(newProject,'First Task','This is the first task of the project','Due Date','Research');


console.log(appData);
console.log(newProject);