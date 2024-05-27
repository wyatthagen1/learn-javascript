class Controller{

    constructor(){
        this.projects = [];
        this.activeProject;
    }
    
    createTask(project,name,description,status,dueDate = null){
        const newTask = new Task(name,description,status,dueDate)
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
        this.__tasks = [];
        // this.__icon = rand(image) <--- come back later
        this.__numTasks = 0;
        this.id = 1//Math.floor(Math.random() * (Math.floor(100000 + 1))); 
        
        if(typeof(name)=== "string"){
            this.__name = name
        }
        else{
            throw new Error('Name is not a string')
        } 

    }

    get name(){
        return this.__name;   
    }
    get tasks(){
        if(this.__tasks.length != 0){
            return this.__tasks
        }
        else{
            return this.__tasks // does there need to be some kind of check for 0 length?
        }
    }
    set name(name){
        if(typeof(name)=== "string"){
            this.__name = name
        }
        else{
            throw new Error('Name you are trying to set is not a string')
        }
    }
    appendTask(newTask){
        if(typeof(newTask)==="object"){
            this.__tasks.push(newTask);
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
    constructor(name,description,status,dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate; 
        this.status = status;
        this.id = Math.floor(Math.random() * (Math.floor(100000 + 1)));
    }
}

export {Task, Project, Controller}
