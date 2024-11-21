import React, { useEffect, useState } from "react";
import "./paymentcheckout.css";
import { Button, ButtonGroup, Form, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProductQuantity,
  removeProduct,
  clearAllData,
} from "../../store/placeOrderSlice";
import bg from "../../../assets/images/doughnut.jpeg";
import { MdOutlineClear } from "react-icons/md";
import { createOrder } from "../../store/orderSlice";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import { useNavigate } from "react-router-dom";
import PlaceOrderConfirmation from "./orderPlacedConfirmation";

const PaymentCheckout = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { data, cartProducts, cafe } = useSelector((state) => state.placeOrder);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/adminpanel/order");
    }
  }, []);

  const buttonStyles = {
    backgroundColor: "white",
    color: "brown",
    border: "1px solid brown",
    width: "100%",
    marginTop: "8px",
  };

  const hoverStyles = {
    backgroundColor: " #7B3F00",
    color: "white",
  };

  // Function to increment the count
  const handleIncrement = (item) => {
    dispatch(
      updateProductQuantity({
        id: item.product_id,
        quantity: item.quantity + 1,
      })
    );
    // setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the count
  const handleDecrement = (item) => {
    if (item.quantity > 1)
      dispatch(
        updateProductQuantity({
          id: item.product_id,
          quantity: item.quantity - 1,
        })
      );
  };

  // Function to handle checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const calculateTotal = () => {
    return cartProducts.reduce(
      (total, item) => total + item.rate * item.quantity,
      0
    );
  };

  const handleCartDelete = (product) => {
    dispatch(removeProduct(product.product_id));
  };

  const placeOrder = async () => {
    if (data && cafe && cartProducts.length !== 0) {
      console.log(
        data.orderDate,
        "date ",
        new Date(data.orderDate).toISOString().split("T")[0]
      );
      const date = new Date(data.orderDate);
      const formattedDate =
        date.getFullYear() +
        "-" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(date.getDate()).padStart(2, "0");



        console.log("cartProducts",cartProducts)


        const filteredProduct = cartProducts.map(({ name, ...rest }) => rest);


        console.log("filteredProduct",filteredProduct)


      const order = {
        cafe_id: data.cafeId,
        route_id: cafe.routes_id,
        order_number: "ORDER" + data.cafeId,
        order_date: formattedDate,
        total_amount: calculateTotal(),
        tax: 0,
        delivery_charges: 0,
        payment_status: data.paymentStatus,
        delivery_status: 0,
        payment_term_id: 1,
        note: data.note,
        products: filteredProduct,
      };
      console.log(order);
      try {
        const result = await dispatch(createOrder(order));
        if (result.error || result.meta.requestStatus === "rejected") {
          setAlert({
            show: true,
            message: result?.payload?.message
              ? result?.payload?.message
              : "Order noy placed. Please try again!",
            varient: "danger",
          });
        } else {


  
          dispatch(clearAllData());
      
          setConfirm(true);
        }
      } catch (error) {
        console.log(error);
        setAlert({ show: true, message: error.message, varient: "danger" });
      }
    } else {
      console.log("no data");
      // alert("Data not sufficient")
    }
  };



  const handleplaceplaceOrder =()=>{

    dispatch(clearAllData());

    navigate('/adminpanel/order')
}
  return (
    <div className="">
      <div className="pc_container pt-5">
        <div className="row row_margin">
          <div className="col-12 col-md-7">
            <div className="cards">
              <div className="d-flex align-items-start gap-2 inner_spacing">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 22L7.414 20.586L3.828 17H12V15H3.828L7.414 11.414L6 10L0 16L6 22Z"
                    fill="#0B0A0A"
                  />
                  <path
                    d="M16.0008 10C15.2127 9.99882 14.4321 10.1534 13.7039 10.455C12.9758 10.7565 12.3144 11.199 11.7578 11.757L16.0008 16L11.7578 20.243C12.4555 20.9406 13.3145 21.4554 14.2587 21.7418C15.2029 22.0281 16.2031 22.0772 17.1708 21.8847C18.1385 21.6922 19.0438 21.264 19.8065 20.638C20.5692 20.0121 21.1657 19.2077 21.5433 18.2962C21.9209 17.3847 22.0679 16.3941 21.9712 15.4122C21.8746 14.4303 21.5372 13.4873 20.9891 12.6669C20.441 11.8465 19.6991 11.1739 18.829 10.7087C17.9589 10.2436 16.9875 10.0001 16.0008 10Z"
                    fill="#0B0A0A"
                  />
                  <path
                    d="M16.0005 2C14.1621 1.999 12.3416 2.36112 10.6435 3.06557C8.94547 3.77002 7.40327 4.80293 6.10547 6.105L7.51947 7.519C9.19722 5.83956 11.3354 4.69547 13.6635 4.23147C15.9916 3.76746 18.405 4.00439 20.5984 4.91229C22.7919 5.82019 24.6667 7.35825 25.9858 9.3319C27.3049 11.3056 28.009 13.6261 28.009 16C28.009 18.3739 27.3049 20.6945 25.9858 22.6681C24.6667 24.6418 22.7919 26.1798 20.5984 27.0877C18.405 27.9956 15.9916 28.2325 13.6635 27.7685C11.3354 27.3045 9.19722 26.1604 7.51947 24.481L6.10547 25.895C7.73323 27.5226 9.73727 28.7235 11.9401 29.3916C14.1428 30.0596 16.4764 30.1741 18.734 29.7248C20.9916 29.2756 23.1035 28.2765 24.8828 26.8161C26.662 25.3556 28.0536 23.4789 28.9343 21.3522C29.8149 19.2255 30.1575 16.9144 29.9317 14.6236C29.7058 12.3329 28.9185 10.1332 27.6394 8.21941C26.3604 6.30563 24.6291 4.73683 22.5989 3.65198C20.5687 2.56713 18.3023 1.99971 16.0005 2Z"
                    fill="#0B0A0A"
                  />
                </svg>
                <div>
                  <h2 className="mb-0 card-title">{cafe?.cafe_name}</h2>
                  <p className="mb-0 sub-text">Baner, Pune</p>
                </div>
              </div>
              <Button className={`toggle-button active inner_spacing w-100`}>
                Delivery
              </Button>

              <div className="d-flex align-items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 2.66406C19.1826 2.66406 22.2348 3.92834 24.4853 6.17878C26.7357 8.42922 28 11.4815 28 14.6641C28 18.7627 25.7653 22.1174 23.4107 24.5241C22.2342 25.7135 20.9506 26.7918 19.576 27.7454L19.008 28.1321L18.7413 28.3094L18.2387 28.6294L17.7907 28.9027L17.236 29.2254C16.8595 29.4403 16.4335 29.5533 16 29.5533C15.5665 29.5533 15.1405 29.4403 14.764 29.2254L14.2093 28.9027L13.516 28.4761L13.26 28.3094L12.7133 27.9454C11.2304 26.9421 9.8492 25.7962 8.58933 24.5241C6.23467 22.1161 4 18.7627 4 14.6641C4 11.4815 5.26428 8.42922 7.51472 6.17878C9.76515 3.92834 12.8174 2.66406 16 2.66406ZM16 5.33073C13.5246 5.33073 11.1507 6.31406 9.40034 8.0644C7.65 9.81474 6.66667 12.1887 6.66667 14.6641C6.66667 17.7601 8.36267 20.4774 10.4947 22.6587C11.4114 23.5867 12.4022 24.4384 13.4573 25.2054L14.068 25.6401C14.2653 25.7778 14.4551 25.9058 14.6373 26.0241L15.1573 26.3574L15.6147 26.6361L16 26.8614L16.6067 26.5027L17.096 26.1961C17.3564 26.0307 17.6351 25.8454 17.932 25.6401L18.5427 25.2054C19.5978 24.4384 20.5886 23.5867 21.5053 22.6587C23.6373 20.4787 25.3333 17.7601 25.3333 14.6641C25.3333 12.1887 24.35 9.81474 22.5997 8.0644C20.8493 6.31406 18.4754 5.33073 16 5.33073ZM16 9.33073C17.4145 9.33073 18.771 9.89263 19.7712 10.8928C20.7714 11.893 21.3333 13.2496 21.3333 14.6641C21.3333 16.0786 20.7714 17.4351 19.7712 18.4353C18.771 19.4355 17.4145 19.9974 16 19.9974C14.5855 19.9974 13.229 19.4355 12.2288 18.4353C11.2286 17.4351 10.6667 16.0786 10.6667 14.6641C10.6667 13.2496 11.2286 11.893 12.2288 10.8928C13.229 9.89263 14.5855 9.33073 16 9.33073ZM16 11.9974C15.2928 11.9974 14.6145 12.2783 14.1144 12.7784C13.6143 13.2785 13.3333 13.9568 13.3333 14.6641C13.3333 15.3713 13.6143 16.0496 14.1144 16.5497C14.6145 17.0498 15.2928 17.3307 16 17.3307C16.7072 17.3307 17.3855 17.0498 17.8856 16.5497C18.3857 16.0496 18.6667 15.3713 18.6667 14.6641C18.6667 13.9568 18.3857 13.2785 17.8856 12.7784C17.3855 12.2783 16.7072 11.9974 16 11.9974Z"
                    fill="#0B0A0A"
                  />
                </svg>
                <h3 className="mb-0 sub-title">{cafe?.address}</h3>
              </div>
            </div>
            <div className="cards">
              <div className="d-flex align-items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7H19.3C19.529 6.533 19.649 6.02 19.651 5.5C19.651 4.57174 19.2823 3.6815 18.6259 3.02513C17.9695 2.36875 17.0793 2 16.151 2C14.434 2 12.936 3.2 11.82 4.481C10.4 2.842 8.949 2 7.5 2C6.57174 2 5.6815 2.36875 5.02513 3.02513C4.36875 3.6815 4 4.57174 4 5.5C4.003 6.02 4.123 6.533 4.351 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V11C2 11.2652 2.10536 11.5196 2.29289 11.7071C2.48043 11.8946 2.73478 12 3 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7ZM10.058 7H7.5C7.10218 7 6.72064 6.84196 6.43934 6.56066C6.15804 6.27936 6 5.89782 6 5.5C6 5.10218 6.15804 4.72064 6.43934 4.43934C6.72064 4.15804 7.10218 4 7.5 4C8.4 4 9.5 4.754 10.592 6.122C10.373 6.459 10.2 6.757 10.058 7ZM16.158 7H12.416C13.349 5.632 14.787 4 16.155 4C16.5528 4 16.9344 4.15804 17.2157 4.43934C17.497 4.72064 17.655 5.10218 17.655 5.5C17.655 5.89782 17.497 6.27936 17.2157 6.56066C16.9344 6.84196 16.5528 7 16.155 7H16.158ZM13 14H11V22H13V14ZM9 14H4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H9V14ZM15 14V22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V14H15Z"
                    fill="#FC5555"
                  />
                </svg>
                <h3 className="mb-0 sub-title">
                  Order worth ₹ 199.00 more to get free delivery
                </h3>
              </div>
            </div>
            <div>
              <h2 className="mb-2 card-title">Items Added</h2>
              <div className="cards">
                {cartProducts.map((cart) => (
                  <div className="row bottom-border mb-3">
                    <div className="col-7 d-flex gap-1 pe-0 ps-1 align-items-center">
                      <img
                        src={bg}
                        alt={cart.product_name}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.668 5.33854V18.6719H5.33464V5.33854H18.668ZM20.3346 3.67188H3.66797V20.3385H20.3346V3.67188ZM12.0013 7.00521C9.24297 7.00521 7.0013 9.24688 7.0013 12.0052C7.0013 14.7635 9.24297 17.0052 12.0013 17.0052C14.7596 17.0052 17.0013 14.7635 17.0013 12.0052C17.0013 9.24688 14.7596 7.00521 12.0013 7.00521Z"
                          fill="#0FA958"
                        />
                      </svg>

                      <h3 className="mb-0 sub-title">
                        {cart.name} (100gms)
                      </h3>
                    </div>
                    <div className="price_container col-5">
                      <ButtonGroup className="increment-decrement-group">
                        <Button
                          className="btn-custom px-1"
                          onClick={() => {
                            handleDecrement(cart);
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
                            handleIncrement(cart);
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>

                      <h3 className="mb-0 sub-title">
                        ₹ {cart.quantity * cart.rate}
                      </h3>

                      {/* <button className="remove-btn" onClick={() => {}}>R</button> */}
                      <MdOutlineClear
                        className="remove_cart"
                        onClick={() => {
                          handleCartDelete(cart);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="cards">
              <div className="combo_offer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.6652 15.997L29.1372 13.453C29.3141 13.1469 29.3622 12.7831 29.2709 12.4416C29.1797 12.1 28.9565 11.8087 28.6505 11.6316L26.1038 10.1597V7.22632C26.1038 6.87269 25.9634 6.53356 25.7133 6.28351C25.4633 6.03346 25.1241 5.89298 24.7705 5.89298H21.8385L20.3678 3.34765C20.1911 3.04143 19.9 2.81793 19.5585 2.72632C19.3893 2.68099 19.2129 2.66943 19.0392 2.69231C18.8656 2.71518 18.6982 2.77205 18.5465 2.85965L15.9998 4.33165L13.4532 2.85832C13.1469 2.68151 12.783 2.6336 12.4414 2.72512C12.0999 2.81664 11.8087 3.04009 11.6318 3.34632L10.1598 5.89298H7.22785C6.87422 5.89298 6.53509 6.03346 6.28504 6.28351C6.03499 6.53356 5.89451 6.87269 5.89451 7.22632V10.1583L3.34785 11.6303C3.19615 11.718 3.06322 11.8347 2.95665 11.9737C2.85008 12.1128 2.77197 12.2715 2.72677 12.4408C2.68157 12.6101 2.67018 12.7866 2.69324 12.9603C2.71631 13.1339 2.77337 13.3014 2.86118 13.453L4.33318 15.997L2.86118 18.541C2.68516 18.8473 2.63741 19.2109 2.72832 19.5523C2.81924 19.8937 3.04145 20.1854 3.34651 20.3636L5.89318 21.8356V24.7676C5.89318 25.1213 6.03365 25.4604 6.2837 25.7105C6.53375 25.9605 6.87289 26.101 7.22651 26.101H10.1598L11.6318 28.6476C11.7499 28.8494 11.9184 29.017 12.1209 29.1339C12.3233 29.2508 12.5527 29.313 12.7865 29.3143C13.0185 29.3143 13.2492 29.253 13.4545 29.1343L15.9985 27.6623L18.5452 29.1343C18.8513 29.3112 19.2151 29.3593 19.5566 29.2681C19.8982 29.1768 20.1895 28.9537 20.3665 28.6476L21.8372 26.101H24.7692C25.1228 26.101 25.4619 25.9605 25.712 25.7105C25.962 25.4604 26.1025 25.1213 26.1025 24.7676V21.8356L28.6492 20.3636C28.8009 20.276 28.9338 20.1593 29.0404 20.0202C29.1469 19.8812 29.2251 19.7224 29.2703 19.5532C29.3154 19.3839 29.3268 19.2074 29.3038 19.0337C29.2807 18.86 29.2236 18.6926 29.1358 18.541L27.6652 15.997ZM12.6652 9.31698C13.1958 9.31716 13.7046 9.52811 14.0797 9.90344C14.4547 10.2788 14.6654 10.7877 14.6652 11.3183C14.665 11.8489 14.454 12.3577 14.0787 12.7328C13.7034 13.1079 13.1945 13.3185 12.6638 13.3183C12.1332 13.3181 11.6244 13.1072 11.2494 12.7319C10.8743 12.3565 10.6637 11.8476 10.6638 11.317C10.664 10.7864 10.875 10.2776 11.2503 9.90249C11.6256 9.52742 12.1346 9.31681 12.6652 9.31698ZM13.0652 22.117L10.9318 20.5183L18.9318 9.85165L21.0652 11.4503L13.0652 22.117ZM19.3318 22.6503C19.0691 22.6502 18.809 22.5984 18.5663 22.4978C18.3236 22.3971 18.1031 22.2497 17.9174 22.0639C17.7316 21.878 17.5843 21.6574 17.4839 21.4147C17.3834 21.1719 17.3318 20.9117 17.3318 20.649C17.3319 20.3863 17.3838 20.1261 17.4844 19.8834C17.585 19.6407 17.7325 19.4202 17.9183 19.2345C18.1041 19.0488 18.3247 18.9015 18.5675 18.801C18.8103 18.7006 19.0704 18.6489 19.3332 18.649C19.8638 18.6492 20.3726 18.8601 20.7477 19.2354C21.1227 19.6108 21.3334 20.1197 21.3332 20.6503C21.333 21.1809 21.122 21.6897 20.7467 22.0648C20.3714 22.4399 19.8625 22.6505 19.3318 22.6503Z"
                    fill="#111111"
                  />
                </svg>
                <div>
                  <h2 className="mb-0 card-title">Combo Offer</h2>
                  <p className="mb-0 sub-text mt-2">
                    Add item worth ₹129 more to use this coupon
                  </p>
                  <NavLink to="" className="mt-2 custom_link">
                    View more offers &gt;
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="row">
                <div className="col-6">
                  <p className="payment_text">Subtotal</p>
                </div>
                <div className="col-6 text-end">
                  <p className="payment_text">₹ {calculateTotal()}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="payment_text">GST @</p>
                </div>
                <div className="col-6 text-end">
                  <p className="payment_text">₹ 0</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="payment_text">Delivery</p>
                </div>
                <div className="col-6 text-end">
                  <p className="payment_text">₹ 0</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="payment_text">Packaging Charges</p>
                </div>
                <div className="col-6 text-end">
                  <p className="payment_text">₹ 0</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="payment_total">Subtotal</p>
                </div>
                <div className="col-6 text-end">
                  <p className="payment_total">₹ {calculateTotal()}</p>
                </div>
              </div>
              <Button className="btn-brown mt-2 w-100" onClick={placeOrder}>
                Place Order
              </Button>

              <Button
                style={buttonStyles}
                className="w-100 mt-2"
                onClick={handleplaceplaceOrder}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = hoverStyles.backgroundColor;
                  e.target.style.color = hoverStyles.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyles.backgroundColor;
                  e.target.style.color = buttonStyles.color;
                }}

              >
                Cancel Order
              </Button>

              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="checkbox-text">
                  Yes, I would like to receive updates and exclusive offers from
                  AK Golden Crust Foods.
                </span>
              </div>
              <div className="info_container">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_591_2048)">
                    <path
                      d="M2.92984 17.0679C1.97473 16.1454 1.21291 15.042 0.688821 13.8219C0.164731 12.6019 -0.111131 11.2897 -0.122669 9.96189C-0.134207 8.6341 0.11881 7.31731 0.621618 6.08834C1.12443 4.85938 1.86696 3.74286 2.80589 2.80393C3.74481 1.86501 4.86133 1.12247 6.09029 0.619665C7.31926 0.116856 8.63605 -0.136161 9.96385 -0.124622C11.2916 -0.113084 12.6038 0.162778 13.8239 0.686868C15.0439 1.21096 16.1474 1.97278 17.0698 2.92788C18.8914 4.8139 19.8994 7.33993 19.8766 9.96189C19.8538 12.5839 18.8021 15.092 16.948 16.9461C15.0939 18.8001 12.5858 19.8518 9.96385 19.8746C7.34188 19.8974 4.81586 18.8895 2.92984 17.0679ZM15.6598 15.6579C17.161 14.1568 18.0043 12.1208 18.0043 9.99788C18.0043 7.87497 17.161 5.83901 15.6598 4.33788C14.1587 2.83676 12.1227 1.99343 9.99984 1.99343C7.87692 1.99343 5.84096 2.83676 4.33984 4.33788C2.83871 5.83901 1.99539 7.87497 1.99539 9.99788C1.99539 12.1208 2.83871 14.1568 4.33984 15.6579C5.84096 17.159 7.87692 18.0023 9.99984 18.0023C12.1227 18.0023 14.1587 17.159 15.6598 15.6579ZM8.99984 4.99788H10.9998V10.9979H8.99984V4.99788ZM8.99984 12.9979H10.9998V14.9979H8.99984V12.9979Z"
                      fill="#64707D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_591_2048">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  Orders Once placed cannot be cancelled and are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackdropAlert
        closeAlert={() => {
          setAlert({ ...alert, show: false });
        }}
        show={alert.show}
        setShow={setAlert}
        varient={alert.varient}
        message={alert.message}
      />
      <PlaceOrderConfirmation show={confirm} setShow={setConfirm} />
    </div>
  );
};

export default PaymentCheckout;
