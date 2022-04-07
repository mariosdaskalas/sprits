// Heineken
var toastTrigger = document.getElementById('liveToastBtnHeineken');
var toastLiveExampleHeineken = document.getElementById('liveToastHeineken');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleHeineken);
    toast.show();
  })
}

let count = 0;
let display = document.getElementById("countShow");

liveToastBtnHeineken.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Amstel
var toastTrigger = document.getElementById('liveToastBtnAmstel');
var toastLiveExampleAmstel = document.getElementById('liveToastAmstel');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleAmstel);
    toast.show();
  })
}

liveToastBtnAmstel.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Jack Daniels
var toastTrigger = document.getElementById('liveToastBtnJack');
var toastLiveExampleJack = document.getElementById('liveToastJack');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleJack);
    toast.show();
  })
}

liveToastBtnJack.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Lola Beer
var toastTrigger = document.getElementById('liveToastBtnLola');
var toastLiveExampleLola = document.getElementById('liveToastLola');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleLola);
    toast.show();
  })
}

liveToastBtnLola.onclick =  function() {
    count++;
    display.innerHTML = count;
}