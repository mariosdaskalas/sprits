// Iced Tea
var toastTrigger = document.getElementById('liveToastBtnTea');
var toastLiveExampleTea = document.getElementById('liveToastTea');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleTea);
    toast.show();
  })
}

let count = 0;
let display = document.getElementById("countShow");
liveToastBtnTea.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Mocktail
var toastTrigger = document.getElementById('liveToastBtnMock');
var toastLiveExampleMock = document.getElementById('liveToastMock');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleMock);
    toast.show();
  })
}

liveToastBtnMock.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Pina Colada
var toastTrigger = document.getElementById('liveToastBtnPina');
var toastLiveExamplePina = document.getElementById('liveToastPina');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExamplePina);
    toast.show();
  })
}

liveToastBtnPina.onclick =  function() {
    count++;
    display.innerHTML = count;
}

// Coca Cola
var toastTrigger = document.getElementById('liveToastBtnCoca');
var toastLiveExampleCoca = document.getElementById('liveToastCoca');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleCoca);
    toast.show();
  })
}

liveToastBtnCoca.onclick =  function() {
    count++;
    display.innerHTML = count;
}