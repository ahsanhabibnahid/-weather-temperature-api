document.getElementById("searchBtn").addEventListener("click", function () {
  const inputValue = document.getElementById("locationInput").value;
  weatherData(inputValue);
});

function weatherData(inputValue) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&appid=a5a6a7e844aa6916e94aecf772b4cfc4"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cityName = data.name;
      const tempName = data.main.temp;
      const description = data.weather[0].description;
      setValue(cityName, tempName, description)
    })
    .catch((err) => console.log(err));
}

function setValue(cityName, tempName, description) {
  document.getElementById("city").innerText = cityName;
  document.getElementById("temp").innerText = tempName;
  document.getElementById("description").innerText = description;
}
