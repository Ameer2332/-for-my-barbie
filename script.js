function openStory() {

  const main = document.getElementById("mainContent");

  main.style.display = "block";

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

  setTimeout(() => {

    revealElements();

  }, 500);

}


function revealElements() {

  const elements =
    document.querySelectorAll(".reveal");


  elements.forEach((element) => {

    const position =
      element.getBoundingClientRect().top;


    if (position < window.innerHeight - 70) {

      element.classList.add("show");

    }

  });

}


window.addEventListener(
  "scroll",
  revealElements
);


window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      revealElements();

    }, 500);

  }
);
