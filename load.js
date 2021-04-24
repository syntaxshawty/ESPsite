//LOAD PERCENTAGE

const load = () => {
  var elem = document.getElementById("load-count");
  var bar = document.getElementsByClassName("load-bar");
  bar[0].classList.add("progress-bar-new");
  console.log(elem);
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      window.location.replace("./home.html");
    } else {
      width++;
      // elem.style.width = width + "%";
      elem.innerHTML = "[" + width * 1 + "/100]";
    }
  }
};

setTimeout(load, 1000);
