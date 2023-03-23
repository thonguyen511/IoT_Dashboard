// Open menu
var hamburger = document.querySelector(".hamburger");
var wrapper  = document.querySelector(".wrapper");
var backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", function(){
    wrapper.classList.add("active");
})

backdrop.addEventListener("click", function(){
    wrapper.classList.remove("active");
})


// Change TABS
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");


tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

                      // CONTROL
                              
window.onload = function(){
  var sliderair = document.getElementById("air-condition-input");
  var resultair = document.getElementById("air-condition-result");
  sliderair.oninput = function(){
      resultair.innerHTML = sliderair.value ;
  }
  
  var sliderled = document.getElementById("led");
  var resultled = document.getElementById("led-result");
  sliderled.oninput = function(){
      resultled.innerHTML = sliderled.value ;
  }

  let elm = document.querySelector('.toggle');
  elm.addEventListener('click', () => {
    elm.classList.toggle('active');
  });

  let elm2 = document.querySelector('.toggle2');
  elm2.addEventListener('click', () => {
    elm2.classList.toggle('active');
  });
}

                      // Living Room
const myInput = document.getElementById("channel");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
}

const myInput2 = document.getElementById("volume");
function upndown(btn){
    let id2 = btn.getAttribute("id");
    let min2 = myInput2.getAttribute("min");
    let max2 = myInput2.getAttribute("max");
    let step2 = myInput2.getAttribute("step");
    let val2 = myInput2.getAttribute("value");
    let calcStep2 = (id2 == "up") ? (step2*1) : (step2 * -1);
    let newValue2 = parseInt(val2) + calcStep2;

    if(newValue2 >= min2 && newValue2 <= max2){
        myInput2.setAttribute("value", newValue2);
    }
}

const myInput3 = document.getElementById("spk-vol");
function highlow(btn){
    let id3 = btn.getAttribute("id");
    let min3 = myInput3.getAttribute("min");
    let max3 = myInput3.getAttribute("max");
    let step3 = myInput3.getAttribute("step");
    let val3 = myInput3.getAttribute("value");
    let calcStep3 = (id3 == "high") ? (step3*1) : (step3 * -1);
    let newValue3 = parseInt(val3) + calcStep3;

    if(newValue3 >= min3 && newValue3 <= max3){
        myInput3.setAttribute("value", newValue3);
    }
}                                                                                      

                      //  FIREBASE

                      //  LIVING ROOM
// Auto load Temperature-------------------------
firebase.database().ref("/TT_IoT/livingroom/weather/temp").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("temp").innerHTML = nd;
  console.log(snapshot.key + nd);
});

// Auto load Do Am----------------------------
firebase.database().ref("/TT_IoT/livingroom/weather/hum").on("value",function(snapshot){
  var hum = snapshot.val();  
  document.getElementById("hum").innerHTML = hum;
  console.log(snapshot.key + hum);
});

// Auto load wind speed-------------------------
firebase.database().ref("/TT_IoT/livingroom/weather/wind").on("value",function(snapshot){
  var wind = snapshot.val();  
  document.getElementById("wind").innerHTML = wind;
  console.log(snapshot.key + wind);
});

// Auto load uv ----------------------------
// Auto load Temperature-------------------------
firebase.database().ref("/TT_IoT/livingroom/weather/uv").on("value",function(snapshot){
  var uv = snapshot.val();  
  document.getElementById("uv").innerHTML = uv;
  console.log(snapshot.key + uv);
});

// Auto load air-codition ----------------------------
var airConditionInput = document.getElementById('air-condition-input');
airConditionInput.addEventListener('input', function(event) {
  var value = event.target.value;
  firebase.database().ref("/TT_IoT/livingroom/air-condition").set(value);
});

// Auto load light-bulb ----------------------------
var airConditionInput = document.getElementById('led');
airConditionInput.addEventListener('input', function(event) {
  var value = event.target.value;
  firebase.database().ref("/TT_IoT/livingroom/light-bulb").set(value);
});

// Auto load robot ----------------------------
var swRobot = document.querySelector('.sw-robot');
swRobot.addEventListener('click', function() {
  var isOn = swRobot.classList.toggle('off');
  firebase.database().ref('/TT_IoT/livingroom/robot').set(isOn);
});

// Auto load window ----------------------------
var swRobot = document.querySelector('.sw-win');
swRobot.addEventListener('click', function() {
  var isOn = swRobot.classList.toggle('on');
  firebase.database().ref('/TT_IoT/livingroom/window').set(isOn);
});

// Auto load radio buttons ----------------------------
var radioButtonGroup = document.getElementsByName('radio-group');
radioButtonGroup.forEach(function(radioButton) {
  radioButton.addEventListener('change', function(event) {
    var label = event.target.nextElementSibling.textContent;
    firebase.database().ref('/TT_IoT/livingroom/massage-chair').set(label);
  });
});

// Auto load tv channel ----------------------------
var tv_channel = document.getElementById('channel');
var up_tv_channel = document.getElementById('increment');
var down_tv_channel = document.getElementById('decrement');
// Add an event listener to the increment button to update the Firebase Realtime Database
up_tv_channel.addEventListener('click', function(event) {
  var tv_channel_new = parseInt(tv_channel.value) + 1;
  firebase.database().ref('/TT_IoT/livingroom/tv/channel').set(tv_channel_new);
  tv_channel.value = tv_channel_new;
});
// Add an event listener to the decrement button to update the Firebase Realtime Database
down_tv_channel.addEventListener('click', function(event) {
  var tv_channel_new = parseInt(tv_channel.value) - 1;
  firebase.database().ref('/TT_IoT/livingroom/tv/channel').set(tv_channel_new);
  tv_channel.value = tv_channel_new;
});

// Auto load tv vol ----------------------------
var tv_vol = document.getElementById('volume');
var up_tv_vol = document.getElementById('up');
var down_tv_vol = document.getElementById('down');
// Add an event listener to the up button to update the Firebase Realtime Database
up_tv_vol.addEventListener('click', function(event) {
  var tv_vol_new = parseInt(tv_vol.value) + 1;
  firebase.database().ref('/TT_IoT/livingroom/tv/volume').set(tv_vol_new);
  tv_vol.value = tv_vol_new;
});
// Add an event listener to the down button to update the Firebase Realtime Database
down_tv_vol.addEventListener('click', function(event) {
  var tv_vol_new = parseInt(tv_vol.value) - 1;
  firebase.database().ref('/TT_IoT/livingroom/tv/volume').set(tv_vol_new);
  tv_vol.value = tv_vol_new;
});

// Auto load spk vol ----------------------------
var spk_vol = document.getElementById('spk-vol');
var up_spk_vol = document.getElementById('high');
var down_spk_vol = document.getElementById('low');
// Add an event listener to the high button to update the Firebase Realtime Database
up_spk_vol.addEventListener('click', function(event) {
  var spk_vol_new = parseInt(spk_vol.value) + 1;
  firebase.database().ref('/TT_IoT/livingroom/speaker-volume').set(spk_vol_new);
  spk_vol.value = spk_vol_new;
});
// Add an event listener to the low button to update the Firebase Realtime Database
down_spk_vol.addEventListener('click', function(event) {
  var spk_vol_new = parseInt(spk_vol.value) - 1;
  firebase.database().ref('/TT_IoT/livingroom/speaker-volume').set(spk_vol_new);
  spk_vol.value = spk_vol_new;
});