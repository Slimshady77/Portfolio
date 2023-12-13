function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  var navbar = document.querySelector(".navbar");
  var navigation = document.querySelector(".navigation");
  var logo = document.querySelector(".logo");
  navbar.classList.toggle("change");
  navigation.classList.toggle("change");

  // Additional logic to handle the display property
  if (navbar.classList.contains("change")) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Add a delay before starting the typing animation
  setTimeout(function () {
    document.getElementById("typewriter-text").style.borderRight = "none";
    document.getElementById("typewriter-text-2").style.animation =
      "typing 3s steps(40) forwards 4s"; // Add delay of 4s
  }, 500);
});
