import React, { useEffect, useRef } from "react";
import "./assests/Gsap.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function Gsap() {
  const textRef = useRef(null);
  const revtextRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const revTextElement = revtextRef.current;

    gsap.set(textElement, {
      autoAlpha: 1,
      x: -800,
    });

    gsap.from(textElement, {
      x: 200,

      scrollTrigger: {
        trigger: textElement,
        start: "top center", // Start the animation when the top of the element reaches the center of the viewport
        end: "bottom center", // End the animation when the bottom of the element reaches the center of the viewport
        scrub: true, // Smoothly animates the element as you scroll
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <>
      <div className="header">
        <p ref={textRef}>Hii-My-Name-Is-Yash</p>
      </div>
    </>
  );
}

export default Gsap;
