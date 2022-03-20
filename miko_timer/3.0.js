var theDay = new Date("Mar 20, 2022 14:30:00").getTime();
    //const timeOption = {hour12:true, timeZone: 'UTC'};
    //var chwich = myDay.toLocaleString("en-US", timeOption)
    //var theDay = chwich.getTime()

//countdown updater
var x = setInterval(function() {
    var now = new Date().getTime();
    //time between
    var distance = theDay - now;

    //time calculations
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display
    document.getElementById("tk").innerHTML = hours + ":" + minutes + ":" + seconds;

    //count down end
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("tk").innerHTML = "Tiss Time";
    }
}, 1000);