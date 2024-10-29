import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./home.css";
import Logo from "../../assets/images/ai-01 1.png";
import donut from "../../assets/images/doughnut.jpeg";
import Veg from "../../assets/images/veg.png";
import Share from "../../assets/images/share.png";
import CommanButton from "../../commancomponet/CommanButton";
import Badge from "react-bootstrap/Badge";
import { Carousel } from "react-bootstrap";
import home1 from "../../assets/images/home_1.png";
import home2 from "../../assets/images/home_2.png";
import home3 from "../../assets/images/home_3.png";
import { useNavigate } from "react-router-dom";
import Header from "../../commancomponet/Header";
import MenuCard from "../../commancomponet/MenuCard";

function Home() {


  const [menuList, setMenuList] = useState([
    {
        image: '/images/menu_image.png',
        name: 'Build Your Own Croissants',
        type: 'veg',
        description: 'Extra proteins for an additional charge.',
        price: '99'
    },
    {
        image: '/images/menu_image.png',
        name: 'Almond Croissant',
        type: 'non-veg',
        description: `Salmon* • Avocado • Cucumber •   Pineapple • Carrot • Sesame Seeds •  House Sauce`,
        price: '139'
    },
    {
        image: '/images/menu_image.png',
        type: 'veg',
        name: 'Cajun Spiced Potato Croissant Sandwich',
        description: `Spicy Salmon* • Spicy Tuna* • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger`,
        price: '379'
    },
    {
        image: '/images/menu_image.png',
        type: 'veg',
        name: 'Butter Croissant',
        description: `Tuna* • Ground Spicy Tuna* • Avocado • Carrot •Cucumber • Edamame • Watermelon • Radish `,
        price: '99'
    },
    {
        image: '/images/menu_image.png',
        type: 'non-veg',
        name: 'Creamy Donuts',
        description: `Tuna* • Shrimp • Carrot • Mango • Jalapeno • Cucumber • Chili Flakes • Sesame Seeds `,
        price: '49'
    },
    {
        image: '/images/menu_image.png',
        type: 'non-veg',
        name: 'The Donut',
        description: `Tuna* •  Salmon •  Shrimp • Seaweed • Salad • Jalapeno • Sweet Onion • Edamame • Cucumber`,
        price: '29'
    },
    {
        image: '/images/menu_image.png',
        type: 'veg',
        name: 'Almond Cinnamon Roll',
        description: `Shrimp • Crab • Cucumber • Green Onion • Carrot • Edamame • Avocado • Soy Sauce • Spicy Mayo Drizzle`,
        price: '79'
    },
    {
        image: '/images/menu_image.png',
        type: 'veg',
        name: 'Custard Donut',
        description: `Spicy Salmon* • Green Onion • Avocado • Cucumber  •  House Sauce mixed with light sriracha •  Lemon`,
        price: '99'
    },
])
  const navigate=useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const menuItems = [...Array(8)].map((_, index) => ({
    id: index + 1,
    name: `Doughnut ${index + 1}`,
    description: "Some quick example text to build on the card title.",
    price: 129,
    image: donut,
  }));


  const menuItems1 = [...Array(6)].map((_, index) => ({
    id: index + 1,
    name: `Doughnut ${index + 1}`,
    description: "Some quick example text to build on the card title.",
    price: 129,
    image: donut,
  }));


  const CarouselImageFirst = ({ text, image }) => (
    <img src={home1} alt={text} className="d-block w-100" />
  );
  const CarouselImageSecond = ({ text, image }) => (
    <img src={home2} alt={text} className="d-block w-100" />
  );
  const CarouselImageThird = ({ text, image }) => (
    <img src={home3} alt={text} className="d-block w-100" />
  );

  const UncontrolledExample = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <CarouselImageFirst text="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImageSecond text="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImageThird text="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }


  return (
    <div className="home-container">
   
      <Header/>
      <UncontrolledExample />

      {/* <div className="home_image img-fluid"></div> */}

      <div style={{ backgroundColor: "#F2ECE6" }}>
        <Row className="m-0 p-lg-5">
          <Col lg={8} sm={12}>
            <h2 className="fs-5 fw-bold pb-2">Menu</h2>
            <div className="m-0 p-lg-2  row align-items-center">


              
              {menuItems.map((item) => (
                <div key={item.id}  className="mb-3 col-lg-3 col-6">
                  <Card
                    onClick={() => handleShowModal(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="">
                      <div className="">
                        <img
                          style={{ borderRadius: "5px" }}
                          className="img-fluid"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="pb-2 ps-1 pt-2">
                        <img
                          style={{ height: "1rem", width: "1rem" }}
                          src={Veg}
                          alt=""
                        />
                      </div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center pb-1 pt-1">
                        <div className="fw-bold">₹ {item.price}</div>
                        <Button
                          style={{
                            background: "#FFF4D0",
                            color: " #7B3F00",
                            borderColor: "#FFF4D0",
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
                        {/* {menuList.map((menu, index) => (
                            <div className="col-sm-4 col-md-4 col-lg-3 col-6 mt-2 pt-2" key={index}>
                                <MenuCard image={donut} type={menu.type} name={menu.name} description={menu.description} price={menu.price}/>
                            </div>
                        ))} */}

            </div>
          </Col>

          <Col lg={4} sm={12} className="d-none d-lg-block " style={{height:'100%'}}>
            <div className="card card-size">
              <div className="card-body">
                <h5 className="fs-5 fw-bold pb-4">Your Cart</h5>
                <div className="pb-4 d-flex justify-content-center">
                  <div className="btn-group btn-group-toggle border w-lg-80">
                    <label
                      className="btn active"
                      style={{
                        backgroundColor: "#D7BB9E",
                        borderColor: "#D7BB9E",
                      }}
                    >
                      <div>Delivery</div>
                    </label>
                    <label className="btn">
                      <div>Pickup</div>
                    </label>
                  </div>
                </div>
                <div>
                  <div className="row m-0">
                    <div className="col-lg-8 p-2">
                      <div>Eggless Dutch Truffle Pastry (1 Piece)</div>
                      <div>1 x ₹129 = ₹129</div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="btn-group border"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn">
                          -
                        </button>
                        <button type="button" className="btn">
                          1
                        </button>
                        <button type="button" className="btn">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <hr />
                  {/* Repeat structure for other items */}


                  <div className="row m-0">
                    <div className="col-lg-8 p-2">
                      <div>Eggless Dutch Truffle Pastry (1 Piece)</div>
                      <div>1 x ₹129 = ₹129</div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="btn-group border"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn">
                          -
                        </button>
                        <button type="button" className="btn">
                          1
                        </button>
                        <button type="button" className="btn">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  <div className="d-flex justify-content-between p-2">
                    <div className="fw-bold">Subtotal</div>
                    <div className="fw-bold">₹129</div>
                  </div>
                  <div className="pt-5 d-flex justify-content-center">
                    <CommanButton
                      label="Add Checkout ₹129.00"
                      onClick={() => {navigate('/dashboard/adminpanel/order/paymentcheckout')}}  
                      variant="#7B3F0080"
                      className="mb-3 ps-4 pe-4 w-100"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Cart section */}
          <Col lg={4} sm={12} className="d-none d-lg-block">
            {/* Cart structure as per your existing code */}
          </Col>
        </Row>

        <Row className="m-0 ps-lg-5 pe-lg-5 pt-2">
          <Col lg={12} sm={12}>
            <h2 className="fs-4 pb-4 fw-bold">You may also like</h2>
            <div className="m-0 p-lg-2  row align-items-center">
              {menuItems1.map((item) => (
                <div key={item.id}  className="mb-3 col-lg-2 col-6">
                  <Card
                    onClick={() => handleShowModal(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="">
                      <div className="">
                        <img
                          style={{ borderRadius: "5px" }}
                          className="img-fluid"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="pb-2 ps-1 pt-2">
                        <img
                          style={{ height: "1rem", width: "1rem" }}
                          src={Veg}
                          alt=""
                        />
                      </div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center pb-1 pt-1">
                        <div className="fw-bold">₹ {item.price}</div>
                        <Button

                     
                          style={{
                            background: "#FFF4D0",
                            color: " #7B3F00",
                            borderColor: "#FFF4D0",
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>

          {/* Cart section */}
          <Col lg={4} sm={12} className="d-none d-lg-block">
            {/* Cart structure as per your existing code */}
          </Col>
        </Row>
      </div>

      {selectedItem && (
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={handleCloseModal}
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
            </Modal.Header> */}
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto", marginBottom: "1rem" }}
              />
            </div>
            {/* <h5>
              Veg <Badge bg="secondary">Best Seller</Badge>
            </h5> */}
            <h5
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "default" }}
            >
              <div>
                <img src={Veg} />{" "}
                <Badge
                  style={{ backgroundColor: "#d7bb9e", color: "#7b3f00" }}
                  bg="#d7bb9e"
                >
                  Best Seller
                </Badge>
              </div>
              <div>
                <img style={{ cursor: "pointer" }} src={Share} />
              </div>
            </h5>
            <div className="d-flex justify-content-between align-items-center">
              <Modal.Title style={{ cursor: "default" }}>
                {selectedItem.name}
              </Modal.Title>
              <span style={{ cursor: "default" }} className="h5 fw-bold">
                ₹{selectedItem.price}
              </span>
            </div>

            <p style={{ cursor: "default" }}>{selectedItem.description}</p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="primary">Add to Cart</Button> */}
            <CommanButton
              label="Add to Cart"
              onClick={() => alert("Button clicked!")}
              variant="#7B3F0080"
              className="mb-3 ps-4 pe-4 w-100"
              style={{ borderRadius: "5px" }}
            />
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Home;
