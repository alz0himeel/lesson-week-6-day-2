function turnOffLights() {
    // change background color of stop light to red
    let offLight = $(".bulb");
    offLight.css("background","black");
}
// turn on stop function
function turnOnStopLight() {
  turnOffLights();
    let stopLight = $("#stopLight");
    stopLight.css("background","red");
    // change background color of stop light to red
}

// turn on slow function
function turnOnSlowLight() {
turnOffLights();
  let slowLight = $("#slowLight");
  slowLight.css("background","yellow");
// change background color of slow light to yellow
}

// turn on go function
function turnOnGoLight() {
  turnOffLights();
  let goLight = $("#goLight");
  goLight.css("background","green");
    // change background color of go light to green
}

// set stop light click event
$ ("#stopButton").on("click",turnOnStopLight);
// set slow light click event
//turnOnSlowLight();
$ ("#slowButton").on("click",turnOnSlowLight);
// set go light click event
$ ("#goButton").on("click",turnOnGoLight);
