import React from 'react';
import { Card } from 'react-bootstrap';
import product from '../../assets/images/Vector (22).png';
import '../../commancomponet/samplecard.css';

function SampleCard() {
  return (
    <div className="card pt-5">
      <Card style={{ width: '18rem' }} className="image_container">
        <div className="image_wrapper">
          <div className="image_card bg-dark rounded-circle">
            <img src={product} alt="image" className="w-100 h-100" />
          </div>
        </div>
        <Card.Title>Info Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card>
    </div>
  );
}

export default SampleCard;
