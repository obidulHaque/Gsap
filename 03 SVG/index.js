var path = "M 10 100 Q 500 100 1000 100";
var finalPath = "M 10 100 Q 500 100 1000 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", (dots) => {
  path = `M 10 100 Q ${dots.x} ${dots.y} 1000 100`;
  gsap.to("svg path", {
    attr: { d: path },
  });
});
string.addEventListener("mouseleave", (dots) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.8,
    ease: "elastic.out(1,0.2)",
  });
});
