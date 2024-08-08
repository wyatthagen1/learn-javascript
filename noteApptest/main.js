class Controller{

    static completeTask(project,task){
        project.removeTask(task);
    //domRenderTask(task, 'complete'); // FLAG

    }

    static createTask(project,name,description,status,dueDate = null){
        const newTask = new Task(name,description,status,dueDate)
        project.appendTask(newTask)
        //domRenderTask(newtask, 'create') // FLAG

    }

    static updateTask(task,action,updatePayLoad){
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
        //domRenderTask(task, 'update');
    }



    static createProject(name){
        const newProject = new Project(name);
        appData.push(newProject); // is this weird that this class is being manipulated in another class?
        //domRenderProjects();
        return newProject; //FLAG 
    }


    static changeProjectName(project,name){
        project.name = name;
        //domRenderProjects();
    }

    completeProject(project,appData){
        this.appData.projects.splice(appData.projects.indexOf(project),1);
        //domRenderProjects();
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
        this.id = 1//Math.floor(Math.random() * (Math.floor(100000 + 1)));
    }

}






function editTask(taskID){
    const form = document.getElementById('task-form'); // clear form data
    form.reset();

    const task = taskLookup(taskID); // fetch task
    activeTask = task; 

    currentState = 'edit'

    document.getElementById('task-name').value =  task.name; // draw task data into from
    document.getElementById('task-description').value = task.description;
    document.getElementById('due-date').value = task.dueDate; 
    document.querySelector(`input[name="task-status"][value="${task.status}"]`).checked = true;


    const dataModal = document.getElementsByClassName('modal')[0]; // show modal
    dataModal.style.display = "block";

}


function addTask(status){
    const form = document.getElementById('task-form'); // clear form data
    form.reset();

    currentState = 'create';
    document.querySelector(`input[name="task-status"][value="${status}"]`).checked = true; // default radio button to correct status

    const dataModal = document.getElementsByClassName('modal')[0]; // show modal
    dataModal.style.display = "block";
    
}

function saveTask(){
    const enteredTaskName = document.getElementById('task-name').value;
    console.log(enteredTaskName);
    console.log(currentState);
    const enteredTaskDueDate = document.getElementById('due-date').value;
    const enteredTaskDescription = document.getElementById('task-description').value;
    const radioButtons = document.querySelectorAll('input[name="task-status"]');
    const checkedRadioButton = Array.from(radioButtons).find(radio => radio.checked); 
    const enteredTaskStatus = checkedRadioButton ? checkedRadioButton.value : null;

    if(currentState === 'edit'){
        activeTask.name = enteredTaskName;
        activeTask.description = enteredTaskDescription;
        activeTask.dueDate = enteredTaskDueDate; 
        activeTask.status = enteredTaskStatus; // update the status 
    }

    else if(currentState ==='create'){
        const newTask = Controller.createTask(activeProject,enteredTaskName,enteredTaskDescription,enteredTaskStatus,enteredTaskDueDate);
    }


    const dataModal = document.getElementsByClassName('modal')[0]; // close modal
    dataModal.style.display = "none";

    renderProject(activeProject);

}




function taskLookup(taskID){ //helper function for task lookup
    for(let i=0; i< appData.length; i++){
        let currentProject = appData[i];
        for(let j=0; j < currentProject.tasks.length; j++){
            if(currentProject.tasks[j].id === taskID){
                return currentProject.tasks[j];
            }
        }
    }
}

function projectLookup(projectID){
    for(let i=0;i<appData.length; i++){
        let currentProject = appData[i]
        if (appData[i].id === projectID){
            return currentProject;
        }
    }
}





function addSelectProjectCallbacks(){
    const allProjects = document.getElementsByClassName('project');
    
    for(let i=0; i< allProjects.length; i++){
        const currentProject = projectLookup(allProjects[i].id) // lookup current project

        allProjects[i].addEventListener('clicked',()=>{
            renderProject(currentProject)
        })

    }
}

function renderProject(project){

    activeProject = project;
    drawProjectArea(); 

    // --- draw headline text ----
    const headline = document.getElementsByClassName('headline')[0];
    const projectName = document.createElement('h2');
    projectName.className = 'project-name';
    projectName.textContent = `${activeProject.name}`;
    headline.appendChild(projectName);
     // --- ------------------ ----

    for(let i=0; i< project.tasks.length; i++){
        let thisTask = project.tasks[i];
        if(thisTask.status === 'to-do'){
            console.log(thisTask, 'To-do in render project')
            drawTask(thisTask,'to-do')
        }
        else if(thisTask.status === 'in-progress'){
            console.log(thisTask, 'in-progress in render project')
            drawTask(thisTask,'in-progress')
        }
        else if(thisTask.status === 'complete'){
            console.log(thisTask, 'complete in render project')
            drawTask(thisTask,'complete')
        }
        else{
            console.log(`this task ${thisTask.name} does not have a status`)
        }
    }
}


