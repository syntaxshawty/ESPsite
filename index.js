//NAV DROPDOWN
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
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
var logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "../home.html";
});

//toggles media on click
var mediaLink = document.getElementsByClassName("dropdown-link");
var media = document.getElementsByClassName("media-content");
console.log("media: ", media);

for (let j = 0; j < mediaLink.length; j++) {
  mediaLink[j].addEventListener("click", () => {
    for (const el of media) {
      el.style.opacity = "0";
    }
    media[j].style.opacity = "1";
  });
}
