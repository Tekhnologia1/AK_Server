// import React, { useState } from "react";
// import "./register.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import CommanButton from "../../../commancomponet/CommanButton";
// import facebook from "../../../assets/images/Group 3466061.png";
// import Gmail from "../../../assets/images/Group 3466060.png";
// import { FaFlag } from "react-icons/fa";
// import { Navigate, useNavigate } from "react-router-dom";
// function Register() {
//   const navigate=useNavigate()
//   const [email, setEmail] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div>
//       <div className="vh-100 vw-100 text-white d-flex justify-content-center align-items-center register">
//         <div className="vh-50 vw-50 bg-dark text-white login-second ">
//           <div className="row m-0 justify-content-between hello ">
//             <div className="col-lg-6 d-flex justify-content-center align-items-center">
//               <div
//                 className="card"
//                 style={{ width: "100%", maxWidth: "28rem" }}
//               >
//                 <div className="card-body">
//                   <div className="text-center fs-3 fw-bold login_sign_in_color pt-2">
//                     Create An Account
//                   </div>
//                   <div className="p-3">
//                     <label className="fs-5 fw-bold pb-1">Email</label>
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
//                   <div className="p-3">
//                     <label className="fs-5 fw-bold pb-2">Phone Number</label>
//                     <input
//                       type="number"
//                       placeholder="+91"
//                       className="form-control"
//                       style={{
//                         backgroundImage: `url(${FaFlag})`,
//                         backgroundPosition: "10px center",
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "20px 20px", // Adjust size of the flag here
//                         paddingLeft: "40px", // Adjust padding for space between the flag and input text
//                         padding: "10px",
//                         paddingRight: "2.5rem",
//                       }}
//                     />
//                   </div>

//                   <div className="p-3 pt-1">
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
//                         {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//                       </span>
//                     </div>
//                   </div>
//                   {/*   */}
//                 </div>
//                 <div className="d-flex justify-content-center p-4">
//                   <CommanButton
//                     label="Sign up"
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
//                 {/* <div className="d-flex justify-content-center pt-3 pb-2">
//                   Create New User
//                 </div> */}

//                 <div className="d-flex justify-content-center pb-3 pt-2" onClick={()=>{
//                   navigate('/login')
//                 }}>
//                   Already have an account? Sign in
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

// export default Register;



import React, { useState } from "react";
import "./register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CommanButton from "../../../commancomponet/CommanButton";
import facebook from "../../../assets/images/Group 3466061.png";
import Gmail from "../../../assets/images/Group 3466060.png";
import { FaFlag } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 
  return (
    <div className="vh-100 vw-100 text-white d-flex justify-content-center align-items-center register">
      <div className="vh-50 vw-50 bg-dark text-white login-second ">
        <div className="row m-0 justify-content-between hello p-0 h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div
              className="card register_card"
            >
              <div className="card-body p-lg-2 p-sm-2">
                <div className="text-center fs-4 fw-bold login_sign_in_color pt-2 pt-lg-0 pt-sm-0" style={{lineHeight: '24px'}}>
                  Create An Account
                </div>
                <div className="p-2 py-lg-0 py-sm-0 field_cont">
                  <label className="fs-6 fw-bold pb-1">Email</label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="example@gmail.com"
                    className="form-control p-sm-1 p-lg-1 p-2"
                    style={{
                      paddingRight: "2.5rem",
                      padding: "10px",
                    }}
                  />
                </div>
                <div className="p-2 field_cont">
                  <label className="fs-6 fw-bold pb-2">Phone Number</label>
                  <input
                    type="number"
                    placeholder="+91"
                    className="form-control p-sm-1 p-lg-1 p-2"
                    style={{
                      backgroundImage: `url(${FaFlag})`,
                      backgroundPosition: "10px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px 20px", // Adjust size of the flag here
                      paddingLeft: "40px", // Adjust padding for space between the flag and input text
                      padding: "10px",
                      paddingRight: "2.5rem",
                    }}
                  />
                </div>
                <div className="p-2 pt-0 field_cont">
                  <div>
                    <label className="fs-6 fw-bold pb-2">Password</label>
                  </div>
                  <div style={{ position: "relative" }}>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      className="form-control p-sm-1 p-lg-1 p-2"
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
                {/*   */}
              </div>
              <div className="d-flex justify-content-center p-4 p-sm-2 mx-sm-2 p-lg-2 mx-lg-2 pt-sm-0 pt-lg-0 btn_cont">
                <CommanButton
                  label="Sign up"
                  onClick={() => { navigate("/dashboard") }}
                  variant="#7B3F0080"
                  className="mb-3 mb-lg-0 mb-sm-0 ps-4 pe-4 w-100"
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
              {/* <div className="d-flex justify-content-center pt-3 pb-2">
                  Create New User
                </div> */}
 
              <div className="d-flex justify-content-center pb-3 pb-sm-2 pb-lg-2 pt-2 other_way" onClick={() => {
                navigate('/login')
              }}>
                Already have an account? Sign in
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
  );
}
 
export default Register;