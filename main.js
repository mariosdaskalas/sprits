var toastTrigger = document.getElementById('liveToastBtnOrange');
var toastLiveExample = document.getElementById('liveToastOrange');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  })
}

let count = 0;
let display = document.getElementById("countShow");
liveToastBtnOrange.onclick =  function() {
    count++;
    display.innerHTML = count;
}