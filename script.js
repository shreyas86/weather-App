let key = "c748e32493445acc37981ee027baf15a"
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let btnn = document.querySelector('.btn');
let imgw = document.querySelector('.wimg');
let city1 = document.querySelector('.search input');
let weather = async (city) => {
    let response = await fetch(url + city + `&appid=${key}`)
    if(response.status== 404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.main').style.display="none";

    }else{
        document.querySelector('.error').style.display='none';

    let data = await response.json()
    console.log(data)
if(it.value==''){
    alert("enter city name")
}
else{
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    document.querySelector('.weather').innerHTML = data.weather[0].description;
    
    if (data.weather[0].main == 'Haze') {
        imgw.src = "aa769448917e8d1075db70908fef0d79.png";

    } else
        if (data.weather[0].main == 'Rain') {
            imgw.src = "73cb72942a683178122044422d174050.png";

        } else if (data.weather[0].main == 'Clear') {
            imgw.src = "—Pngtree—sun png clipart colored_5656301.png";

        } else if (data.weather[0].main == 'Mist') {
            imgw.src = "transparent-cloud-computing-5f3b881b5ddf95.1970903515977369873845.png";
        } else if (data.weather[0].main == 'Drizzle') {
            imgw.src = "kisspng-angle-font-meteor-fish-5aac2832077111.0267147015212319220305.png";
        }
        document.querySelector('.main').style.display="block";
    }
}
}
btnn.addEventListener('click', () => {
    weather(it.value)

})