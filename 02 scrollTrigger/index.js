gsap.to("#page1 #box", {
  borderRadius: "100%",
  opacity: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    markers: true,
    start: "top +15%",
    end: "end +10%",
    scrub: 2,
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -250%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page2 #box", {
  opacity: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page2 ",
    scroller: "body",
    markers: 2,
    start: "top 50%",
    end: "end 80%",
    scrub: 2,
  },
});
