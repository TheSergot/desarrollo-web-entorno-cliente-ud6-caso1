let weather = {
    "apiKey": "7fa29bfe7b3d17b457f7a8974cd4a102",
    "idioma": "es",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
            + "&lang="
            + this.idioma
        )

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, temp_min, temp_max, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "El tiempo en " + name; 
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"; 
        document.querySelector(".description").innerText = description; 
        document.querySelector(".temp").innerText = Math.round(temp) + "°C"; 
        document.querySelector(".tempmin").innerText = "Temperatura mínima: " + Math.round(temp_min) + "°C"; 
        document.querySelector(".tempmax").innerText = "Temperatura máxima: " + Math.round(temp_max) + "°C"; 
        document.querySelector(".humidity").innerText = "Humedad: " + humidity +"%"; 
        document.querySelector(".wind").innerText = "Velocidad del viento: " + speed + " Km/h";
    },    
        search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
        },
};

document
.querySelector(".search-bar")
.addEventListener("click", function() {
    weather.search();
});

weather.fetchWeather("Malaga");