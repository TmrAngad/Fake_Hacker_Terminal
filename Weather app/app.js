//Weather app

//get Weather data variable
let result;

//lets temp varibales

let temp = document.querySelectorAll('.temp')
let min_temp = document.querySelector('.min_temp')
let max_temp = document.querySelector('.max_temp')

//lets humidity variables
let humidity = document.querySelectorAll('.humidity')
let feels_like = document.querySelector('.feels_like')
let wind_degrees = document.querySelector('.wind_degrees')

// lest wind info variables

let wind_speed = document.querySelectorAll('.wind_speed')
let sunrise = document.querySelector('.sunrise')
let sunset = document.querySelector('.sunset')

//lets controll input box
let cityCon
let showCity = document.querySelector('.cityName')

//Indias data variables
let india_cloud_pct = document.querySelector('.india-cloud_pct')
let india_feels_like = document.querySelector('.india-feels_like')
let india_humidity = document.querySelector('.india-humidity')
let india_max_temp = document.querySelector('.india-max_temp')
let india_min_temp = document.querySelector('.india-min_temp')
let india_sunrise = document.querySelector('.india-sunrise')
let india_sunset = document.querySelector('.india-sunset')
let india_temp = document.querySelector('.india-temp')
let india_wind_degrees = document.querySelector('.india-wind_degrees')
let india_wind_speed = document.querySelector('.india-wind_speed')

//America data variables
let america_cloud_pct = document.querySelector('.america-cloud_pct')
let america_feels_like = document.querySelector('.america-feels_like')
let america_humidity = document.querySelector('.america-humidity')
let america_max_temp = document.querySelector('.america-max_temp')
let america_min_temp = document.querySelector('.america-min_temp')
let america_sunrise = document.querySelector('.america-sunrise')
let america_sunset = document.querySelector('.america-sunset')
let america_temp = document.querySelector('.america-temp')
let america_wind_degrees = document.querySelector('.america-wind_degrees')
let america_wind_speed = document.querySelector('.america-wind_speed')

//China data variables
let china_cloud_pct = document.querySelector('.china-cloud_pct')
let china_feels_like = document.querySelector('.china-feels_like')
let china_humidity = document.querySelector('.china-humidity')
let china_max_temp = document.querySelector('.china-max_temp')
let china_min_temp = document.querySelector('.china-min_temp')
let china_sunrise = document.querySelector('.china-sunrise')
let china_sunset = document.querySelector('.china-sunset')
let china_temp = document.querySelector('.china-temp')
let china_wind_degrees = document.querySelector('.china-wind_degrees')
let china_wind_speed = document.querySelector('.china-wind_speed')

const changeCityName = () => {
        cityCon.style.textTransform = "capitalize"
        showCity.innerHTML = cityCon.value
        showCity.style.textTransform = "capitalize"
        cityName = cityCon.innerHTML


}
// console.log(cityName)

const weatherData = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78f6504d7emsh40b4cfdfb27c276p124141jsnca782bcd4f06',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        result = await response.json();
        // console.log(result)
        changeWeatherValue()
    } catch (error) {
        console.error(error.traget);

    }
}

//lets controll search box

let searchCon = document.querySelector('.searchBut')
searchCon.addEventListener('click', () => {
    cityCon = document.querySelector('input')
    if(cityCon.value!=""){
        weatherData(cityCon.value)
        changeCityName()
    }


})



const changeWeatherValue = () => {
    temp[0].innerHTML = result.temp
    temp[1].innerHTML = result.temp
    max_temp.innerHTML = result.max_temp
    min_temp.innerHTML = result.min_temp
    humidity[0].innerHTML = result.humidity
    humidity[1].innerHTML = result.humidity
    wind_speed[0].innerHTML = result.wind_speed
    wind_speed[1].innerHTML = result.wind_speed
    wind_degrees.innerHTML = result.wind_degrees
    sunrise.innerHTML = result.sunrise
    sunset.innerHTML = result.sunset
    feels_like.innerHTML = result.feels_like
}

const windowLoad = () => {
    window.addEventListener('load', () => {
        showCity.innerHTML = "Bhadohi"
        weatherData("bhadohi")
    })
}
windowLoad()


const indiaWeather = async () => {
    const ind_url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=india'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78f6504d7emsh40b4cfdfb27c276p124141jsnca782bcd4f06',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    let response = await fetch(ind_url, options)
    let data = await response.json()
    // console.log(data.humidity)

    india_cloud_pct.innerHTML = data.cloud_pct
    india_feels_like.innerHTML = data.feels_like
    india_humidity.innerHTML = data.humidity
    india_max_temp.innerHTML = data.max_temp
    india_min_temp.innerHTML = data.min_temp
    india_sunrise.innerHTML = data.sunrise
    india_sunset.innerHTML = data.sunset
    india_temp.innerHTML = data.temp
    india_wind_degrees.innerHTML = data.wind_degrees
    india_wind_speed.innerHTML = data.wind_speed


}
indiaWeather()

const americaWeather = async () => {
    const ame_url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=america'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78f6504d7emsh40b4cfdfb27c276p124141jsnca782bcd4f06',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    let response = await fetch(ame_url, options)
    let data = await response.json()
    // console.log(data.humidity)
    america_cloud_pct.innerHTML = data.cloud_pct
    america_feels_like.innerHTML = data.feels_like
    america_humidity.innerHTML = data.humidity
    america_max_temp.innerHTML = data.max_temp
    america_min_temp.innerHTML = data.min_temp
    america_sunrise.innerHTML = data.sunrise
    america_sunset.innerHTML = data.sunset
    america_temp.innerHTML = data.temp
    america_wind_degrees.innerHTML = data.wind_degrees
    america_wind_speed.innerHTML = data.wind_speed


}
americaWeather()

const chinaWeather = async () => {
    const chi_url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=china'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78f6504d7emsh40b4cfdfb27c276p124141jsnca782bcd4f06',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    let response = await fetch(chi_url, options)
    let data = await response.json()
    // console.log(data.humidity)
    china_cloud_pct.innerHTML = data.cloud_pct
    china_feels_like.innerHTML = data.feels_like
    china_humidity.innerHTML = data.humidity
    china_max_temp.innerHTML = data.max_temp
    china_min_temp.innerHTML = data.min_temp
    china_sunrise.innerHTML = data.sunrise
    china_sunset.innerHTML = data.sunset
    china_temp.innerHTML = data.temp
    china_wind_degrees.innerHTML = data.wind_degrees
    china_wind_speed.innerHTML = data.wind_speed
}
chinaWeather()


// lets contoll card button 
let cardButton=document.querySelectorAll('.butBox button')
cardButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button.innerHTML)
    })
})