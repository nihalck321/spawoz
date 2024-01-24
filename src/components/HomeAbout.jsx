import React from "react";
import homeabout from "../assets/img/homeabout.jpg";
import homeabout2 from "../assets/img/homeabout2.jpg";
import homeabout3 from "../assets/img/homeabout3.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import ThreeTextSection from "./ThreeTextSection";
import ButtonAll from "./ButtonAll";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HomeAbout = () => {
  return (
    <>
      <section>
        <Container >
          <Row>
            <Col lg={6}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
                className="about_right"
              >
                <div className="h-100 banner_12">
                  <div className="banner-1">
                    <img src={homeabout} alt="" className="img-fluid" />
                  </div>
                  <div className="banner-2 d-lg-block">
                    <img src={homeabout2} alt="" className="img-fluid" />
                  </div>
                  <div className=" banner-1  my-2 d-lg-none ">
                    <img src={homeabout3} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about_left">
                <ThreeTextSection
                  heading="GET TO KNOW"
                  title="About Us"
                  text="We're a full-fledged digital consultancy and Leading software development company in India that provides cutting-edge engineering results, helping Fortune 500+ companies and enterprise guests untangle complex issues that always crop up during their digital elaboration time."
                  className="hello"
                />
                <ButtonAll title="View More" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeAbout;
