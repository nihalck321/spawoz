import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ThreeTextSection from "./ThreeTextSection";
import ButtonAll from "./ButtonAll";
import service1 from "../assets/img/service1.jpg";
import service2 from "../assets/img/service2.jpg";
import service3 from "../assets/img/service3.jpg";
import service4 from "../assets/img/service4.jpg";
import desktopservice1 from "../assets/img/desktopservice1.png";
import iconwebdevelopment from "../assets/img/iconwebdevelopment.png";
import iconecommerce from "../assets/img/iconecommerce.png";
import iconmobileapp from "../assets/img/iconmobileapp.png";

import { motion } from "framer-motion";
import { transition1 } from "../../src/transition";

const HomeService = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={6} className="service_left">
              <ThreeTextSection
                heading="WHAT WE DO?"
                title="We Build Digital 
                        Experiences"
                text="We create custom sof
                tware for customers who want more than just off-the-shelf solutions or for customers with unique software requirements. As a Leading software development Company, we also provide skilled programmers to companies that need more intelligence, and we share more than 6+years of experience advising companies on crucial IT-related matters worldwide."
                serv="hello"
              />
              <ButtonAll title="Our Services" />
            </Col>
            <Col lg={6} className="pt_4">
              <motion.div
                initial={{ opacity: 0, y: "80%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "80%" }}
                transition={transition1}
                className="service_right"
              >
                <Row>
                  <Col xsm={6} className="right_0">
                    <div className="content my-2">
                      <img src={service1} className="img-fluid" alt="" />
                      <div className="content-overlay">
                        <div className="h-100 d-flex align-items-center justify-content-center flex-column box_op_ser">
                          <img
                            className="img-ic2 whatdodiv"
                            src={desktopservice1}
                            alt=""
                          />
                          <h4 className="text-white mb-0 titl">Web Design</h4>
                        </div>
                        <div className="overlay bg_white_trans">
                          <h4 className="text">Web Design</h4>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <img src={service2} className="img-fluid" alt="" />
                      <div className="content-overlay">
                        <div className="h-100 d-flex align-items-center justify-content-center flex-column box_op_ser">
                          <img
                            className="img-ic2 whatdodiv"
                            src={iconwebdevelopment}
                            alt=""
                          />
                          <h4 className="text-white mb-0 titl">Web Design</h4>
                        </div>
                        <div className="overlay bg_white_trans">
                          <h4 className="text">Web Design</h4>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xsm={6}>
                    <div className="content my-2">
                      <img src={service3} className="img-fluid" alt="" />
                      <div className="content-overlay">
                        <div className="h-100 d-flex align-items-center justify-content-center flex-column box_op_ser">
                          <img
                            className="img-ic2 whatdodiv"
                            src={iconecommerce}
                            alt=""
                          />
                          <h4 className="text-white mb-0 titl">Web Design</h4>
                        </div>
                        <div className="overlay bg_white_trans">
                          <h4 className="text">Web Design</h4>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <img src={service4} className="img-fluid" alt="" />
                      <div className="content-overlay">
                        <div className="h-100 d-flex align-items-center justify-content-center flex-column box_op_ser">
                          <img
                            className="img-ic2 whatdodiv"
                            src={iconmobileapp}
                            alt=""
                          />
                          <h4 className="text-white mb-0 titl">Web Design</h4>
                        </div>
                        <div className="overlay bg_white_trans">
                          <h4 className="text">Web Design</h4>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeService;
