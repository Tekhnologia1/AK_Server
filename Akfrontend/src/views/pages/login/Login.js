// import React, { useState } from "react";
// import "./login.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import CommanButton from "../../../commancomponet/CommanButton";
// import facebook from "../../../assets/images/Group 3466061.png";
// import Gmail from "../../../assets/images/Group 3466060.png";
// import { useNavigate } from "react-router-dom";
// function Login() {
//   const navigate=useNavigate()
//   const [email, setEmail] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };













  
//   return (
//     <div>
//       <div className="vh-100 vw-100 text-white d-flex justify-content-center align-items-center login">
//         <div className="vh-50 vw-50 bg-dark text-white login-second ">
//           <div className="row m-0 justify-content-between hello ">
//             <div className="col-lg-6 d-flex justify-content-center align-items-center">
//               <div
//                 className="card"
//                 style={{ width: "100%", maxWidth: "28rem" }}
//               >
//                 <div className="card-body">
//                   <div className="text-center fs-3 fw-bold login_sign_in_color pt-2">
//                     Sign in
//                   </div>
//                   <div className="p-3">
//                     <label className="fs-5 fw-bold pb-2">Email</label>
//                     <input
//                       type={passwordVisible ? "text" : "password"}
//                       placeholder="example@gmail.com"
//                       className="form-control "
//                       style={{
//                         paddingRight: "2.5rem",
//                         padding: "10px",
//                       }}
//                     />
//                   </div>
//                   <div className="p-2">
//                     <div>
//                       <label className="fs-5 fw-bold pb-2">Password</label>
//                     </div>
//                     <div style={{ position: "relative" }}>
//                       <input
//                         type={passwordVisible ? "text" : "password"}
//                         placeholder="Enter password"
//                         className="form-control "
//                         style={{
//                           paddingRight: "2.5rem",
//                           padding: "10px",
//                         }}
//                       />
//                       <span
//                         onClick={togglePasswordVisibility}
//                         style={{
//                           position: "absolute",
//                           right: "10px",
//                           top: "50%",
//                           transform: "translateY(-50%)",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {passwordVisible ? <FaEye />: <FaEyeSlash />}
//                       </span>
//                     </div>
//                   </div>
//                   <div
//                     className="d-flex justify-content-end pe-3 "
//                     style={{ color: "#98690C" }}
//                   >
//                     Forgot password ?
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-center p-4">
//                   <CommanButton
//                     label="Sign in"
//                     onClick={() => {navigate("/dashboard")}}
//                     variant="#7B3F0080"
//                     className="mb-3 ps-4 pe-4 w-100"
//                     style={{ borderRadius: "5px" }}
//                   />
//                 </div>
//                 <div className="d-flex justify-content-center">
//                   <div className="pe-3">
//                     <img
//                       src={facebook}
//                       alt=""
//                       style={{ width: "25px", height: "25px" }}
//                     />
//                   </div>
//                   <div>
//                     <img
//                       src={Gmail}
//                       alt=""
//                       style={{ width: "25px", height: "25px" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-center pt-4 " onClick={()=>{
//                   navigate('/register')
//                 }}>
//                   Don't have an account? Sign Up
//                 </div>

//                 <div className="d-flex justify-content-center pb-4">
//                   {/* privacy-Terms_About */}
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
//               <div>
//                 <div className="fs-1 fw-bold text-center">Hello Friend!</div>
//                 <div className="fs-3 text-center">
//                   Fill up personal information and
//                 </div>
//                 <div className="fs-3 text-center">
//                   start your journey with us.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;







// import React, { useState } from "react";
// import "./login.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import CommanButton from "../../../commancomponet/CommanButton";
// import facebook from "../../../assets/images/Group 3466061.png";
// import Gmail from "../../../assets/images/Group 3466060.png";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   // Consolidated state for email and password
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };



//   const handlogin=async()=>{
//   console.log(formData);


