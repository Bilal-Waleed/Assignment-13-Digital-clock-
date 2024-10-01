function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "PM";

    if(h > 12) {
        h = h - 12;
        session = "AM";
    }

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m; 
    }
    if (s < 10) {
        s = "0" + s;
    }

    var time = h + ":" + m + ":" + s + " <span class='session'>" + session + "</span>";
    document.getElementById("time").innerHTML = time;

    var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    var currentDate = date.toLocaleDateString("en-PK", options);
    document.getElementById("date").innerText = currentDate;

    setTimeout(showTime, 1000);
}

showTime();
