import aboutPage  from "./about";
import createMenu from "./menu";
import contactPage from "./contact";
import './style.css';



function initTabListeners() {
    const menuButton = document.getElementById('menu');
    const contentDiv = document.getElementById('content')
    menuButton.addEventListener('click',() =>{
        contentDiv.innerHTML ='';
        createMenu();
    })

    const aboutButton = document.getElementById('about');

    aboutButton.addEventListener('click',() =>{
        contentDiv.innerHTML ='';
        aboutPage();
    })

    const contactButton = document.getElementById('contact-us');

    contactButton.addEventListener('click',() =>{
        contentDiv.innerHTML ='';
        contactPage();
    })
    

}

aboutPage();
initTabListeners();