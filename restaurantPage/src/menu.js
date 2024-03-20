function createMenu() {
    // Create starters div
    const startersDiv = document.createElement('div');
    startersDiv.id = 'starters';

    const startersHeading = document.createElement('h2');
    startersHeading.textContent = 'Starters';

    const startersList = document.createElement('ul');
    const starterItems = ['Crab Cakes', 'Shishitos', 'Pork Belly'];

    starterItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        startersList.appendChild(listItem);
    });

    startersDiv.appendChild(startersHeading);
    startersDiv.appendChild(startersList);

    // Create main courses div
    const mainCoursesDiv = document.createElement('div');
    mainCoursesDiv.id = 'main-courses';

    const mainCoursesHeading = document.createElement('h2');
    mainCoursesHeading.textContent = 'Main Courses';

    const mainCoursesList = document.createElement('ul');
    const mainCourseItems = ['Pepper Pot with Wild Boar', 'Trenette al Limone with Stracciatella & Breadcrumbs', 'Cola-Braised Short Rib'];

    mainCourseItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        mainCoursesList.appendChild(listItem);
    });

    mainCoursesDiv.appendChild(mainCoursesHeading);
    mainCoursesDiv.appendChild(mainCoursesList);

    // Create desserts div
    const dessertsDiv = document.createElement('div');
    dessertsDiv.id = 'desserts';

    const dessertsHeading = document.createElement('h2');
    dessertsHeading.textContent = 'Desserts';

    const dessertsList = document.createElement('ul');
    const dessertItems = ['Bannana Pudding', 'Espresso Brownie', 'Stroopwafel & Vanilla Bean'];

    dessertItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        dessertsList.appendChild(listItem);
    });

    dessertsDiv.appendChild(dessertsHeading);
    dessertsDiv.appendChild(dessertsList);

    // Append menu sections to the content div

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    const contentDiv = document.getElementById('content');

    containerDiv.appendChild(startersDiv);
    containerDiv.appendChild(mainCoursesDiv);
    containerDiv.appendChild(dessertsDiv);
    contentDiv.appendChild(containerDiv);
}

// Call the function to create the menu
export default createMenu;

