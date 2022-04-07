// Orange
var toastTrigger = document.getElementById('liveToastBtnOrange');
var toastLiveExampleOrange = document.getElementById('liveToastOrange');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleOrange);
    toast.show();
  })
}

let count = 0;
let display = document.getElementById("countShow");
liveToastBtnOrange.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Lemonade
var toastTrigger = document.getElementById('liveToastBtnLemonade');
var toastLiveExampleLemonade = document.getElementById('liveToastLemonade');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleLemonade);
    toast.show();
  })
}

liveToastBtnLemonade.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Cherry
var toastTrigger = document.getElementById('liveToastBtnCherry');
var toastLiveExampleCherry = document.getElementById('liveToastCherry');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleCherry);
    toast.show();
  })
}

liveToastBtnCherry.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Apple
var toastTrigger = document.getElementById('liveToastBtnApple');
var toastLiveExampleApple = document.getElementById('liveToastApple');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleApple);
    toast.show();
  })
}

liveToastBtnApple.onclick =  function() {
    count++;
    display.innerHTML = count;
}