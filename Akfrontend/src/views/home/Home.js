// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import "./home.css";
// import CommanButton from "../../commancomponet/CommanButton";
// import Logo from "../../assets/images/ai-01 1.png";
// function Home() {
//   return (
//     <div >
//       <div className="home-container">
//         <Row className=" m-0 ">
//           <Col lg={6} sm={12} className="">
//             <div className="justify-content-start d-flex align-items-center ps-lg-5 ">
//               <div>
//                 <img
//                   src={Logo}
//                   alt=""
//                   style={{ height: "80px", width: "80px" }}
//                 />
//               </div>
//               <div>
//                 <div className="fs-5 fw-bold " style={{ color: " #522800" }}>
//                   AK Golden Crust Foods
//                 </div>
//                 <div>(OVEN FRESH & DELICIOUS) </div>
//               </div>
//             </div>
//           </Col>
//           <Col lg={6} sm={12}>
//             <div className="justify-content-end d-flex pe-lg-5 pe-3"></div>
//           </Col>
//         </Row>
//       </div>

//       <div className="home_image img-fluid"></div>

//       <div className="" style={{ backgroundColor: " #F2ECE6" }}>
//         <div className="row m-0 p-lg-5">
//         <div className="col-lg-9">
//   <div className="fs-5 fw-bold pb-3">Menu</div>
//   <div className="row m-0 p-lg-2">
//     <div className="col-lg-3 col-sm-6 col-6">
//       <div className="card" style={{ width: "18rem" }}>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-3 col-sm-6 col-6">
//       <div className="card" style={{ width: "18rem" }}>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-3 col-sm-6 col-6">
//       <div className="card" style={{ width: "18rem" }}>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-3 col-sm-6 col-6">
//       <div className="card" style={{ width: "18rem" }}>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//           <div className="col-lg-3 d-none d-lg-block">
//   <div className="col-lg-3">
//     <div className="card card-size" style={{ width: '25rem' }}>
//       <div className="card-body">
//         <div className="fs-5 fw-bold pb-4">Your Card</div>

//         <div className="pb-4 d-flex justify-content-center">
//           <div className="btn-group btn-group-toggle border w-lg-80">
//             <label
//               className="btn active"
//               style={{
//                 backgroundColor: "#D7BB9E",
//                 borderColor: "#D7BB9E",
//                 fontWeight: "500",
//               }}
//             >
//               <div className="ps-lg-5 pe-lg-5">Delivery</div>
//             </label>
//             <label className="btn">
//               <div className="ps-lg-5 pe-lg-5">Pickup</div>
//             </label>
//           </div>
//         </div>

//         <div>
//           <div>
//             <div className="row m-0">
//               <div className="col-lg-8 p-2">
//                 <div>Eggless Dutch truffle pastry (1 Piece)</div>
//                 <div>1 x ₹ 129 = ₹129</div>
//               </div>

//               <div className="col-lg-4">
//                 <div
//                   className="btn-group border"
//                   role="group"
//                   aria-label="Basic example"
//                 >
//                   <button type="button" className="btn">-</button>
//                   <button type="button" className="btn">1</button>
//                   <button type="button" className="btn">+</button>
//                 </div>
//               </div>
//             </div>

//             <hr />

//             {/* Repeat structure for other items */}

//             <div className="d-flex justify-content-between p-2">
//               <div className="fw-bold">Subtotal</div>
//               <div className="fw-bold">₹129</div>
//             </div>
//             <div className="pt-5 d-flex justify-content-center">
//               <CommanButton
//                 label="Add Checkout ₹129.00"
//                 onClick={() => alert("Button clicked!")}
//                 variant="#7B3F0080"
//                 className="mb-3 ps-4 pe-4 w-100"
//                 style={{ borderRadius: "5px" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//            </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;







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

function Home() {
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

  return (
    <div className="home-container">
      {/* <Row className="m-0">
        <Col lg={6} sm={12} className="">
          <div className="justify-content-start d-flex align-items-center ps-lg-5 ">
            <div>
              <img
                src={Logo}
                alt="A. K. Golden Crust Foods"
                className="img-fluid"
                style={{ height: "80px", width: "80px" }}
              />
            </div>
            <div>
              <div className="fs-5 fw-bold " style={{ color: " #522800" }}>
                AK Golden Crust Foods
              </div>
              <div>(OVEN FRESH & DELICIOUS) </div>
            </div>
          </div>
        </Col>

        <Col lg={6} sm={12}>
          <div className="justify-content-end d-flex pe-lg-5 pe-3"></div>
        </Col>
      </Row> */}
      <Header/>
      {/* <UncontrolledExample /> */}

      <div className="home_image img-fluid"></div>

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
