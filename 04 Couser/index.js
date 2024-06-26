let main = document.querySelector("#main");
let couser = document.querySelector("#couser");
let img = document.querySelector("#image");
main.addEventListener("mousemove", (e) => {
  gsap.to(couser, {
    x: e.x,
    y: e.y,
    duration: 0.5,
  });
  console.log(e.x, e.y);
});
img.addEventListener("mouseenter", (e) => {
  couser.innerHTML = "View More";
  gsap.to(couser, {
    duration: 0.5,
    scale: 4,
    backgroundColor: "#ffffff7e",
  });
});
img.addEventListener("mouseleave", (e) => {
  couser.innerHTML = "";
  gsap.to(couser, {
    scale: 1,
  });
});
