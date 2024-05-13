function initPage() {
    const mainContentDiv = document.getElementById('mainContentDiv');
    const projectRail = document.getElementById('projectRail');
    const addProjectContainer = document.createElement('div');
    addProjectContainer.classList.add('project-list');
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    addProjectButton.textContent = 'Add Project';
    addProjectContainer.appendChild(addProjectButton);
    const activeProjectsContainer = document.createElement('div');
    activeProjectsContainer.id = 'activeProjectsContainer';
    activeProjectsContainer.setAttribute('data-role', 'tile');
    const activeProjectSample = document.createElement('h2');
    activeProjectSample.textContent = 'Sample Project';
    activeProjectsContainer.appendChild(activeProjectSample);
    const completedProjectsContainer = document.createElement('div');
    completedProjectsContainer.id = 'completedProjects';
    projectRail.appendChild(addProjectContainer);
    projectRail.appendChild(activeProjectsContainer);
    projectRail.appendChild(completedProjectsContainer);
    console.log('init page finished firing');
  }
  
  export default initPage;