import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./assests/title.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const RollingTextEffect = () => {
  useEffect(() => {
    gsap.set(".rollingText02", { xPercent: 900 });

    gsap.to(".rollingText02", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".rollingText02",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      duration: 8,
    });
  }, []);

  return (
    <div>
      <div className="rollingText02 text">Discover how we help businesses</div>

      <h2>Just scroll ...</h2>
    </div>
  );
};

export default RollingTextEffect;

// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const MarqueeComponent = () => {
//   const scrollLeftRef = useRef(null);

//   useEffect(() => {
//     setTimeout(() => {
//       let section = gsap.utils.toArray(".left-to-right3");
//       gsap.to(section, {
//         xPercent: 1000 + (section.length - 600),
//         ease: "none",
//         scrollTrigger: {
//           start: "top top",
//           trigger: scrollLeftRef.current,
//           pin: true,
//           scrub: 2,
//           span: 5 / (section.length - 1),
//           end: "bottom top",
//           direction: "left",
//           scrollLeft: 1000,
//           pinSpacing: false,
//         },
//       });
//       ScrollTrigger.refresh();
//     });
//   }, []);

//   return (
//     <div className="marquee-text">
//       <div className="left-to-right3 min-h100vh" data-scroll-section>
//         <div className="m-text scrollContainer" ref={scrollLeftRef}>
//           <h2>
//             <span className="outline-span section">INTEGRATE</span>
//             <span className="section">FREIGHT</span>
//             <span className="outline-span section">FORWARDING</span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeComponent;
