function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  // let seconds = date.getSeconds();
  let period = "AM";

  if(hour === 0){
    hour = 12;
  }

  if(hour > 12){
    hour = hour - 12;
    period = "PM";
  }

  hour = (hour < 10) ? "0" + hour : hour;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  // seconds = (seconds< 10) ? "0" + seconds: seconds;

  let time = hour + ":" + minutes + " " + period;


  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;

  getPeriod();
  setTimeout(currentTime, 1000);
}

function getPeriod() {
  time = new Date();

  morning_start = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 6, 0, 0, 0);
  morning_end = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 13, 0, 0, 0);
  evening_end = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 18, 0, 0, 0);
  if (time <= morning_start || time >= evening_end) {
    document.getElementsByTagName("body")[0].className = "night";
  }
  else if (time > morning_start && time <= morning_end){
    document.getElementsByTagName("body")[0].className = "morning";
  }
  else {
    document.getElementsByTagName("body")[0].className = "evening";
  }
}
