import React from "react";
import "./menucard.css";
import { Button, Card } from "react-bootstrap";

const MenuCard = ({ image, type, name, description, price }) => {
  return (
    <div className="custom_card_container">
      <div className="img_container" >
        <img src={image} alt="Croissants" className="card-img-top" style={{borderRadius:'100%'}} />
      </div>

      <Card className="menu_card">
        <Card.Body className="d-flex flex-column gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="type_icon"
          >
            <path
              d="M18.668 5.33854V18.6719H5.33464V5.33854H18.668ZM20.3346 3.67188H3.66797V20.3385H20.3346V3.67188ZM12.0013 7.00521C9.24297 7.00521 7.0013 9.24688 7.0013 12.0052C7.0013 14.7635 9.24297 17.0052 12.0013 17.0052C14.7596 17.0052 17.0013 14.7635 17.0013 12.0052C17.0013 9.24688 14.7596 7.00521 12.0013 7.00521Z"
              fill="#0FA958"
            />
          </svg>
          

          <Card.Title>{name}</Card.Title>
          <Card.Text className="custom_truncate">{description}</Card.Text>
          <div className="row align-items-center">
            <div className="col-sm-4 pe-0 col-12">
              <p className="menu_cost">₹{price}</p>
            </div>
            <div className="col-sm-8 ps-0 text-sm-end text-center col-12">
              <Button className="cream_btn">Add to cart</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
   
  );
};

export default MenuCard;
