import React, { useEffect, useState } from "react";
import { Card, ButtonGroup, Button, Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./home.css";
import bg from "../../../assets/images/doughnut.jpeg";
import Veg from "../../../assets/images/veg.png";
import Share from "../../../assets/images/share.png";
import CommanButton from "../../../commancomponet/CommanButton";
import Badge from "react-bootstrap/Badge";
import { Carousel } from "react-bootstrap";
import home1 from "../../../assets/images/home_1.png";
import home2 from "../../../assets/images/home_2.webp";
import home3 from "../../../assets/images/home_3.webp";
import { useNavigate } from "react-router-dom";
import Header from "../../../commancomponet/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import {
  addProduct,
  updateProductQuantity,
  removeProduct,
} from "../../store/placeOrderSlice";
import { MdOutlineClear } from "react-icons/md";
import MenuCard from "./menuCard";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
function ProductList() {
  const { products, status } = useSelector((state) => state.products);
  const { data, cartProducts } = useSelector((state) => state.placeOrder);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  console.log(data);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  console.log(cartProducts);

  useEffect(() => {
    if (data) {
      dispatch(fetchProducts());
    } else {
      navigate("/adminpanel/order");
    }
  },[data]);

  const addToCart = (e, menu) => {
    e.stopPropagation();
    console.log(cartProducts);

    if (
      cartProducts.some((product) => product.product_id === menu.product_id)
    ) {
      setAlert({
        show: true,
        message: "Product already exist into cart",
        varient: "danger",
      });
    } else {
      const product = {
        product_id: menu.product_id,
        name: menu.name,
        description: menu.details,
        quantity: 1,
        rate: menu.making_price,
        sub_total_amount: menu.making_price,
      };
      dispatch(addProduct(product));
    }
  };

  console.log(cartProducts);
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
  };

  // const [selectedOption, setSelectedOption] = useState("Delivery");
  const incrementQuantity = (item) => {
    dispatch(
      updateProductQuantity({
        id: item.product_id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1)
      dispatch(
        updateProductQuantity({
          id: item.product_id,
          quantity: item.quantity - 1,
        })
      );
  };

  const calculateTotal = () => {
    return cartProducts.reduce(
      (total, item) => total + item.rate * item.quantity,
      0
    );
  };

  if (status !== "loading") {
    return (
      <div className="home-container">
        <Header count={cartProducts.length} />
        <UncontrolledExample />
        <div className="row p-3 m-0">
          <div className="col-md-9 col-lg-8 col-12">
            <h2 className="fs-5 fw-bold pb-2 mb-0">Menu</h2>
            {products && (
              <div className="row m-0">
                {products.slice(0, 8).map((menu, index) => (
                  <div
                    onClick={() => handleShowModal(menu)}
                    className="col-sm-4 ps-0 col-md-4 col-lg-3 col-6 mt-2 pt-2"
                    key={index}
                  >
                    <MenuCard
                      image={bg}
                      type={menu.type}
                      name={menu.name}
                      description={menu.details}
                      price={menu.making_price}
                      handleAdd={(e) => {
                        addToCart(e, menu);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-3 col-lg-4 px-md-2 col-12 h-auto pb-3">
            <div className="card card-size h-100">
              <div className="card-body p-2">
                <h5 className="fs-5 fw-bold pb-4">Your Cart</h5>
                <div>
                  {cartProducts.map((cart) => (
                    <div
                      className="row m-0 align-items-center"
                      key={cart.product_id}
                    >
                      <div className="col-lg-7 col-7 p-2">
                        <div style={{ fontSize: "14px" }}>
                          <span className="fw-bold">{cart.name}</span> (
                          {cart.quantity} Piece)
                        </div>
                        <div style={{ fontSize: "14px" }}>
                          {cart.quantity} x ₹{cart.making_price} = ₹
                          {cart.quantity * cart.rate}
                        </div>
                      </div>
                      <div className="col-lg-5 col-5 text-end quantity_grp">
                        <ButtonGroup className="increment-decrement-group">
                          <Button
                            className="btn-custom px-1"
                            onClick={() => {
                              decrementQuantity(cart);
                            }}
                          >
                            -
                          </Button>
                          <Button className="btn-custom count-display">
                            {cart.quantity}
                          </Button>
                          <Button
                            className="btn-custom px-1"
                            onClick={() => {
                              incrementQuantity(cart);
                            }}
                          >
                            +
                          </Button>
                        </ButtonGroup>
                        <MdOutlineClear
                          className="ms-2 remove_icon"
                          onClick={() => {
                            dispatch(removeProduct(cart.product_id));
                          }}
                        />
                      </div>
                      <hr />
                    </div>
                  ))}
                  <div className="d-flex justify-content-between p-2">
                    <div className="fw-bold">Subtotal</div>
                    <div className="fw-bold">₹{calculateTotal()}</div>
                  </div>
                  <div className="pt-3 d-flex justify-content-center">
                    <CommanButton
                      label={`Add Checkout ₹${calculateTotal()}`}
                      onClick={() => {
                        if (cartProducts.length !== 0) {
                          navigate("/adminpanel/order/paymentcheckout");
                        } else {
                          setAlert({
                            show: "true",
                            message: "Please add products",
                            varient: "danger",
                          });
                        }
                      }}
                      variant="#7B3F0080"
                      className="mb-3 ps-4 pe-4 checkout_btn"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {products.length > 8 && (
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
              breakpoints={{
                320: { slidesPerView: 1 },

                640: { slidesPerView: 2 },

                768: { slidesPerView: 3 },

                1024: { slidesPerView: 4 },

                1280: { slidesPerView: 4 },
              }}
            >
              {products.slice(8).map((item) => (
                <SwiperSlide key={item.product_id} className="p-sm-2 p-3 ">
                  <div className=" m-4">
                    <div key={item.product_id} className="swip_cont">
                      <div className="img_cont">
                        <img
                          src={bg}
                          alt="Croissants"
                          className="swip_card_img"
                        />
                      </div>
                      <Card
                        onClick={() => handleShowModal(item)}
                        style={{ cursor: "pointer" }}
                        className="swipper_card"
                      >
                        <Card.Body className="p-2">
                          <div className="pb-2 ps-1 pt-2">
                            <img
                              style={{ height: "1rem", width: "1rem" }}
                              src={Veg}
                              alt=""
                            />
                          </div>
                          <h5
                            className="card-title ps-1 text-truncate"
                            style={{ fontSize: "14px" }}
                          >
                            {item.name}
                          </h5>
                          <div className="row ps-1 align-items-center flex-grow-1">
                            <div className="col-sm-5 pe-0 col-4">
                              <p className="menu_cost">₹{item.making_price}</p>
                            </div>
                            <div className="col-sm-7 ps-0 text-end  col-8">
                              <Button
                                onClick={(e) => {
                                  addToCart(e, item);
                                }}
                                className="cream_btn"
                              >
                                Add to cart
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {selectedItem && (
          <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
            onHide={handleCloseModal}
          >
            {/* Custom Header with Background Image */}
            <div className="p-3">
              <div
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  position: "relative",
                }}
              ></div>
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="custom_close_btn"
              >
                &times;
              </button>
            </div>
            <Modal.Body>
              <h5
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "default" }}
              >
                <div>
                  <img src={Veg} alt="veg" />
                  <Badge
                    style={{ backgroundColor: "#d7bb9e", color: "#7b3f00" }}
                    bg="#d7bb9e"
                  >
                    Best Seller
                  </Badge>
                </div>
                <div>
                  <img style={{ cursor: "pointer" }} src={Share} alt="share" />
                </div>
              </h5>
              <div className="d-flex justify-content-between align-items-center">
                <Modal.Title style={{ cursor: "default" }}>
                  {selectedItem.name}
                </Modal.Title>
                <span style={{ cursor: "default" }} className="h5 fw-bold">
                  ₹{selectedItem.making_price}
                </span>
              </div>

              <p style={{ cursor: "default" }}>{selectedItem.details}</p>
            </Modal.Body>
            <Modal.Footer>
              <CommanButton
                label="Add to Cart"
                onClick={(e) => {
                  addToCart(e, selectedItem);
                  handleCloseModal();
                }}
                variant="#7B3F0080"
                className="mb-3 ps-4 pe-4 w-100"
                style={{ borderRadius: "5px" }}
              />
            </Modal.Footer>
          </Modal>
        )}
        <BackdropAlert
          closeAlert={() => {
            setAlert({ ...alert, show: false });
          }}
          show={alert.show}
          setShow={setAlert}
          varient={alert.varient}
          message={alert.message}
        />
      </div>
    );
  } else {
    return (
      <div className="loading_container">
        <Spinner
          animation="border"
          style={{ color: "#7B3F00" }}
          className="m-auto"
        />
      </div>
    );
  }
}

export default ProductList;