import React, { useEffect, useRef } from "react";
import "../src/assests/title.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SplitType from "split-type";
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CSSPlugin);

const Title = () => {
  const titleRef = useRef();
  const titleRef2 = useRef();
  const titleRef3 = useRef();

  useEffect(() => {
    // eslint-disable-next-line
    // const mtText = new SplitType("#my-text");

    const timeline = gsap.timeline({ paused: true });
    // timeline.set(".char" || titleRef2.current, {
    //   autoAlpha: 0,
    // });
    // timeline.to(".char", {
    //   autoAlpha: 1,
    //   y: 0,
    //   stagger: 0.05,
    //   delay: 0.2,
    //   duration: 0.01,
    //   fontSize: 30,
    //   fontFamily: "Monaco,monospace",
    // });

    timeline.set(".lines span", {
      autoAlpha: 0,
      y: 100,
    });

    timeline.to(".lines span", {
      autoAlpha: 1,
      color: "red",
      y: -10,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
    });

    // timeline.to(
    //   titleRef2.current,
    //   {
    //     autoAlpha: 1,
    //     rotation: 360,
    //     y: 150,
    //     yoyo: true,
    //     repeat: 6,
    //     ease: "Power2.easeInOut",
    //     color: "red",
    //   },
    //   "<"
    // );

    titleRef.current.animation = timeline;
    titleRef.current.animation.play();
    return () => {
      timeline.kill(); // Cleanup the animation on unmount (optional).
    };

    // const handleIntersection = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       titleRef.current.animation.play();
    //       //   titleRef2.current.animation.play();
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // };

    // const observerOptions = {
    //   rootMargin: "0% 100% 0% 0%",
    // };

    // const observer = new IntersectionObserver(
    //   handleIntersection,
    //   observerOptions
    // );
    // if (titleRef.current) {
    //   observer.observe(titleRef.current);
    // }
    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  // function startWrite() {
  //   document.getElementById("motionPath").style.visibility = "visible";
  //   gsap.from("#motionPath", {
  //     drawSVG: 0,
  //     stroke: "#00ff00",
  //     ease: "none",
  //     autoAlpha: 0,
  //     duration: 3,
  //   });
  //   gsap.to("#circle", {
  //     motionPath: {
  //       path: "#motionPath",
  //       align: "#motionPath",
  //       alignOrigin: [0.5, 0.5],
  //     },
  //     autoAlpha: 1,
  //     duration: 3,
  //     ease: "none",
  //   });
  // }

  return (
    <>
      {/* <div className="titlecontainer">
        <div className="title" id="my-text" ref={titleRef}>
          Title Title Title Title Title Title Title
          <p /> Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title
        </div>
      </div>
      <div className="titlecontainer2">
        <div className="title2" id="my-text2" ref={titleRef2}>
          Title Title Title Title Title Title Title
          <p /> Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title
        </div>
      </div> */}
      <div className="container" ref={titleRef}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h5 className="lines">
              <span>Upskill, Upgrade,</span>
            </h5>
            <h5 className="lines">
              <span>Uplift Your Career!</span>
            </h5>
            <p>
              If you are looking to start your career, or exploring a career
              growth opportunity, Openspace is an exciting option for you. The
              reasons are many: A healthy-IT work culture, good career growth
              options, intellectual satisfaction, and a lot of fun.
            </p>
          </div>
        </div>
      </div>

      {/* <button
        id="go"
        onClick={() => {
          startWrite();
        }}
      >
        Title
      </button>
      <div id="circle"></div>
      <svg width="100%" height="100%" id="myPath" viewBox="400 -75 1500 190">
        <path
          id="motionPath"
          fill="none"
          d="M560,-93 C579,-65 671.713,-118.823 680,-97 694.049,-60 708.437,49.162 648.434,85.055 628.0918,97.22275 548.695,93.36 559.1,29.788 558.631,28.4552 587.561,50.38 621.554,47.606 654.047,44.954 704.142,45.592 735.442,13.497 755.787,-7.36605 790.44,-99.181 767.339,-108.479 759.9015,-111.4727 734.3,41.408 727.93193,87.2554 726.98698,94.05835 732.73,40.543 747.528,8.385 749.75145,3.561 766.103,1.873 773.998,13.419 780.26985,22.5892 755.366,82.54 770.71099,86.58822 774.5792,87.60869 781.919,46.896 795.235,23.114 800.994,12.825 817.588,16.206 830.3243,17.7743 831.57992,17.92892 816.159,13.633 794.054,22.565 784.746,26.324 774.773,91.589 804.751,89.373 827.496,87.69 831.738,61.432 831.246,18.828 831.1711,12.3446 826.268,96.363 841.597,87.044 852.038,80.695 860.79814,42.62346 865.11494,17.95146 866.40998,10.54986 862.384,59.103 860.453,88.902 859.914,97.202 860.798,61.282 870.751,26.29 873.4295,16.8705 888.517,19.531 904.127,23.949 913.85945,26.70305 899.665,72.389 908.691,92.315 914.897,106.019 977.373,-81.133 966.112,-83.069 953.548,-85.229 937.07232,40.45932 931.19453,90.15852 930.23939,98.23464 935.083,54.448 944.214,22.738 946.9178,13.34675 974.833,10.887 974.45922,25.26665 973.723,53.525 959.14018,41.83249 940.87439,51.9476 933.56808,55.99365 956.512,78.568 974.438,91.978 978.20225,94.79379 984.21484,87.30505 990.6859,75.72407 998.59498,61.56953 1007.18893,41.30187 1013.19984,26.26337 1016.47851,18.06055 1054.688,81.284 1031.989,91.802 1006.973,103.391 992.24,90.797 990.884,76.333 990.4844,72.0786 998.758,88.9 1016.953,91.882 1044.245,96.353 1070.359,57.679 1077,46 "
        />
      </svg> */}
    </>
  );
};

export default Title;
