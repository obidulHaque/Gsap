gsap.from("#p #a", {
  y: 125,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.3,
});
gsap.from("#p #b", {
  y: 125,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: -0.3,
});
