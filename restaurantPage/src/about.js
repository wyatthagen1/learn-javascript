function aboutPage() {
    // create about us div
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = 'about-us';

    const aboutUsHeading = document.createElement('h2');
    aboutUsHeading.textContent = 'About Us';

    const aboutUsParagraph = document.createElement('p');
    aboutUsParagraph.textContent = 'Welcome to our cozy restaurant where we serve delicious meals made with love and care. Our menu offers a variety of dishes to satisfy your cravings.';

    aboutUsDiv.appendChild(aboutUsHeading);
    aboutUsDiv.appendChild(aboutUsParagraph);


    // create specialties div
    const specialtiesDiv = document.createElement('div');
    specialtiesDiv.id = 'specialties';

    const specialtiesHeading = document.createElement('h2');
    specialtiesHeading.textContent = 'Specialties';

    const specialtiesParagraph = document.createElement('p');
    specialtiesParagraph.textContent = 'From mouth-watering appetizers to delectable desserts, we take pride in every dish we serve. Explore our specialties and indulge in a culinary experience like no other.';

    specialtiesDiv.appendChild(specialtiesHeading);
    specialtiesDiv.appendChild(specialtiesParagraph);


    // create visit us div
    const visitUsDiv = document.createElement('div');
    visitUsDiv.id = 'visit-us';

    const visitUsHeading = document.createElement('h2');
    visitUsHeading.textContent = 'Visit Us!';

    const visitUsParagraph = document.createElement('p');
    visitUsParagraph.textContent = 'Come dine with us and enjoy a memorable dining experience. We look forward to welcoming you to our restaurant soon!'

    visitUsDiv.appendChild(visitUsHeading);
    visitUsDiv.appendChild(visitUsParagraph);


    // populate content div
    const contentDiv = document.getElementById('content')

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    containerDiv.appendChild(aboutUsDiv);
    containerDiv.appendChild(specialtiesDiv);
    containerDiv.appendChild(visitUsDiv);

    contentDiv.appendChild(containerDiv);

}

export default aboutPage