function drawProjectArea(){
    // Create the top-level div
    const topLevelDiv = document.getElementsByClassName('main-dash')[0];
    topLevelDiv.innerHTML = '';

    // ---------- CREATE THE MODAL -----------------------------------------------
    // Create the outer div element
    const outerDiv = document.createElement('div');
    outerDiv.id = 'edit-task';
    outerDiv.classList.add('modal');

    // Create the inner div element
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('modal-content');

    // Create the close span element
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('close');
    closeSpan.textContent = '×';
    closeSpan.addEventListener('click', ()=>{
        outerDiv.style.display = 'none';
    })
    innerDiv.appendChild(closeSpan);


    // Create the form element
    const form = document.createElement('form');
    form.id = 'task-form';

    // Create the task name wrapper div
    const taskNameWrapper = document.createElement('div');
    taskNameWrapper.classList.add('task-name-wrapper');

    // Create the task name label
    const taskNameLabel = document.createElement('label');
    taskNameLabel.setAttribute('for', 'task-name');
    taskNameLabel.textContent = 'Task Name';
    taskNameWrapper.appendChild(taskNameLabel);

    // Create the task name input
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.id = 'task-name';
    taskNameInput.name = 'task-name';
    taskNameInput.placeholder = 'Task Name...';
    taskNameWrapper.appendChild(taskNameInput);
    form.appendChild(taskNameWrapper);

    // Create the tile div
    const tileDiv = document.createElement('div');
    tileDiv.classList.add('tile');

    // Create the modal content wrapper div
    const modalContentWrapper = document.createElement('div');
    modalContentWrapper.classList.add('modal-content-wrapper');

    // Create the task description field
    const taskDescriptionField = document.createElement('div');
    taskDescriptionField.classList.add('task-field');

    // Create the task description label
    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.setAttribute('for', 'task-description');
    taskDescriptionLabel.textContent = 'Description';
    taskDescriptionField.appendChild(taskDescriptionLabel);

    // Create the task description textarea
    const taskDescriptionTextarea = document.createElement('textarea');
    taskDescriptionTextarea.id = 'task-description';
    taskDescriptionTextarea.name = 'task-description';
    taskDescriptionTextarea.rows = 3;
    taskDescriptionTextarea.cols = 50;
    taskDescriptionTextarea.placeholder = 'Enter your description...';
    taskDescriptionField.appendChild(taskDescriptionTextarea);
    modalContentWrapper.appendChild(taskDescriptionField);

    // Create the due date field
    const dueDateField = document.createElement('div');
    dueDateField.classList.add('task-field');

    // Create the due date label
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'task-due-date');
    dueDateLabel.id = 'due-date-label';
    dueDateLabel.textContent = 'Due Date';
    dueDateField.appendChild(dueDateLabel);

    // Create the due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'due-date';
    dueDateField.appendChild(dueDateInput);
    modalContentWrapper.appendChild(dueDateField);

    // Create the statuses div
    const statusesDiv = document.createElement('div');
    statusesDiv.classList.add('statuses');
    statusesDiv.textContent = 'Task Status';

    // Create the to-do status child div
    const todoStatusChild = document.createElement('div');
    todoStatusChild.classList.add('status-child');

    // Create the to-do status radio input
    const todoRadioInput = document.createElement('input');
    todoRadioInput.type = 'radio';
    todoRadioInput.id = 'to-do';
    todoRadioInput.name = 'task-status';
    todoRadioInput.value = 'to-do';
    todoRadioInput.checked = true;
    todoStatusChild.appendChild(todoRadioInput);

    // Create the to-do status label
    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', 'child');
    todoLabel.textContent = 'To Do';
    todoStatusChild.appendChild(todoLabel);
    statusesDiv.appendChild(todoStatusChild);

    // Create the in-progress status child div
    const inProgressStatusChild = document.createElement('div');
    inProgressStatusChild.classList.add('status-child');

    // Create the in-progress status radio input
    const inProgressRadioInput = document.createElement('input');
    inProgressRadioInput.type = 'radio';
    inProgressRadioInput.id = 'in-progress';
    inProgressRadioInput.name = 'task-status';
    inProgressRadioInput.value = 'in-progress';
    inProgressStatusChild.appendChild(inProgressRadioInput);

    // Create the in-progress status label
    const modalinProgressLabel = document.createElement('label');
    modalinProgressLabel.setAttribute('for', 'child');
    modalinProgressLabel.textContent = 'In Progress';
    inProgressStatusChild.appendChild(modalinProgressLabel);
    statusesDiv.appendChild(inProgressStatusChild);

    // Create the complete status child div
    const completeStatusChild = document.createElement('div');
    completeStatusChild.classList.add('status-child');

    // Create the complete status radio input
    const completeRadioInput = document.createElement('input');
    completeRadioInput.type = 'radio';
    completeRadioInput.id = 'complete';
    completeRadioInput.name = 'task-status';
    completeRadioInput.value = 'complete';
    completeStatusChild.appendChild(completeRadioInput);

    // Create the complete status label
    const modalcompleteLabel = document.createElement('label');
    modalcompleteLabel.setAttribute('for', 'child');
    modalcompleteLabel.textContent = 'Complete';
    completeStatusChild.appendChild(modalcompleteLabel);
    statusesDiv.appendChild(completeStatusChild);
    modalContentWrapper.appendChild(statusesDiv);
    tileDiv.appendChild(modalContentWrapper);
    form.appendChild(tileDiv);

    // Create the save button wrapper div
    const saveButtonWrapper = document.createElement('div');
    saveButtonWrapper.classList.add('save-button-wrapper');

    // Create the save button
    const saveButton = document.createElement('button');
    saveButton.id = 'save-button';
    saveButton.type = 'submit';
    saveButton.textContent = 'Save';
    form.addEventListener('submit', function(event){ // add the correct SAVE listener
        event.preventDefault();
    
        saveTask();
        console.log(appData);
    
    })

    saveButtonWrapper.appendChild(saveButton);
    form.appendChild(saveButtonWrapper);
    innerDiv.appendChild(form);
    outerDiv.appendChild(innerDiv);

    // Append the outer div to the document body
    topLevelDiv.appendChild(outerDiv);
    // ---------------------- CREATE MODAL END ---------------------------

    // Create the headline div
    const headlineDiv = document.createElement('div');
    headlineDiv.className = 'headline projects-text';
    
    // projectName.textContent = `${activeProject.name}`; ------ not assigning it here 

    topLevelDiv.appendChild(headlineDiv);

    // Create the "To Do" task area
    const toDoContainer = document.createElement('div');
    toDoContainer.className = 'to-do-container task-area';
    const toDoLabel = document.createElement('div');
    toDoLabel.className = 'status-label';
    const toDoLabelText = document.createElement('h3');
    toDoLabelText.textContent = 'To Do';
    toDoLabel.appendChild(toDoLabelText);
    toDoContainer.appendChild(toDoLabel);
    const toDoAddButton = document.createElement('div');
    toDoAddButton.className = 'add-task-button';
    toDoAddButton.id = 'add-to-do-task';
    toDoAddButton.addEventListener('click',()=>{ // ADD PROJECT BUTTON -- TO-DO
        addTask('to-do');
    })
    const toDoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    toDoSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    toDoSvg.setAttribute('viewBox', '0 0 24 24');
    const toDoSvgTitle = document.createElement('title');
    toDoSvgTitle.textContent = 'plus';
    const toDoSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    toDoSvgPath.setAttribute('fill', '#000000');
    toDoSvgPath.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    toDoSvg.appendChild(toDoSvgTitle);
    toDoSvg.appendChild(toDoSvgPath);
    toDoAddButton.appendChild(toDoSvg);
    toDoContainer.appendChild(toDoAddButton);
    topLevelDiv.appendChild(toDoContainer);

    // Create the "In Progress" task area
    const inProgressContainer = document.createElement('div');
    inProgressContainer.className = 'in-progress-container task-area';
    const inProgressLabel = document.createElement('div');
    inProgressLabel.className = 'status-label';
    const inProgressLabelText = document.createElement('h3');
    inProgressLabelText.textContent = 'In Progress';
    inProgressLabel.appendChild(inProgressLabelText);
    inProgressContainer.appendChild(inProgressLabel);
    const inProgressAddButton = document.createElement('div');
    inProgressAddButton.className = 'add-task-button';
    inProgressAddButton.id = 'add-in-progress-task';
    inProgressAddButton.addEventListener('click',()=>{ // ADD PROJECT BUTTON -- IN PROGRESS
        addTask('in-progress');
        console.log('add task button for in-progress is getting a listener added')
    })
    const inProgressSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    inProgressSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    inProgressSvg.setAttribute('viewBox', '0 0 24 24');
    const inProgressSvgTitle = document.createElement('title');
    inProgressSvgTitle.textContent = 'plus';
    const inProgressSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    inProgressSvgPath.setAttribute('fill', '#000000');
    inProgressSvgPath.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    inProgressSvg.appendChild(inProgressSvgTitle);
    inProgressSvg.appendChild(inProgressSvgPath);
    inProgressAddButton.appendChild(inProgressSvg);
    inProgressContainer.appendChild(inProgressAddButton);
    topLevelDiv.appendChild(inProgressContainer);

    // Create the "Complete" task area
    const completeContainer = document.createElement('div');
    completeContainer.className = 'complete-container task-area';
    const completeLabel = document.createElement('div');
    completeLabel.className = 'status-label';
    const completeLabelText = document.createElement('h3');
    completeLabelText.textContent = 'Complete';
    completeLabel.appendChild(completeLabelText);
    completeContainer.appendChild(completeLabel);
    const completeAddButton = document.createElement('div');
    completeAddButton.className = 'add-task-button';
    completeAddButton.id = 'add-complete-task';
    completeAddButton.addEventListener('click',()=>{ // ADD PROJECT BUTTON -- COMPLETE
        addTask('complete');
    })
    const completeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    completeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    completeSvg.setAttribute('viewBox', '0 0 24 24');
    const completeSvgTitle = document.createElement('title');
    completeSvgTitle.textContent = 'plus';
    const completeSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    completeSvgPath.setAttribute('fill', '#000000');
    completeSvgPath.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    completeSvg.appendChild(completeSvgTitle);
    completeSvg.appendChild(completeSvgPath);
    completeAddButton.appendChild(completeSvg);
    completeContainer.appendChild(completeAddButton);
    topLevelDiv.appendChild(completeContainer);

    // Append the top-level div to the document body
    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.appendChild(topLevelDiv);

}


