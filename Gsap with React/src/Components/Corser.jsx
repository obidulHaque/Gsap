import gsap from "gsap";
import React from "react";

function Corser() {
  const mouseMovement = (e) => {
    gsap.to("#Corser", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
    });
  };

  return (
    <div id="main" onMouseMove={mouseMovement}>
      <div id="Corser">
        <img src="Dragonfly.png" alt="" />
      </div>
    </div>
  );
}

export default Corser;
