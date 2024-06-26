var tl = gsap.timeline();

tl.from("h1", {
  y: -30,
  opacity: 0,
  duration: 1.5,
  delay: 1,
});

tl.from("ul", {
  y: -20,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});
tl.from("p", {
  opacity: 0,
  duration: 1.5,
  scale: 0.2,
});