function drawTask(task,status){
    // Create the outer div element
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('tile');
    outerDiv.id = task.id;

    // Create the inner div for tile-text
    const tileTextDiv = document.createElement('div');
    tileTextDiv.classList.add('tile-text');

    // Create the h3 element
    const h3 = document.createElement('h3');
    h3.classList.add('task-title');
    h3.textContent = `${task.name}`;

    // Create the p element
    const p = document.createElement('p');
    p.classList.add('task-description');
    p.textContent = `${task.description}`;

    // Append h3 and p to tileTextDiv
    tileTextDiv.appendChild(h3);
    tileTextDiv.appendChild(p);

    // Create the inner div for tile-actions
    const tileActionsDiv = document.createElement('div');
    tileActionsDiv.classList.add('tile-actions');

    // Create the p element for due date
    const dueDateP = document.createElement('p');
    dueDateP.classList.add('due-date');
    dueDateP.textContent = `Due: ${task.dueDate}`;

    // Create the div for edit-cta
    const editCtaDiv = document.createElement('div'); // <--------------- add edit cta callback
    editCtaDiv.classList.add('edit-cta');
    editCtaDiv.addEventListener('click',()=>{
        editTask(task.id)
    })

    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');

    // Create the title element
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'pencil-box-outline';

    // Create the path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z');

    // Append title and path to svg
    svg.appendChild(title);
    svg.appendChild(path);

    // Append svg to editCtaDiv
    editCtaDiv.appendChild(svg);

    // create complete-task action 
    const checkSvgContainer = document.createElement('div');
    checkSvgContainer.classList.add('checkmark-container');
    const checksvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    checksvg.setAttributeNS(null,'viewBox','0 0 24 24');
    const checktitle=document.createElementNS('http://www.w3.org/2000/svg','title');
    title.textContent='check-circle-outline';
    const checkpath=document.createElementNS('http://www.w3.org/2000/svg','path');
    checkpath.setAttributeNS(null,'d','M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z');
    checksvg.appendChild(checktitle);
    checksvg.appendChild(checkpath);
    checkSvgContainer.appendChild(checksvg);
    checkSvgContainer.addEventListener('click',()=>{
        activeProject.removeTask(task)
        drawProjectArea()
    })


    // Append dueDateP and editCtaDiv to tileActionsDiv
    tileActionsDiv.appendChild(dueDateP);
    tileActionsDiv.appendChild(editCtaDiv);
    tileActionsDiv.appendChild(checkSvgContainer);
    // Append tileTextDiv and tileActionsDiv to outerDiv
    outerDiv.appendChild(tileTextDiv);
    outerDiv.appendChild(tileActionsDiv);

    // Append the outerDiv to the document body
    
    const taskSwimlane = document.getElementsByClassName(`${status}-container`)[0];
    const taskButton = document.getElementById(`add-${status}-task`);
    console.log(taskSwimlane)
    taskSwimlane.insertBefore(outerDiv,taskButton)

}


