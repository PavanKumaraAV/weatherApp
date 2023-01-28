async function weatherData() {
    var city = cityName.value;

    if (!city) {
        alert("Enter name of any city");
    }
    else {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=944001537e657be4c7b98c9a6c280056&units=metric`)
        data.json().then(data=>{
        displayWeatherData(data)
        })
    
    }

}
function displayWeatherData(data){

    htmlData = ``;

    htmlData = `<div class="search__result">
                <div class="first__row">
                    <div class="name__place">
                        <h1>${data.name}</h1>
                        <h6>${data.weather[0].description}</h6>
                    </div>
                    <div class="temperature mt-5"><span>${data.main.temp}°C</span></div>
                </div>
                <div class="second__row">
                    <div class="weather__icon"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img></div>
                    <div class="other__details mt-5">
                        <ul>
                            <li class="list-group-item">Feels Like: ${data.main.feels_like}°C</li>
                            <li class="list-group-item">Humidity: ${data.main.humidity}%</li>
                            <li class="list-group-item">Pressure: ${data.main.pressure} hPs</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    result.innerHTML = htmlData

}