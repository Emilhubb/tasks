const apikey = '4f0c5f237b428cfe861db9dc06e5875a';
const url = (city) => `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apikey}`;

async function GetData(city) {
    const response = await fetch(url(city));
    const responseData = await response.json();
    const cityName = responseData.city.name
    const country = responseData.city.country
    console.log(responseData);
    console.log(cityName);
    console.log(country);
    insertData(responseData)
}

function insertData(responseData) {
    const temp = (responseData.list[0].temp.day - 273.15).toFixed(1)
    document.getElementsByClassName('temp')[0].innerText = `${temp}°C`;
    const weather = responseData.list[0].weather[0].main;
    document.getElementsByClassName('weather')[0].innerText = `${weather}`;
    const pressure = responseData.list[0].pressure
    document.getElementById('pressure').innerText = `Pressure: ${pressure} hPa`
    const speed = (responseData.list[0].speed).toFixed(1);
    document.getElementById('wind').innerText = `Wind:  ${speed} m/s`
    const humidity = responseData.list[0].humidity
    document.getElementById('humidity').innerText = `Humidity: ${humidity} %`
    const feelsLike = (responseData.list[0].feels_like.day - 273.15).toFixed(1)
    document.getElementById('feelsLike').innerText = `Feels Like: ${feelsLike}°C`
    const icon = responseData.list[0].weather[0].icon
    document.getElementById('icon').innerHTML = `
    <img src="https://openweathermap.org/img/w/${icon}.png" />
    `;
    const cityName = responseData.city.name
    const country = responseData.city.country
    document.getElementById('location').innerText = ` ${cityName},${country}`

    const MaxTemp = (responseData.list[0].temp.max - 273.15).toFixed(0)
    const MinTemp = (responseData.list[0].temp.min - 273.15).toFixed(0)
    document.getElementById('maxmintemp').innerText = `${MaxTemp}°C / ${MinTemp}°C`

    const tomorrowIcon = responseData.list[1].weather[0].icon;
    const nextDayIcon = responseData.list[2].weather[0].icon;
    const thirdIcon = responseData.list[3].weather[0].icon;
    const fourthIcon = responseData.list[4].weather[0].icon;
    const fifthIcon = responseData.list[5].weather[0].icon;

    document.getElementById('secondTr').innerHTML = `
    <td><img src="https://openweathermap.org/img/w/${tomorrowIcon}.png" /></td>
    <td><img src="https://openweathermap.org/img/w/${nextDayIcon}.png" /></td>
    <td><img src="https://openweathermap.org/img/w/${thirdIcon}.png" /></td>
    <td><img src="https://openweathermap.org/img/w/${fourthIcon}.png" /></td>
    <td><img src="https://openweathermap.org/img/w/${fifthIcon}.png" /></td>
    `;

    const weatherTomorrow = responseData.list[1].weather[0].main;
    const weatherNextDay = responseData.list[2].weather[0].main;
    const weatherThirdDay = responseData.list[3].weather[0].main;
    const weatherFourthDay = responseData.list[4].weather[0].main;
    const weatherFifthDay = responseData.list[5].weather[0].main;

    document.getElementById('thirdTr').innerHTML = `
    <td>${weatherTomorrow}</td>
    <td>${weatherNextDay}</td>
    <td>${weatherThirdDay}</td>
    <td>${weatherFourthDay}</td>
    <td>${weatherFifthDay}</td>
    `;

    const TomorrowMaxTemp = (responseData.list[1].temp.max - 273.15).toFixed(0)
    const TomorrowMinTemp = (responseData.list[1].temp.min - 273.15).toFixed(0)

    const NextDayMaxTemp = (responseData.list[2].temp.max - 273.15).toFixed(0)
    const NextDayMinTemp = (responseData.list[2].temp.min - 273.15).toFixed(0)

    const ThirdDayMaxTemp = (responseData.list[3].temp.max - 273.15).toFixed(0)
    const ThirdDayMinTemp = (responseData.list[3].temp.min - 273.15).toFixed(0)

    const FourthDayMaxTemp = (responseData.list[4].temp.max - 273.15).toFixed(0)
    const FourthDayMinTemp = (responseData.list[4].temp.min - 273.15).toFixed(0)

    const FifthDayMaxTemp = (responseData.list[5].temp.max - 273.15).toFixed(0)
    const FifthDayMinTemp = (responseData.list[5].temp.min - 273.15).toFixed(0)

    document.getElementById('fourthTr').innerHTML = `
    
    <td>${TomorrowMaxTemp}°C / ${TomorrowMinTemp}°C</td>
    <td>${NextDayMaxTemp}°C / ${NextDayMinTemp}°C</td>
    <td>${ThirdDayMaxTemp}°C / ${ThirdDayMinTemp}°C</td>
    <td>${FourthDayMaxTemp}°C / ${FourthDayMinTemp}°C</td>
    <td>${FifthDayMaxTemp}°C / ${FifthDayMinTemp}°C</td>
    
    `
}
const search = document.getElementById('Location')
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let city = search.value;
    if (city) {
        GetData(city)
        search.value=''
    }else{
        alert('Unknown City')
    }

})