function drawProjectSidebar(){
    // Create the outer div for the home button
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.innerHTML = '';

    
    const homeButtonDiv = document.createElement('div');
    homeButtonDiv.classList.add('home-button', 'nav');

    // Create the SVG element for the dashboard logo
    const dashboardSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dashboardSvg.classList.add('dashboard-logo');
    dashboardSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    dashboardSvg.setAttribute('viewBox', '0 0 24 24');

    // Create the title element for the SVG
    const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    svgTitle.textContent = 'view-dashboard';
    dashboardSvg.appendChild(svgTitle);

    // Create the path element for the SVG
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('fill', '#FFFFFF');
    svgPath.setAttribute('d', 'M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z');
    dashboardSvg.appendChild(svgPath);
    homeButtonDiv.appendChild(dashboardSvg);

    // Create the heading for "Active Projects"
    const activeProjectsHeading = document.createElement('h1');
    activeProjectsHeading.textContent = 'Active Projects';
    homeButtonDiv.appendChild(activeProjectsHeading);

    // Create the outer div for the project
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');

    for(let i=0;i<appData.length;i++){
        // Create the inner div for the project
        const projectInnerDiv = document.createElement('div');
        projectInnerDiv.classList.add('nav', 'project');

        // Create the SVG element for the project icon
        const projectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        projectSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        projectSvg.setAttribute('viewBox', '0 0 24 24');

        // Create the title element for the project SVG
        const projectSvgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        projectSvgTitle.textContent = 'layers-triple';
        projectSvg.appendChild(projectSvgTitle);

        // Create the path element for the project SVG
        const projectSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        projectSvgPath.setAttribute('fill', '#FFFFFF');
        projectSvgPath.setAttribute('d', 'M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z');
        projectSvg.appendChild(projectSvgPath);
        projectInnerDiv.appendChild(projectSvg);

        // Create the heading for the project name
        const projectNameHeading = document.createElement('h3');
        projectNameHeading.classList.add('project-name');
        projectNameHeading.textContent = `${appData[i].name}`;
        projectInnerDiv.appendChild(projectNameHeading);

        // Append the project inner div to the project outer div
        projectDiv.appendChild(projectInnerDiv);

        // add select-project listener
        projectInnerDiv.addEventListener('click',()=>{
            renderProject(appData[i]);
        })

    }

    // Append the home button div and project div to the document body

    sidebar.appendChild(homeButtonDiv);
    sidebar.appendChild(projectDiv);

}

