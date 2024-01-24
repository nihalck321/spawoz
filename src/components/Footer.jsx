import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/img/sp-logo-w.svg";
import { ImFacebook, ImLinkedin, ImTwitter, ImYoutube } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer pb-0">
        <Container fluid>
          <Container>
            <Row>
              <Col lg={3} sm={6}>
                <div className="log">
                  <img src={Logo} alt="" />
                </div>
                <div className="social_media">
                  <Link className="pl_g">
                    <ImFacebook 
                      style={{ color: "#fff", fontSize: 20, cursor: "pointer"}}
                    />
                  </Link>
                  <Link>
                    <ImTwitter
                      style={{ color: "#fff", fontSize: 20, cursor: "pointer" }}
                    />
                  </Link>
                  <Link>
                    <ImLinkedin
                      style={{ color: "#fff", fontSize: 20, cursor: "pointer" }}
                    />
                  </Link>
                  <Link>
                    <ImYoutube
                      style={{ color: "#fff", fontSize: 20, cursor: "pointer" }}
                    />
                  </Link>
                  <Link>
                    <SiInstagram
                      style={{ color: "#fff", fontSize: 20, cursor: "pointer" }}
                    />
                  </Link>
                </div>
              </Col>
              <Col lg={3} sm={6} className="pl-4 rot">
                <h6>Quick Links</h6>
                <p className="pt-3">Our Works</p>
                <p>Services</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Privacy Policy</p>
              </Col>
              <Col lg={3} sm={6}>
                <h6>Contact Info</h6>
                <p className="pt-3"> Office : +91 484 4030 911</p>
                <p>Sales Enquiry : +91 9995 753016</p>
                <p> HR Enquiry : +91 8138 967753</p>
                <p> Sales : support@spawoz.com</p>
                <p> Careers : career@spawoz.com</p>
              </Col>
              <Col lg={3} sm={6}>
                <h6>Get In Touch</h6>
                <p className="pt-3"> Ground Floor, Vismaya Building,</p>
                <p> Infopark Kochi Campus,</p>
                <p> Cochin, Kerala, India - 682 042</p>
              </Col>
              <Col lg={12}>
                <p className="contact-info footer-bottom mb-0"> © 2022 Spawoz Technologies Private Ltd.</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Footer;
