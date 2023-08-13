import React, { useEffect, useRef } from "react";
import "./assests/Gsapcircle.css";
import { CSSPlugin } from "gsap/CSSPlugin";
import { gsap } from "gsap";

const Gsapcircle = () => {
  gsap.registerPlugin(CSSPlugin);

  const shapeRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const iconPositions = [
      { x: 810, y: 80, className: "icon" },
      { x: 850, y: 200, className: "icon" },
      { x: 840, y: 320, className: "icon" },
      { x: 760, y: 400, className: "icon" },
      { x: 630, y: 442, className: "icon" },
      { x: 500, y: 400, className: "icon" },
      { x: 380, y: 320, className: "icon" },
      { x: 320, y: 200, className: "icon" },
      { x: 360, y: 90, className: "icon" },
      { x: 480, y: 40, className: "icon" },
      { x: 600, y: 10, className: "icon" },
      { x: 700, y: 40, className: "icon" },
    ];

    const iconPositions400 = [
      { x: 700, y: 100, className: "icon" },
      { x: 660, y: -10, className: "icon" },
      { x: 580, y: 60, className: "icon" },
      { x: 500, y: 0, className: "icon" },
      { x: 450, y: 80, className: "icon" },
      { x: 580, y: -60, className: "icon" },
      { x: 580, y: 380, className: "icon" },
      { x: 470, y: 350, className: "icon" },
      { x: 680, y: 320, className: "icon" },
      { x: 680, y: 440, className: "icon" },
      { x: 580, y: 500, className: "icon" },
      { x: 480, y: 450, className: "icon" },
    ];

    const timeline = gsap.timeline({ paused: true });
    let mm = gsap.matchMedia();
    mm.add("(min-width: 400px)", () => {
      gsap.set(shapeRef.current, { autoAlpha: 1, y: 50, x: 10 });
      gsap.set(iconsRef.current, {
        autoAlpha: 1,
        y: 260,
      });
      iconsRef.current.forEach((iconRef, index) => {
        const position = iconPositions400[index];
        timeline.to(
          iconRef,
          {
            duration: 1,
            x: iconPositions400[index].x - 570,
            y: iconPositions400[index].y + 30,
            autoAlpha: 1,
            className: position.className,
          },
          `-=${-index}`
        );
      });
    });

    mm.add("(min-width: 800px)", () => {
      gsap.set(shapeRef.current, { autoAlpha: 1, y: 50, x: 10 });
      gsap.set(iconsRef.current, {
        autoAlpha: 1,
        y: 260,
      });
      iconsRef.current.forEach((iconRef, index) => {
        const position = iconPositions[index];

        timeline.to(
          iconRef,
          {
            duration: 1,
            x: iconPositions[index].x - 570,
            y: iconPositions[index].y + 30,
            className: position.className,
            autoAlpha: 1,
          },
          `-=${-index}`
        );
      });
    });
    shapeRef.current.animation = timeline;

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shapeRef.current.animation.play();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (shapeRef.current) {
      observer.observe(shapeRef.current);
    }
  }, []);

  return (
    <>
      <div className="shape-container">
        <div className="shape" ref={shapeRef}>
          <img
            src="https://www.garwarefibres.com/themes/custom/garware/app/images/about_us/Polygon-md.png"
            alt="polygon"
            width={200}
            className="images"
          />

          <h3 className="centered">Our Mission</h3>
        </div>

        <div className="icons">
          <div className="" ref={(el) => (iconsRef.current[0] = el)}>
            <i class="bi bi-airplane-engines"></i> <p>Sports</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[1] = el)}>
            <i class="bi bi-airplane-engines"></i> <p>Industrial</p>
          </div>

          <div className="" ref={(el) => (iconsRef.current[2] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Yarn & Threads</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[3] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Defence & Govt</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[4] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Safety</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[5] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Coated Fabrics</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[6] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Material Handling</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[7] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Shipping & Offshore</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[8] = el)}>
            <i class="bi bi-airplane-engines"></i> <p>Aquaculture</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[9] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Agriculture</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[10] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Fisheries</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[11] = el)}>
            <i class="bi bi-airplane-engines"></i>
            <p>Geo-synthetics</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsapcircle;
