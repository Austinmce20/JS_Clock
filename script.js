let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hrs < 10) {
        hours = "0" + hours;
    }
    let time = `${hrs}:${mins}:${secs}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  

clock();

let clockTwelve = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let newHrs = hrs % 12;
    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    let time = `${newHrs}:${mins}:${secs}`;
    if (hrs < 12) {
        time = time +" AM";
    } else if (hrs > 12) {
        time = time + " PM";
    }
    document.getElementById("clockTwelve").innerText = time;
    setTimeout(clockTwelve, 1000);
  };
  
clockTwelve();





var today = new Date();
var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("date").innerText = currentDate;