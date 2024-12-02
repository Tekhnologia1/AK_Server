import React, { useState } from "react";
import "./login.css";
import { jwtDecode } from "jwt-decode";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CommanButton from "../../../commancomponet/CommanButton";
import facebook from "../../../assets/images/Group 3466061.png";
import Gmail from "../../../assets/images/Group 3466060.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/loginSlice";
import { validateLoginData } from "../../validation/Validationall";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import { apiurl } from "../../../Api/apiurl";
import axios from "axios";

function Login() {
  const { user, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, message: "", varient: 'success' })
  const API_BASE_URL = apiurl;
  // Consolidated state for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlogin = async () => {
    validateLoginData(formData)
    const validationErrors = validateLoginData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setAlert({ show: true, message: Object.values(validationErrors)[0], varient: 'danger' })
      return;
    }
    setErrors({});

    try {
      const response = await axios.post(`${API_BASE_URL}/login`,
        { username: formData.email, password: formData.password },
        // {
        //   headers: { 'Content-Type': 'application/json' },
        //   withCredentials: true // Ensure cookies are included
        // }
      );
      const token = response.data.token;
        const decodedToken = jwtDecode(token);
        const UserData = decodedToken;
        console.log("user data ", response);
        console.log("decoded data ", decodedToken);

        localStorage.setItem("token", token);
        setAlert({ show: true, message: "Login Successfull!", varient: 'success' });
        navigate("/");

    } catch (error) {
      console.log(error)
      setAlert({ show: true, message: error.response?.data.message ? error.response?.data.message : "Error in login!", varient: 'danger' })
    }
    // await dispatch(
    //   loginUser({ username: formData.email, password: formData.password })
    // );

    // navigate("/dashboard");

    // if (user && status === "succeeded") {

    //   const token = user.token;
    //   const decodedToken = jwtDecode(token);
    //   const UserData = decodedToken;
    //   localStorage.setItem("token", token);

    //   navigate("/");
    // }else{
    //   // alert("Not login")
    //   setAlert({ show: true, message: user.message ? user.message : "Error in login!", varient: 'danger' })

    // }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="vh-100 vw-100 text-white d-flex justify-content-center align-items-center login overflow-hidden">
      <div className="vh-50 vw-50 bg-dark text-white login-second">
        <div className="row m-0 justify-content-between hello p-0 h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="card login_card">
              <div className="card-body p-lg-2 p-sm-2">
                <div className="text-center fs-4 fw-bold login_sign_in_color pt-2">
                  Sign in
                </div>
                <div className="p-2 py-lg-0 py-sm-0 field_cont">
                  <label className="fs-6 fw-bold pb-2">Username</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Username"
                    className={`form-control p-sm-1 p-lg-1 p-2 ${errors.email && 'invalid_input'}`}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off" // Prevents default email autofill
                    style={{
                      paddingRight: "2.5rem",
                      padding: "10px",
                    }}
                    required
                  />
                  {/* {errors.email && <p className="text-danger">{errors.email}</p>} */}
                </div>
                <div className="p-2 field_cont">
                  <div>
                    <label className="fs-6 fw-bold pb-2">Password</label>
                  </div>
                  <div style={{ position: "relative" }}>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      className={`form-control p-sm-1 p-lg-1 p-2 ${errors.password && 'invalid_input'}`}
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="off" // Prevents default password autofill
                      style={{
                        paddingRight: "2.5rem",
                        padding: "10px",
                      }}
                      required
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: '50%',
                        // top: errors.password ? "25%" :"50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    {/* {errors.password && <p className="text-danger">{errors.password}</p>} */}
                  </div>
                </div>
                <div
                  className="d-flex justify-content-end pe-3"
                  style={{ color: "#98690C" }}
                >
                  Forgot password ?
                </div>
              </div>
              <div className="d-flex justify-content-center p-3 p-sm-2 mx-sm-2 p-lg-2 mx-lg-2 btn_cont">
                <CommanButton
                  label="Sign in"
                  onClick={handlogin}
                  variant="#7B3F0080"
                  className="mb-3 mb-lg-2 mb-sm-2 ps-4 pe-4 w-100"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="pe-3">
                  <img
                    src={facebook}
                    alt="facebook"
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
                <div>
                  <img
                    src={Gmail}
                    alt="gmail"
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-center pt-4 pt-sm-2 pt-lg-2 other_way"
              >
                <span>
                  Don't have an account?
                  <NavLink to={'/register'} className={'ps-1'} style={{
                    textDecoration: 'none',
                    color: '#7B3F00',
                    fontWeight: '500'
                  }}>Sign Up</NavLink>
                </span>
              </div>
              <div className="d-flex justify-content-center pb-4 pb-sm-2 pb-lg-2">
                {/* privacy-Terms_About */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
            <div>
              <div className="fs-1 fw-bold text-center">Hello Friend!</div>
              <div className="fs-3 text-center">
                Fill up personal information and
              </div>
              <div className="fs-3 text-center">
                start your journey with us.
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackdropAlert closeAlert={() => { setAlert({ ...alert, show: false }) }} show={alert.show} setShow={setAlert} varient={alert.varient} message={alert.message} />
    </div>
  );
}

export default Login;
