import React, { useEffect, useRef } from "react";
import "./assests/Component1.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import { gsap } from "gsap";

import { CSSPlugin } from "gsap/CSSPlugin";

const Component1 = () => {
  const mockData = [
    {
      src: "https://images.unsplash.com/photo-1653325532801-20505a866e9d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      src: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      src: "https://images.unsplash.com/photo-1653325297180-2ba1b7e34215?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379",
    },
    {
      src: "https://images.unsplash.com/photo-1652534603944-2ebdf360d6c7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725",
    },
    {
      src: "https://images.unsplash.com/photo-1653349859617-48672bdfa490?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423",
    },
    {
      src: "https://images.unsplash.com/photo-1653356677409-27ecda2dcba4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      src: "https://images.unsplash.com/photo-1653359406652-843d58aec2c8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      src: "https://images.unsplash.com/photo-1653376774810-a81964615abb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391",
    },
  ];

  gsap.registerPlugin(CSSPlugin);
  const backRef = useRef();
  useEffect(() => {
    gsap.set(backRef.current, {
      backgroundColor: "green",
      autoAlpha: 1,
      duration: 100,
    });

    const timeline = gsap.timeline({ paused: true });
    timeline.to(backRef.current, {
      backgroundColor: "black",
      autoAlpha: 1,
      duration: 5,
      color: "white",
    });
    backRef.current.animation = timeline;

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          backRef.current.animation.play();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (backRef.current) {
      observer.observe(backRef.current);
    }
  }, []);

  return (
    <>
      <div>
        <div className="componentcontainer">
          <header>Heading</header>
          <div className="imgcontainer">
            <Container>
              <Row>
                {mockData.map((data, index) => (
                  <Col md={2} key={index} className="img-check">
                    <Image
                      style={{ width: "100px", height: "100px" }}
                      thumbnail
                      src={data.src}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
        <div className="componentcontainer2" ref={backRef}>
          <header>Heading2</header>
          <div className="imgcontainer2">
            <Container>
              <Row>
                {mockData.map((data, index) => (
                  <Col md={2} key={index} className="img-check">
                    <Image
                      style={{ width: "100px", height: "100px" }}
                      thumbnail
                      src={data.src}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
