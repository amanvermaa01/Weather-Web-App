APIKEY = "512d95dccaa84e82aea204154242208";

// http://api.weatherapi.com/v1/current.json?key=512d95dccaa84e82aea204154242208&q=London&aqi=yes

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("city-name");
const countryName = document.getElementById("countryName");
const locTime = document.getElementById("loc-time");
const temp = document.getElementById("temp");

async function getData(APIKEY, cityInput) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityInput}&aqi=yes`
  );
  return await promise.json();
}

searchBtn.addEventListener("click", async () => {
  const input = cityInput.value;
  const result = await getData(APIKEY, input);
  cityName.innerText = `${result.location.name} , ${result.location.region}`;
  countryName.innerText = `${result.location.country}`;
  temp.innerText = `${result.current.temp_c}`;
  sup.innerText = "°C";
  locTime.innerText = `${result.location.localtime}`;
});
