


(function buildSearch(){
    // Build search bar -- invoke (IIFE) 
    const inputForm = document.getElementById('input-form');
    const searchInput = document.getElementById('location');
    const inputError = document.getElementById('location-error');
    const submitError = document.getElementById('submit-error');

    inputForm.addEventListener('submit',async (event)=>{
        event.preventDefault();
        let searchStr = searchInput.value; 

        const weatherData = await getWeather(searchStr);
        if(weatherData === null){
            submitError.textContent = 'Sorry, we did not find a matching location'; 
                
        }else{
            const {location, current} = weatherData;
            renderWeather(location,current);
            submitError.textContent = '';
            inputError.textContent = '';
            searchInput.value = '';
        }

    })





})();




async function getWeather(input){
    try{
        // clean the query 
        const locWithHyph = input.split(' ').join('-').toLowerCase();

        const fetchUrl = `https://api.weatherapi.com/v1/current.json?key=82fb1f20529748c68c845240241406&q=${locWithHyph}`;
        const response = await fetch(fetchUrl,{mode: 'cors'});

        if (!response.ok) {
            throw new Error(`Invalid Location Request ${response.status}`);
        }
        const obj = await response.json();
        const {location, current} = obj;
        return {location, current}


    }catch(error){
        console.log(error)
        return null;
    }
}



/*
async function weatherApp(input){
    const {location, current} = await getWeather(input);
    renderWeather(location, current);
}

weatherApp('Soadfasdfa')
*/ 







function renderWeather(location, current){
    // Do a bunch of destructuring to get required data. 

    // location meta section 

    const locName = location.name;
    const [locDate,locTime] = location.localtime.split(' ');
    const metaDiv = document.getElementsByClassName('data-meta')[0];
    
    // Create the h2 element for name
    const metaHeading = document.createElement('h2');
    metaHeading.textContent = 'Location';

    const nameHeading = document.createElement('p');
    nameHeading.textContent = locName;

    // Create the p element for time
    const timeElement = document.createElement('p');
    timeElement.textContent = `Current Time: ${locTime}`;

    // Append the name and time elements to the data-meta div
    metaDiv.innerHTML = '';
    metaDiv.appendChild(metaHeading);
    metaDiv.appendChild(nameHeading);
    metaDiv.appendChild(timeElement);


    // current section 
    const temp = current.temp_f;
    const condition = current.condition.text;
    const conditionImg = current.condition.icon;
    const feelsLike = current.feelslike_f;

    const currentDiv = document.getElementsByClassName('data-current')[0];
    // create headline 
    const currentHeading = document.createElement('h2');
    currentHeading.textContent = 'Current Conditions'
    currentDiv.innerHTML = '';
    currentDiv.appendChild(currentHeading)


    // Create p element for temperature
    const tempElement = document.createElement('p');
    tempElement.textContent = `Temperature: ${temp}°F`;
    currentDiv.appendChild(tempElement);

    // Create p element for condition
    const conditionElement = document.createElement('p');
    conditionElement.textContent = `Condition: ${condition}`;
    currentDiv.appendChild(conditionElement);

    // Create p element for feels like temperature
    const feelsLikeElement = document.createElement('p');
    feelsLikeElement.textContent = `Feels Like: ${feelsLike}°F`;
    currentDiv.appendChild(feelsLikeElement);

    // Create img element for condition icon
    const conditionImgElement = document.createElement('img');
    conditionImgElement.src = conditionImg;
    conditionImgElement.alt = condition;
    currentDiv.appendChild(conditionImgElement);
    
    // wind section
    const windSpd = current.wind_mph;
    const windDir = current.wind_dir;
    const cloudCover = current.cloud;

    const windDiv = document.getElementsByClassName('data-wind')[0];
    windDiv.innerHTML = '';
    
    // heading 
    const windHeading = document.createElement('h2');
    windHeading.textContent = 'Wind'
    windDiv.appendChild(windHeading)

    // Create p element for wind speed
    const windSpdElement = document.createElement('p');
    windSpdElement.textContent = `Wind Speed: ${windSpd} mph`;
    windDiv.appendChild(windSpdElement);

    // Create p element for wind direction
    const windDirElement = document.createElement('p');
    windDirElement.textContent = `Wind Direction: ${windDir}`;
    windDiv.appendChild(windDirElement);

    // Create p element for cloud cover
    const cloudCoverElement = document.createElement('p');
    cloudCoverElement.textContent = `Cloud Cover: ${cloudCover}%`;
    windDiv.appendChild(cloudCoverElement);


    
    // Air section

    const airHeading = document.createElement('h2');
    airHeading.textContent = 'Air'

    const visiblity = current.vis_miles;
    const uvIndex = current.uv;

    const airDiv = document.getElementsByClassName('data-air')[0];
    airDiv.innerHTML = '';
    airDiv.appendChild(airHeading);

    // Create p element for visibility
    const visibilityElement = document.createElement('p');
    visibilityElement.textContent = `Visibility: ${visiblity} miles`;
    airDiv.appendChild(visibilityElement);

    // Create p element for UV index
    const uvIndexElement = document.createElement('p');
    uvIndexElement.textContent = `UV Index: ${uvIndex}`;
    airDiv.appendChild(uvIndexElement);

}



/*
const img = document.querySelector('img');


async function getGif(img){
    try{
    const fetchUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=CocpQ3nHNMkj0g20kALHthCMFflYdy5Q&s=cats';
    const response = await fetch(fetchUrl,{mode: 'cors'});
    const responseJson = await response.json();
    img.src = responseJson.data.images.original.url;

    }catch(error){
        console.log(`error: ${error.message}`)
    }
}


getGif(img)


fetch('https://api.giphy.com/v1/gifs/translate?api_key=CocpQ3nHNMkj0g20kALHthCMFflYdy5Q&s=cats',{mode: 'cors'})
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        img.src = response.data.images.original.url;
    })

*/