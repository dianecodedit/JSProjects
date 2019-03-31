function time() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();
  let foodTime = "";

  if (hours === 12) {
    foodTime = "It's Lunch Time!";
  }else if (hours === 17) {
    foodTime = "It's Dinner Time";
  } else if (hours === 7) {
    foodTime = "It's Breakfast Time";
  } else {
    foodTime = "It's Snack Time!";
  }

  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (hours < 10) {
    minutes = "0" + hours
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  document.getElementById("whattime").innerHTML = foodTime;
  document.getElementById("hour").innerHTML = hours + ":";
  document.getElementById("minute").innerHTML = minutes + ":";
  document.getElementById("second").innerHTML = seconds;
}



setInterval(time, 100);
