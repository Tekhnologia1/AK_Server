import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Adminpaneldata from "../jsondata/Adminpaneldata";
import { NavLink } from "react-router-dom";

function Adminpanel() {
  return (
    <div className="p-lg-5">
      <div className="ps-lg-4 pe-lg-4 pb-5  border" style={{ backgroundColor: "#F2ECE6", borderRadius: '4px' }} >
        <Row className="m-0 justify-content-between pb-5">
          {Adminpaneldata.map((card) => (
            <Col lg={3} key={card.id} className="d-flex justify-content-center gy-5 " >
              <Card
                style={{
                  width: "20rem",
                  boxShadow: card.boxShadow ? "#7B3F00 0px 4px 8px" : "none",
                }}
                className="pb-3"
              >
              <NavLink to={card.path} className='text-decoration-none'>
                <Card.Body>
                  <div className="d-flex justify-content-center pt-3">
                    <img
                      src={card.imageSrc}
                      alt={card.altText}
                      height={card.imageHeight}
                      width={card.imageWidth}
                    />
                  </div>
                  <div
                    className="d-flex justify-content-center pt-3 pb-2 fs-5"
                    style={{ color: card.color, fontWeight: 600 }}
                  >
                    {card.title}
                  </div>
                </Card.Body>
                </NavLink>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Adminpanel;
