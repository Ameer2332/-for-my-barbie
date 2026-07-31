function startStory() {

  const story = document.getElementById("story");

  story.style.display = "block";

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

  setTimeout(() => {
    revealElements();
  }, 500);
}


function revealElements() {

  const elements = document.querySelectorAll(".reveal");

  elements.forEach((element, index) => {

    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 80) {
      element.classList.add("show");
    }

  });
}


window.addEventListener("scroll", revealElements);

window.addEventListener("load", () => {

  setTimeout(() => {

    document.querySelector(".hero").style.opacity = "1";

  }, 300);

});
