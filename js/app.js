const headerEl = document.querySelector(".navbar__container");
const triggerDistPx = 1;

let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > triggerDistPx) {
    headerEl.classList.add("navbar__scrolled");
  } else if (window.scrollY <= triggerDistPx) {
    headerEl.classList.remove("navbar__scrolled");
  }
});

// Secondary Transition
const triggerDistPxTWO = 500;

window.addEventListener("scroll", () => {
  if (window.scrollY > triggerDistPxTWO) {
    headerEl.classList.add("navbar__scrolled__secondary");
  } else if (window.scrollY <= triggerDistPxTWO) {
    headerEl.classList.remove("navbar__scrolled__secondary");
  }

  if (window.scrollY < prevScrollY) {
    // User scrolled up
    console.log("Scrolled up");
    headerEl.classList.remove("navbar__scrolled__secondary");
  } else if (window.scrollY > prevScrollY) {
    // User scrolled down
    console.log("Scrolled down");
  }

  prevScrollY = window.scrollY;
});
