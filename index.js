//NAV DROPDOWN
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    for (const dd of dropdown) {
      dd.classList.remove("active");
      dd.nextElementSibling.style.display = "none";
    }
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//Logo link to home
var logo = document.getElementById("logo-image");
logo.addEventListener("click", () => {
  window.location.href = "../home.html";
});

//toggles media on click
var mediaLink = document.getElementsByClassName("dropdown-link");
var media = document.getElementsByClassName("media-content");

for (let j = 0; j < mediaLink.length; j++) {
  mediaLink[j].addEventListener("click", () => {
    for (const el of media) {
      el.style.opacity = "0";
      el.style.zIndex = "-5";
    }
    media[j].style.opacity = "1";
    media[j].style.zIndex = "100";
  });
}

//displays mobile links on click
var mediaImages = document.getElementsByClassName("media-visual");
var mediaIcons = document.getElementsByClassName("mobile-media-links");
for (let i = 0; i < mediaImages.length; i++) {
  mediaImages[i].addEventListener("click", () => {
    // mediaIcons[i].style.opacity = 1;
    mediaIcons[i].classList.toggle("fade");
  });
}

//toggles secret input
var lock = document.getElementById("lock");
var input = document.getElementById("secret-input");
lock.addEventListener("click", () => {
  input.classList.toggle("invisible");
});

input.addEventListener("keyup", function onEvent(event) {
  if (event.key === "Enter") {
    console.log("entered: ", input.value);
    return false;
  }
});
