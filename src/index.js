function updateTime() {
  let capetownElement = document.querySelector("#cape-town");
  let capetownDateElement = capetownElement.querySelector(".date");
  let capetownTimeElement = capetownElement.querySelector(".time");
  let capetownTime = moment().tz("Africa/Johannesburg");

  capetownDateElement.innerHTML = capetownTime.format("MMMM Do YYYY");
  capetownTimeElement.innerHTML = capetownTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthTime = moment().tz("Australia/Perth");

  perthDateElement.innerHTML = perthTime.format("MMMM Do YYYY");
  perthTimeElement.innerHTML = perthTime.format("h:mm:ss [<small>]A[</small>]");

  let vancouverElement = document.querySelector("#vancouver");
  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = vancouverElement.querySelector(".time");
  let vancouverTime = moment().tz("America/Vancouver");

  vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
