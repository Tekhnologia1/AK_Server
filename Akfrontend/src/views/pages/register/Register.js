import React, { useState } from "react";
import "./register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CommanButton from "../../../commancomponet/CommanButton";
import facebook from "../../../assets/images/Group 3466061.png";
import Gmail from "../../../assets/images/Group 3466060.png";
import { FaFlag } from "react-icons/fa";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { validateRegisterData } from "../../validation/Validationall";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import { apiurl } from "../../../Api/apiurl";
import axios from "axios";
function Register() {
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: "", varient: 'success' });
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
    });
    const API_BASE_URL = apiurl;
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handelRegister = async () => {
        const validationErrors = validateRegisterData(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setAlert({ show: true, message: Object.values(validationErrors)[0], varient: 'danger' })
            return;
        }
        setErrors({});;

        try {
            const newUser = {
                "name": formData.name,
                "username": formData.username,
                "password": formData.password,
                "employee_type_id": 1,
                "email": formData.email,
                "cell_number": formData.mobile
            }
            const response = await axios.post(`${API_BASE_URL}/AddEmployee`, newUser);
            console.log(response);
            setAlert({ show: true, message: "Register Successfull!", varient: 'success' });
              navigate("/login");

        } catch (error) {
            console.log(error)
            setAlert({ show: true, message: error.response.data.message ? error.response.data.message : "Error in login!", varient: 'danger' })
        }
        // navigate("/");

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="vh-sm-100 vw-100 h-100 text-white d-flex justify-content-center align-items-center register">
            <div className="vh-50 vw-50 bg-dark text-white login-second ">
                <div className="row m-0 justify-content-between hello p-0 h-100">
                    <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
                        <div
                            className="card register_card">
                            <div className="card-body p-lg-2 p-sm-2">
                                <div className="text-center fs-4 fw-bold login_sign_in_color pt-2 pt-lg-0 pt-sm-0" style={{ lineHeight: '24px' }}>
                                    Create An Account
                                </div>
                                <div className="row px-1 mt-2">
                                    <div className="col-12 col-md-12 p-2 py-lg-0 py-sm-0 field_cont">
                                        <label className="fs-6 fw-bold pb-1 field_label">Name</label>
                                        <input
                                            name="name"
                                            type={'text'}
                                            placeholder="Name"
                                            className={`form-control p-sm-1 p-lg-1 p-2 ${errors.name && 'invalid_input'}`}
                                            style={{
                                                paddingRight: "2.5rem",
                                                padding: "10px",
                                            }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-12 p-2 py-lg-0 py-sm-0 field_cont">
                                        <label className="fs-6 fw-bold pb-1 field_label">Username</label>
                                        <input
                                            name="username"
                                            type={"text"}
                                            placeholder="example@gmail.com"
                                            className={`form-control p-sm-1 p-lg-1 p-2 ${errors.username && 'invalid_input'}`}
                                            style={{
                                                paddingRight: "2.5rem",
                                                padding: "10px",
                                            }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-12 p-2 py-lg-0 py-sm-0 field_cont">
                                        <label className="fs-6 fw-bold pb-1 field_label">Email</label>
                                        <input
                                            name="email"
                                            type={"email"}
                                            placeholder="example@gmail.com"
                                            className={`form-control p-sm-1 p-lg-1 p-2 ${errors.email && 'invalid_input'}`}
                                            style={{
                                                paddingRight: "2.5rem",
                                                padding: "10px",
                                            }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-12 p-2 py-lg-0 py-sm-0 field_cont">
                                        <label className="fs-6 fw-bold pb-1 field_label">Phone Number</label>
                                        <input
                                            name="mobile"
                                            type="number"
                                            placeholder="+91"
                                            className={`form-control p-sm-1 p-lg-1 p-2 ${errors.mobile && 'invalid_input'}`}
                                            style={{
                                                backgroundImage: `url(${FaFlag})`,
                                                backgroundPosition: "10px center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "20px 20px", // Adjust size of the flag here
                                                paddingLeft: "40px", // Adjust padding for space between the flag and input text
                                                padding: "10px",
                                                paddingRight: "2.5rem",
                                            }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-12 p-2 py-lg-0 py-sm-0 field_cont">
                                        <div>
                                            <label className="fs-6 fw-bold pb-1 field_label">Password</label>
                                        </div>
                                        <div style={{ position: "relative" }}>
                                            <input
                                                name="password"
                                                type={passwordVisible ? "text" : "password"}
                                                placeholder="Enter password"
                                                className={`form-control p-sm-1 p-lg-1 p-2 ${errors.password && 'invalid_input'}`}
                                                style={{
                                                    paddingRight: "2.5rem",
                                                    padding: "10px",
                                                }}
                                                onChange={handleChange}
                                            />
                                            <span
                                                onClick={togglePasswordVisibility}
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center p-4 p-sm-2 mx-sm-2 p-lg-2 mx-lg-2 btn_cont">
                                <CommanButton
                                    label="Sign up"
                                    onClick={handelRegister}
                                    variant="#7B3F0080"
                                    className="mb-3 mb-lg-0 mb-sm-0 ps-4 pe-4 w-100 register_btn"
                                    style={{ borderRadius: "5px" }}
                                />
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="pe-3">
                                    <img
                                        src={facebook}
                                        alt=""
                                        style={{ width: "22px", height: "22px" }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={Gmail}
                                        alt=""
                                        style={{ width: "22px", height: "22px" }}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center pb-3 pb-sm-2 pb-lg-2 pt-2 other_way">
                                <span>
                                    Already have an account?
                                    <NavLink to={'/login'} className={'ps-1'} style={{
                                        textDecoration: 'none',
                                        color: '#7B3F00',
                                        fontWeight: '500'
                                    }}>Sign in
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-none d-lg-flex justify-content-center align-items-center">
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

export default Register;