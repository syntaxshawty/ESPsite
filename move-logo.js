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

var shopLink = document.getElementById("shop-link");
shopLink.addEventListener("mouseover", toggleshopStarOn);
shopLink.addEventListener("mouseleave", toggleshopStarOff);

function toggleshopStarOn() {
  console.log("toggle on");
  var star = document.getElementById("shop-star");
  star.style.display = "inline";
}

function toggleshopStarOff() {
  console.log("toggle off");
  var star = document.getElementById("shop-star");
  star.style.display = "none";
}
