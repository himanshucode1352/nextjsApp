import React from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Overview = () => {
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="6">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span>Personal details</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="grid-1">
                        <ul>
                          <li>
                            Name: <span>User Name</span>
                          </li>
                          <li>
                            Gender: <span>Male</span>
                          </li>
                          <li>
                            Birthday: <span>27/07/2023</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col lg="6">
                <Accordion allowZeroExpanded preExpanded={["b"]}>
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span>Contact Details</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="grid-1">
                        <ul>
                          <li>
                            Address: <span></span>
                          </li>
                          <li>
                            Home/Work: <span>----</span>
                          </li>
                          <li>
                            Mobile: <span>0000000000</span>
                          </li>
                          <li>
                            Email: <span>info@gmail.com</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col lg="6">
                <Accordion allowZeroExpanded preExpanded={["c"]} className="mt-3">
                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span>Login details</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="grid-1">
                        <ul>
                          <li>
                            Username: <span>User Name</span>
                          </li>
                          <li>
                            Status: <span>Approved</span>
                          </li>
                          <li>
                            Email: <span>info@gmail.com</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>

              <Col lg="12" className="mt-3 mb-5">
                <Card className="p-3">
                  <div className="d-flex">
                    <h6 className="mt-2">Sub-accounts</h6>
                    <Button
                      size="sm"
                      className="default-btn"
                      style={{ marginLeft: "auto",padding:'10px' }}
                    >
                      <i className="bx bx-plus"></i> New
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default Overview;