function deleteProject(){
    appData.splice(appData.indexOf(activeProject),1);

}



function drawHeader(){
        // Create the outer div element
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('profile-actions-bar');

    // Create the inner div for profile
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
    outerDiv.appendChild(profileDiv);

    // Create the div for profile icon
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('bar-item-2');
    const profileIcon = document.createElement('img');
    profileIcon.classList.add('profile-icon-large');
    profileIcon.src = '/images/profile-icon.png';
    profileIcon.alt = 'slakoth';
    iconDiv.appendChild(profileIcon);
    profileDiv.appendChild(iconDiv);

    // Create the div for profile text
    const profileTextDiv = document.createElement('div');
    profileTextDiv.classList.add('profile-text');
    const greeting = document.createElement('h4');
    greeting.textContent = 'Hi there,';
    const name = document.createElement('h2');
    name.classList.add('profile-name');
    name.textContent = 'Wyatt Hagen (@wyguy)';
    profileTextDiv.appendChild(greeting);
    profileTextDiv.appendChild(name);
    profileDiv.appendChild(profileTextDiv);

    // Create the div for nav buttons
    const navButtonsDiv = document.createElement('div');
    navButtonsDiv.classList.add('nav-buttons');
    outerDiv.appendChild(navButtonsDiv);

    // Create the new project button
    const newButtonDiv = document.createElement('div');
    newButtonDiv.classList.add('new-button');
    const newButton = document.createElement('button');
    newButton.textContent = 'New Project';
    newButtonDiv.appendChild(newButton);
    navButtonsDiv.appendChild(newButtonDiv);

    // Create the delete project button
    const deleteButtonDiv = document.createElement('div');
    deleteButtonDiv.classList.add('delete-button');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Project';
    deleteButtonDiv.appendChild(deleteButton);
    navButtonsDiv.appendChild(deleteButtonDiv);

    //Delete project callback
    deleteButtonDiv.addEventListener('click',()=>{
        let deleteIndex = appData.indexOf(activeProject);
        appData.splice(deleteIndex,1);
        activeProject = appData[0];

        drawProjectSidebar();
        drawProjectArea();
        renderProject(activeProject);

        
    })

    // Add Project callback 
    newButtonDiv.addEventListener('click',()=>{
        domCreateProject();
    })
    // Append the outer div to the document body
    const headerBar = document.getElementsByClassName('header')[0];
    headerBar.appendChild(outerDiv);
}


