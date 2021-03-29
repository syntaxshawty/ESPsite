//LOAD PERCENTAGE

// var elem = document.getElementById("load-count");
// console.log(elem);
// var width = 0;
// var id = setInterval(frame, 50);
// function frame() {
//   if (width >= 100) {
//     clearInterval(id);
//   } else {
//     width++;
//     // elem.style.width = width + "%";
//     elem.innerHTML = "[" + width * 1 + "/100]";
//   }
// }

//MOVE LOGO

// $(".logo-load").click(function () {
//   $(this).animate({ left: "0vw", top: "0vh" }, 1000); // you can set left/top or you can do it with margins
// });

//toggle star
var audioLink = document.getElementById("audio-link");
audioLink.addEventListener("mouseenter", toggleAudioStarOn);
audioLink.addEventListener("mouseleave", toggleAudioStarOff);

function toggleAudioStarOn() {
  console.log("toggle on");
  var star = document.getElementById("audio-star");
  star.style.display = "inline";
}

function toggleAudioStarOff() {
  console.log("toggle off");
  var star = document.getElementById("audio-star");
  star.style.display = "none";
}

var visualLink = document.getElementById("visual-link");
visualLink.addEventListener("mouseover", togglevisualStarOn);
visualLink.addEventListener("mouseleave", togglevisualStarOff);

function togglevisualStarOn() {
  console.log("toggle on");
  var star = document.getElementById("visual-star");
  star.style.display = "inline";
}

function togglevisualStarOff() {
  console.log("toggle off");
  var star = document.getElementById("visual-star");
  star.style.display = "none";
}
