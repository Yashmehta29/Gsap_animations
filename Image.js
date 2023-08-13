import React, { useEffect, useRef } from "react";
import "./assests/image.css";
import { gsap } from "gsap";
// import { CSSPlugin } from "gsap/CSSPlugin";

const Image = () => {
  // gsap.registerPlugin(CSSPlugin);

  useEffect(() => {
    let masks = document.querySelectorAll(".mask");

    masks.forEach((mask) => {
      let image = mask.querySelector("img");
      console.log("<><><><>", image);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(mask, { autoAlpha: 1 });

      tl.from(mask, {
        xPercent: -100,
        duration: 1.5,
      });
      tl.from(image, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        duration: 1.5,
      });
    });
  }, []);

  return (
    <>
      <div class="container">
        <div class="img_container">
          <div class="mask">
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              alt=""
              className="tp"
            />
          </div>
        </div>
        <div class="img_container">
          <div class="mask">
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              alt=""
            />
          </div>
        </div>
        <div class="img_container">
          <div class="mask">
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              alt=""
            />
          </div>
        </div>
        <div class="img_container">
          <div class="mask">
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