function domCreateProject(){
    const projectDiv = document.getElementsByClassName('project-div')[0];


    const projectInnerDiv = document.createElement('div');
        projectInnerDiv.classList.add('nav', 'project');

        // Create the SVG element for the project icon
    const projectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    projectSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    projectSvg.setAttribute('viewBox', '0 0 24 24');

        // Create the title element for the project SVG
    const projectSvgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    projectSvgTitle.textContent = 'layers-triple';
    projectSvg.appendChild(projectSvgTitle);

        // Create the path element for the project SVG
    const projectSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    projectSvgPath.setAttribute('fill', '#FFFFFF');
    projectSvgPath.setAttribute('d', 'M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z');
    projectSvg.appendChild(projectSvgPath);
    projectInnerDiv.appendChild(projectSvg);

    // Create the heading for the project name
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'project-name-input';
    inputField.placeholder = 'Enter project name';
        
    projectInnerDiv.appendChild(inputField);
    


    const checkSvgContainer = document.createElement('div');
    checkSvgContainer.classList.add('checkmark-container');
    const checksvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    checksvg.setAttributeNS(null,'viewBox','0 0 24 24');
    const title=document.createElementNS('http://www.w3.org/2000/svg','title');
    title.textContent='check-circle-outline';
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttributeNS(null,'fill','#FFFFFF');
    path.setAttributeNS(null,'d','M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z');
    checksvg.appendChild(title);
    checksvg.appendChild(path);

    //projectInnerDiv.appendChild(checksvg)
    checkSvgContainer.appendChild(checksvg);
    projectInnerDiv.appendChild(checkSvgContainer);

    checkSvgContainer.addEventListener('click',()=>{
        let newProject = Controller.createProject(inputField.value)
        activeProject = newProject;
        renderProject(activeProject);
        drawProjectSidebar();
    })

    // Append the project inner div to the project outer div
    projectDiv.appendChild(projectInnerDiv);


}







const appData = [];

let activeProject = Controller.createProject('Example Project'); // shows what the active project on the page is 
Controller.createTask(activeProject,'sample task','description for sample task','complete');
let projectTwo = Controller.createProject('Project 2');
Controller.createTask(projectTwo, 'sample tast 2', 'description of sample task 2 in project 2','to-do');
console.log(appData)

let activeTask; // shows what the active task on the page is
let currentState; // shows what the current state of the edit modal should be (possible values are 'edit' or 'create')

drawHeader();
drawProjectSidebar();
renderProject(activeProject);



// Testing the modal 
/*
const editButton = document.getElementsByClassName('edit-cta')[0];
const editModal = document.getElementsByClassName('modal')[0];
const closeButton = document.getElementsByClassName('close')[0];
const addTaskButton = document.getElementById('add-to-do-task');
const taskForm = document.getElementById('task-form');

console.log(editButton);
console.log(editModal)

editButton.addEventListener('click',()=>{
    editTask(1);
})

addTaskButton.addEventListener('click',()=>{
    addTask('complete');
})


closeButton.addEventListener('click', ()=>{
    editModal.style.display = 'none';
})


taskForm.addEventListener('submit', function(event){
    event.preventDefault();

    saveTask();
    console.log(appData);

})


*/
