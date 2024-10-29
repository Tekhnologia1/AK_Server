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
import { Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./home.css";
import Logo from "../../assets/images/ai-01 1.png";
import donut from "../../assets/images/qas.png";
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
import MenuCard from "./MenuCard";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination,  } from 'swiper';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

function Home() {
  const navigate = useNavigate();
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

  const [selectedOption, setSelectedOption] = useState('Delivery');


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
      <Header />
      <UncontrolledExample />

      {/* <div className="home_image img-fluid"></div> */}

      <div className="row p-3 m-0">
        <div className="col-md-9 col-lg-8 col-12">
          <h2 className="fs-5 fw-bold pb-2 mb-0">Menu</h2>
          <div className="row m-0">
            {menuItems.map((menu, index) => ( 
              <div   onClick={() => handleShowModal(menu)} className="col-sm-4 ps-0 col-md-4 col-lg-3 col-6 mt-2 pt-2" key={index}>
                <MenuCard image={menu.image} type={menu.type} name={menu.name} description={menu.description} price={menu.price} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3 col-lg-4 px-md-2 col-12 h-auto">

          {/* <Col lg={4} md={3} sm={12} className="d-none d-lg-block " style={{height:'100%'}}> */}
          <div className="card card-size h-100">
            <div className="card-body p-2">
              <h5 className="fs-5 fw-bold pb-4">Your Cart</h5>
              <div className="pb-4 d-flex justify-content-center">
                <ButtonGroup className="toggle-group inner_spacing">
                  <Button
                    className={`toggle-button ${selectedOption === 'Delivery' ? 'active' : 'outline-cream'}`}
                    onClick={() => setSelectedOption('Delivery')}
                  >
                    Delivery
                  </Button>
                  <Button
                    className={`toggle-button ${selectedOption === 'Pickup' ? 'active' : 'outline-cream'}`}
                    onClick={() => setSelectedOption('Pickup')}
                  >
                    Pickup
                  </Button>
                </ButtonGroup>
                {/* <div className="btn-group btn-group-toggle border w-lg-80">
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
                  </div> */}
              </div>
              <div>
                <div className="row m-0">
                  <div className="col-lg-7 p-2">
                    <div style={{ fontSize: '14px' }}>Eggless Dutch Truffle Pastry (1 Piece)</div>
                    <div style={{ fontSize: '14px' }}>1 x ₹129 = ₹129</div>
                  </div>
                  <div className="col-lg-5 text-end">
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
                  <div className="col-lg-7 p-2">
                    <div style={{ fontSize: '14px' }}>Eggless Dutch Truffle Pastry (1 Piece)</div>
                    <div style={{ fontSize: '14px' }}>1 x ₹129 = ₹129</div>
                  </div>
                  <div className="col-lg-5 text-end">
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
                    onClick={() => { navigate('/dashboard/adminpanel/order/paymentcheckout') }}
                    variant="#7B3F0080"
                    className="mb-3 ps-4 pe-4 checkout_btn"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* </Col> */}

        </div>
      </div>

      <div className=" p-3">
        <h2 className="fs-5 mt-3 fw-bold">You may also Like</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          // pagination={{ clickable: true }}

          breakpoints={{

            320: { slidesPerView: 1 },

            640: { slidesPerView: 2 },

            768: { slidesPerView: 3 },

            1024: { slidesPerView: 4 },

            1280: { slidesPerView: 5 },

          }}
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id} className="p-3">
              <div key={item.id}>
                <Card
                  onClick={() => handleShowModal(item)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body className="">
                    <div className="text-center">
                      <img 
                        style={{ borderRadius: "5px" }}
                        className="img-fluid"
                        src={item.image}
                        alt="menu image"
                      />
                    </div>
                    <div className="pb-2 ps-1 pt-2">
                      <img
                        style={{ height: "1rem", width: "1rem" }}
                        src={Veg}
                        alt=""
                      />
                    </div>
                    <h5 className="card-title" style={{fontSize: '14px'}}>{item.name}</h5>
                    <div className="row align-items-center flex-grow-1">
                      <div className="col-sm-4 pe-0 col-4">
                        <p className="menu_cost">₹{item.price}</p>
                      </div>
                      <div className="col-sm-8 ps-0 text-end  col-8">
                        <Button className="cream_btn">Add to cart</Button>

                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>




      {/* <div className="p-3">
        <h2 className="fs-4 fw-bold">You may also like</h2>
        <div className="row m-0">
          {menuItems1.map((menu, index) => (
            <div className=" col-lg-2 col-md-3 col-6 mt-2 pt-2" key={index}>
              <MenuCard onClick={() => handleShowModal(menu)}
                image={menu.image} type={menu.type} name={menu.name} price={menu.price} className="bottom_card" />
            </div>
          ))}
        </div>
      </div> */}

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
                style={{ width: "50%", height: "auto", marginBottom: "1rem" }}
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
