class Controller{

    constructor(){
        this.projects = [];
        this.activeProject;
    }
    
    createTask(project,name,description,status,dueDate = null,id){
        const newTask = new Task(name,description,status,dueDate,id)
        project.appendTask(newTask)


    }

    createProject(name){
        const newProject = new Project(name);
        this.projects.push(newProject); 

        return newProject; 
    }

    taskLookup(taskID){ //helper function for task lookup
        for(let i=0; i< this.projects.length; i++){
            let currentProject = this.projects[i];
            for(let j=0; j < currentProject.tasks.length; j++){
                if(currentProject.tasks[j].id === taskID){
                    return currentProject.tasks[j];
                }
            }
        }
    }



}

class Project {
    constructor(name){
        this.tasks = [];
        // this.__icon = rand(image) <--- come back later
        this.__numTasks = 0;
        this.id = 1//Math.floor(Math.random() * (Math.floor(100000 + 1))); 
        
        if(typeof(name)=== "string"){
            this.name = name
        }
        else{
            throw new Error('Name is not a string')
        } 

    }

    appendTask(newTask){
        if(typeof(newTask)==="object"){
            this.tasks.push(newTask);
            this.__numTasks++;
        }
        else{
            throw new Error('New Project you are trying to add is not an object')
        }
    }
    removeTask(completeTask){
        if(this.tasks.includes(completeTask)){
            this.tasks.splice(this.tasks.indexOf(completeTask),1);

        }else{
            throw new Error ('Task is not in project');
        }

    }

}

class Task{
    constructor(name,description,status,dueDate,id=null){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate; 
        this.status = status;
        if(!id){
            this.id = Math.floor(Math.random() * (Math.floor(100000 + 1)));
        }else{
            this.id = id
        }
    }
}

export {Task, Project, Controller}
