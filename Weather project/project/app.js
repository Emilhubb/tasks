const apikey = '23cdfa1ef8c19b86e9b2ddccb21182b5';
const url = (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

async function GetData(city) {
    try{
        const response = await fetch(url(city));
        if(!response.ok){
            throw new Error(`HTTP ERROR!`)
        }
    const responseData = await response.json();
    const cityName = responseData.city.name
    const country = responseData.city.country
    console.log(responseData);
    insertData(responseData)
}

    catch(error){
        console.error(`ERROR:`, error.message);
        alert('Error fetching data. Please try again later.');
    }
}


function insertData(responseData) {
    const temp = (responseData.list[0].main.temp - 273.15).toFixed(1)
    document.getElementsByClassName('temp')[0].innerText = `${temp}°C`;
    const weather = responseData.list[0].weather[0].main;
    document.getElementsByClassName('weather')[0].innerText = `${weather}`;
    const pressure = responseData.list[0].main.pressure
    document.getElementById('pressure').innerText = `Pressure: ${pressure} hPa`
    const speed = (responseData.list[0].wind.speed).toFixed(1);
    document.getElementById('wind').innerText = `Wind:  ${speed} m/s`
    const humidity = responseData.list[0].main.humidity
    document.getElementById('humidity').innerText = `Humidity: ${humidity} %`
    const feelsLike = (responseData.list[0].main.feels_like - 273.15).toFixed(1)
    document.getElementById('feelsLike').innerText = `Feels Like: ${feelsLike}°C`
    const icon = responseData.list[0].weather[0].icon
    document.getElementById('icon').innerHTML = `
    <img src="https://openweathermap.org/img/w/${icon}.png" />
    `;
    const cityName = responseData.city.name
    const country = responseData.city.country
    document.getElementById('location').innerText = ` ${cityName},${country}`

    const MaxTemp = (responseData.list[0].main.temp_max - 273.15).toFixed(0)
    const MinTemp = (responseData.list[0].main.temp_min - 273.15).toFixed(0)
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

    const TomorrowMaxTemp = (responseData.list[6].main.temp_max - 273.15).toFixed(0)
    const NextDayMaxTemp = (responseData.list[14].main.temp_max - 273.15).toFixed(0)
    const ThirdDayMaxTemp = (responseData.list[22].main.temp_max - 273.15).toFixed(0)
    const FourthDayMaxTemp = (responseData.list[30].main.temp_max - 273.15).toFixed(0)
    const FifthDayMaxTemp = (responseData.list[38].main.temp_max - 273.15).toFixed(0)

    document.getElementById('fourthTr').innerHTML = `
    
    <td>${TomorrowMaxTemp}°C</td>
    <td>${NextDayMaxTemp}°C</td>
    <td>${ThirdDayMaxTemp}°C</td>
    <td>${FourthDayMaxTemp}°C</td>
    <td>${FifthDayMaxTemp}°C</td>
    
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


