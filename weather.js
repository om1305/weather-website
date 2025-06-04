
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector(".button");
    const search = document.querySelector(".search")
    const wind=document.getElementById("wind")
    const temp=document.getElementById("temp")
    const humidity=document.getElementById("humidity")
    const rain_pridiction = document.getElementById("rain_prediction")
    const location =document.getElementById("location")
    
    btn.addEventListener("click", api);
   async function api() {
    const weather_link = `http://api.weatherapi.com/v1/current.json?key=2eb4de295a194b39a0c163612250306&q=${search.value}&aqi=yes`;

    try {
      const response = await fetch(weather_link);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data); // Check your weather data here
      show(data)
      rain(data)
    } catch (error) {
        console.error('Fetch error:', error);
        
        
    }
    function show(data) {
    wind.innerHTML = `wind speed : ${data.current.wind_kph} km/h <br> wind direction : ${data.current.wind_dir} `;
    temp.innerHTML = `temperature : ${data.current.temp_c}°C`
    humidity.innerHTML = `humidity : ${data.current.humidity}%`
    location.innerHTML = `${data.location.country}<br> ${data.location.name}<br> ${data.location.region}`

    }
    function rain(data){
      let x= data.current.humidity
      if(x>=80){ 
        rain_pridiction.innerHTML = "Rain is likely 🌧️";
      }
      else{
        rain_pridiction.innerHTML = " No rain expected ☀️";
      }
    }
  }
  }
);


