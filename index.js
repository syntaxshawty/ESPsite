//NAV DROPDOWN JS
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

//BORDER THING
// $(document).ready(function () {
//   $("a").hoverIntent(
//     function () {
//       $(this).removeClass("active");
//       setTimeout(function () {
//         $(this).addClass("temp");
//       }, 1000);
//     },
//     function () {
//       $(this).addClass("active");
//       $(this).removeClass("temp");
//     }
//   );
// });