//     navigate('/dashboard')
//   }
//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <div className="vh-100 vw-100 text-white d-flex justify-content-center align-items-center login">
//         <div className="vh-50 vw-50 bg-dark text-white login-second ">
//           <div className="row m-0 justify-content-between hello ">
//             <div className="col-lg-6 d-flex justify-content-center align-items-center">
//               <div
//                 className="card"
//                 style={{ width: "100%", maxWidth: "28rem" }}
//               >
//                 <div className="card-body">
//                   <div className="text-center fs-3 fw-bold login_sign_in_color pt-2">
//                     Sign in
//                   </div>
//                   <div className="p-3">
//                     <label className="fs-5 fw-bold pb-2">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="example@gmail.com"
//                       className="form-control "
//                       value={formData.email}
//                       onChange={handleChange}
//                       style={{
//                         paddingRight: "2.5rem",
//                         padding: "10px",
//                       }}
//                     />
//                   </div>
//                   <div className="p-2">
//                     <div>
//                       <label className="fs-5 fw-bold pb-2">Password</label>
//                     </div>
//                     <div style={{ position: "relative" }}>
//                       <input
//                         type={passwordVisible ? "text" : "password"}
//                         name="password"
//                         placeholder="Enter password"
//                         className="form-control "
//                         value={formData.password}
//                         onChange={handleChange}
//                         style={{
//                           paddingRight: "2.5rem",
//                           padding: "10px",
//                         }}
//                       />
//                       <span
//                         onClick={togglePasswordVisibility}
//                         style={{
//                           position: "absolute",
//                           right: "10px",
//                           top: "50%",
//                           transform: "translateY(-50%)",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//                       </span>
//                     </div>
//                   </div>
//                   <div
//                     className="d-flex justify-content-end pe-3 "
//                     style={{ color: "#98690C" }}
//                   >
//                     Forgot password ?
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-center p-4">
//                   <CommanButton
//                     label="Sign in"
//                     // onClick={() => {
//                     //   navigate("/dashboard");
//                     // }}
//                     onClick={handlogin}
//                     variant="#7B3F0080"
//                     className="mb-3 ps-4 pe-4 w-100"
//                     style={{ borderRadius: "5px" }}
//                   />
//                 </div>
//                 <div className="d-flex justify-content-center">
//                   <div className="pe-3">
//                     <img
//                       src={facebook}
//                       alt=""
//                       style={{ width: "25px", height: "25px" }}
//                     />
//                   </div>
//                   <div>
//                     <img
//                       src={Gmail}
//                       alt=""
//                       style={{ width: "25px", height: "25px" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-center pt-4 " onClick={() => {
//                   navigate('/register');
//                 }}>
//                   Don't have an account? Sign Up
//                 </div>

//                 <div className="d-flex justify-content-center pb-4">
//                   {/* privacy-Terms_About */}
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
//               <div>
//                 <div className="fs-1 fw-bold text-center">Hello Friend!</div>
//                 <div className="fs-3 text-center">
//                   Fill up personal information and
//                 </div>
//                 <div className="fs-3 text-center">
//                   start your journey with us.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import "./login.css";
import {jwtDecode} from "jwt-decode";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CommanButton from "../../../commancomponet/CommanButton";
import facebook from "../../../assets/images/Group 3466061.png";
import Gmail from "../../../assets/images/Group 3466060.png";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../store/loginSlice";

function Login() {

  const { status, error, user } = useSelector((state) => state.auth); 
  const dispatch=useDispatch()
  const navigate = useNavigate();
  // Consolidated state for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlogin = async () => {
    console.log(formData);
    dispatch(loginUser({username:formData.email,password:formData.password}))
    console.log(user)
    console.log(status)




    navigate("/dashboard");


    // if(status=="succeeded")
    // {
    //   const token = user.token;
    //   const decodedToken = jwtDecode(token);
    //   const UserData=decodedToken;
    //   console.log(UserData)
    //   localStorage.setItem("token", token);

    //   // const token1 = localStorage.getItem("token");
    //   // console.log("object",token1)

    // navigate("/dashboard");


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
    <div>
      <div className="vh-100 vw-100 text-white d-flex justify-content-center align-items-center login">
        <div className="vh-50 vw-50 bg-dark text-white login-second">
          <div className="row m-0 justify-content-between hello">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="card" style={{ width: "100%", maxWidth: "28rem" }}>
                <div className="card-body">
                  <div className="text-center fs-3 fw-bold login_sign_in_color pt-2">
                    Sign in
                  </div>
                  <div className="p-3">
                    <label className="fs-5 fw-bold pb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off" // Prevents default email autofill
                      style={{
                        paddingRight: "2.5rem",
                        padding: "10px",
                      }}
                    />
                  </div>
                  <div className="p-2">
                    <div>
                      <label className="fs-5 fw-bold pb-2">Password</label>
                    </div>
                    <div style={{ position: "relative" }}>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Enter password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="off" // Prevents default password autofill
                        style={{
                          paddingRight: "2.5rem",
                          padding: "10px",
                        }}
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
                  <div
                    className="d-flex justify-content-end pe-3"
                    style={{ color: "#98690C" }}
                  >
                    Forgot password ?
                  </div>
                </div>
                <div className="d-flex justify-content-center p-4">
                  <CommanButton
                    label="Sign in"
                    onClick={handlogin}
                    variant="#7B3F0080"
                    className="mb-3 ps-4 pe-4 w-100"
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
                  className="d-flex justify-content-center pt-4"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Don't have an account? Sign Up
                </div>
                <div className="d-flex justify-content-center pb-4">
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
      </div>
    </div>
  );
}

export default Login;
