import './styles.css';
import {Controller} from './classes.js';
import {renderProject,drawProjectSidebar, drawHeader} from './dom-functions.js'; 


const appData = new Controller();

appData.activeProject = appData.createProject('Example Project'); // shows what the active project on the page is 
appData.createTask(appData.activeProject,'sample task','description for sample task','complete');

drawHeader(appData);
drawProjectSidebar(appData);
renderProject(appData, appData.activeProject);

