class Project {
    constructor(name){
        this.__tasks = [];
        // this.__icon = rand(image) <--- come back later
        this.__numTasks = 0;
        
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
    addTask(newTask){
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
    constructor(name,description,dueDate,type){
        this.name = name;
        this.description = description;
        this.__dueDate = dueDate; 
        this.type = type;
        this.__status = 'Not Started';
    }
    get dueDate(){
        return `Due: ${this.__dueDate}` // change later
    }
    set dueDate(newDate){
        this.__dueDate = newDate // change later
    }
    get status(){
        return `Task Status: ${this.__status}`;
    }
    set status(newStatus){
        this.__status = newStatus; // change later
    }

}


class Controller{

    static completeTask(project,task){
        project.removeTask(task);
    //domRenderTask(task); // FLAG

    }

    static createTask(project,name,description,dueDate = null,type){
        const newTask = new Task(name,description,dueDate,type)
        project.addTask(newTask)
        //domRenderTask(newtask) // FLAG

    }

    static updateTask(task,action,updatePayLoad,project){
        switch(action){
            case 'changeName':
                task.name = updatePayLoad;
                break;

            case 'changeDescription':
                task.description = updatePayLoad;
                break;

            case 'changeStatus':
                task.status = updatePayLoad;
                break;

            case 'changeType':
                task.type = updatePayLoad;
                break;

            default:
                throw new Error('Task Action did not match possible actions')
                break;
        }
        //domRenderTask(task);
    }



    static createProject(name,appData){
        const newProject = new Project(name);
        appData.projects.push(newProject); // is this weird that this class is being manipulated in another class?
        //domRenderProjects();
        return newProject; //FLAG 
    }


    static changeProjectName(project,name){
        project.name = name;
        //domRenderProjects();
    }

    static completeProject(project,appData){
        appData.projects.splice(appData.projects.indexOf(project),1);
        //domRenderProjects();
    }



}



export{Project,Task, Controller}



