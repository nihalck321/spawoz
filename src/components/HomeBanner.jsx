import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonAll from "./ButtonAll";
import "./Home.css";
import banner from "../assets/img/banner.jpg";

import { motion } from "framer-motion";
import { transition1 } from "../../src/transition";
import { Link } from "react-router-dom";

const HomeBanner = (props) => {
  return (
    <>
      <section className="pt-0">
        <Container className="mob_banner_pad">
          <Row>
            <Col lg={6} className="mobile_banner_img">
              <div>
                <img src={banner} alt="" className="img-img-fluid mob_img " />
              </div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, y: "80%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "80%" }}
                transition={transition1}
                className="banner_text"
              >
                <h1>{props.title}</h1>
                <h1>{props.title2}</h1>
                <p className="text_et">{props.text}</p>
                <Link to="/about">
                  <ButtonAll title="Let's Discuss" />
                </Link>
              </motion.div>
            </Col>
            <Col lg={6} className="desktop_banner_img">
              <div className="position-relative height_80vh">
                <div className="position-absolute">
                  <img
                    src={banner}
                    alt=""
                    className="img-img-fluid zoom-img "
                    width="3000"
                    height="2314"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeBanner;
