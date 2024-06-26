let menu = document.querySelector("#nav i");
let cross = document.querySelector("#mobileNavbar i");
let tl = gsap.timeline();

tl.to("#mobileNavbar", {
  right: "1vw",
  duration: 0.2,
});
tl.from("#mobileNavbar h4", {
  x: 150,
  stagger: 0.2,
  opacity: 0,
});
tl.from("#mobileNavbar i", {
  opacity: 0,
  duration: 0.6,
});
tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});
cross.addEventListener("click", () => {
  tl.reverse();
});
