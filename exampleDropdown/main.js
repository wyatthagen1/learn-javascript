
function generateDropdown(triggerDiv, dropdownDiv, action='hover'){
    // check action 
    if (action === 'hover'){
        triggerDiv.addEventListener('mouseover',()=>{
            dropdownDiv.style.display = 'flex';
        })
        triggerDiv.addEventListener('mouseout',()=>{
            dropdownDiv.style.display ='none';
        })

    }
    else if(action === 'click'){

        triggerDiv.addEventListener('click',()=>{

            const newState = dropdownDiv.style.display === 'none' ? 'flex' : 'none';
            dropdownDiv.style.display = newState;
        })
    }
    else{
        throw new Error('action type is not valid, attempted action: ',action);
    }

}



function createCarousel(imgs,backBtn,forwardBtn,stateIconDiv){

    const activeIcon = createFilledCircleIcon();
    //activeIcon.setAttribute('id','0')
    stateIconDiv.appendChild(activeIcon);

    for(let i=1;i<imgs.length;i++){
        imgs[i].style.display = 'none';
        let inactiveIcon = createOutlinedCircleIcon();
        stateIconDiv.appendChild(inactiveIcon);


    }
    let active = 0; // start the for loop above after the first index so 1st is active GLOBAL
    const stateIcons = stateIconDiv.children; 
    console.log(stateIcons)

    forwardBtn.addEventListener('click',()=>{
        imgs[active].style.display = 'none';
        let newInactive = createOutlinedCircleIcon();
        stateIconDiv.replaceChild(newInactive,stateIcons[active])


        active = (active+1) % (imgs.length)
        imgs[active].style.display = 'inline';
        let newActive = createFilledCircleIcon();
        stateIconDiv.replaceChild(newActive,stateIcons[active])
    })

    backBtn.addEventListener('click',()=>{
        imgs[active].style.display = 'none';
        let newInactive = createOutlinedCircleIcon();
        stateIconDiv.replaceChild(newInactive,stateIcons[active])

        if(active === 0){
            active = imgs.length;
        }

        active = Math.abs((active-1) % (imgs.length))

        imgs[active].style.display = 'inline';
        let newActive = createFilledCircleIcon();
        stateIconDiv.replaceChild(newActive,stateIcons[active]) 

    })





}






const imgs = document.getElementsByClassName('image');
const backBtn = document.getElementsByClassName('back-button')[0];
const forwardBtn = document.getElementsByClassName('forward-button')[0];
const stateIconDiv = document.getElementsByClassName('state-icons')[0];

createCarousel(imgs,backBtn,forwardBtn,stateIconDiv);


const triggerContainer = document.getElementsByClassName('dropdown-container')[0];
const dropdownContainer = document.getElementsByClassName('dropdown')[0];

generateDropdown(triggerContainer,dropdownContainer,'hover')




function createFilledCircleIcon() {
    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'state-icon');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');
  
    // Create the title element
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'circle';
    svg.appendChild(title);

  
    // Create the path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill',"#FFFFFF");
    path.setAttribute('d', 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z');
    svg.appendChild(path);
  
    return svg;
  }

  function createOutlinedCircleIcon() {
    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'state-icon');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');
  
    // Create the title element
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'circle-outline';
    svg.appendChild(title);
  
    // Create the path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill',"#FFFFFF");
    path.setAttribute('d', 'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z');
    svg.appendChild(path);
  
    return svg;
  }