function updateTime() {
  let harareElement = document.querySelector("#harare");
  let harareDateElement = harareElement.querySelector(".date");
  let harareTimeElement = harareElement.querySelector(".time");
  let harareTime = moment().tz("Africa/Harare");

  harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
  harareTimeElement.innerHTML = harareTime.format(
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
  let vancouverTime = moment().tz("America/Vancouver;");

  vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
