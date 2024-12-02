// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   CCloseButton,
//   CSidebar,
//   CSidebarBrand,
//   CSidebarFooter,
//   CSidebarHeader,
//   CSidebarToggler,
// } from "@coreui/react";
// import logo from "../assets/images/ai-01 1.png";

// import { Appnav } from "./Appnav";
// import navigation from "../_nav";

// import { set } from "../views/store/uiSlice";
// import { Button } from "bootstrap";
// import "./sidebar.css";

// const AppSidebar = () => {
//   const value = localStorage.getItem("pass");

//   const dispatch = useDispatch();
//   const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
//   const sidebarShow = useSelector((state) => state.ui.sidebarShow);

//   console.log("@@ ", unfoldable);
//   // State to track if the screen is mobile
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Effect to update the isMobile state on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup listener on unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   console.log("########### ", unfoldable, isMobile);
//   return (
//     <CSidebar
//       className="border-end"
//       // colorScheme="white"
//       position="fixed"
//       unfoldable={!isMobile && unfoldable}
//       visible={sidebarShow}
//       style={{
//         backgroundColor: isMobile
//           ? "rgb(247, 241, 229)"
//           : "rgba(123, 63, 0, 0.1)",
//       }}
//       // onVisibleChange={(visible) => {
//       //   dispatch(set({ sidebarShow: visible }));
//       // }}
//     >
//       <CSidebarHeader className="text-center">
//         <CSidebarBrand to="/" className=" text-decoration-none">
//           {!unfoldable || isMobile ? (
//             <div className="pt-0 align-items-center pb-2">
//               <div>
//                 <img
//                   src={logo}
//                   alt="Logo"
//                   style={{ height: "80px", width: "100px" }}
//                 />
//               </div>
//               <div className="ms-3">
//                 {" "}
//                 {/* Add margin-start to create space between the logo and content */}
//                 <div
//                   className="fw-bold "
//                   style={{ color: " #7B3F00", fontSize: "18px" }}
//                 >
//                   AK Golden Crust Foods
//                 </div>
//                 <div
//                   className=""
//                   style={{ color: " #7B3F00", fontSize: "12px" }}
//                 >
//                   (OVEN FRESH & DELICIOUS)
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // <h2 className="text-center pt-3 ps-5 "></h2>
//             <></>
//           )}
//         </CSidebarBrand>
//         <CCloseButton
//           className="d-lg-none"
//           dark
//           onClick={() => dispatch(set({ sidebarShow: false }))}
//           style={{ filter: "invert(0) brightness(0)" }}
//         />
//       </CSidebarHeader>

//       <div className="pt-3"></div>
//       <Appnav items={navigation} />

//       <CSidebarFooter className="border-top d-none d-lg-flex">
//         <CSidebarToggler
//           onClick={() => {
//             dispatch(
//               set({ sidebarUnfoldable: !unfoldable, sidebarShow: true })
//             );
//           }}
//         />

//         {/* <Button className="">Logout</Button> */}
//       </CSidebarFooter>
//     </CSidebar>
//   );
// };

// export default AppSidebar;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from "@coreui/react";
import logo from "../assets/images/ai-01 1.png";

import { Appnav } from "./Appnav";
import navigation from "../_nav";

import { set } from "../views/store/uiSlice";
import "./sidebar.css";
import LogoutConfirmation from "../views/pages/logout/LogoutConfirmation";

const AppSidebar = () => {
  const value = localStorage.getItem("pass");

  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    setShow(true)
  };

  return (
    <CSidebar
      className="border-end"
      position="fixed"
      unfoldable={!isMobile && unfoldable}
      visible={sidebarShow}
      style={{
        backgroundColor: isMobile
          ? "rgb(247, 241, 229)"
          : "rgba(123, 63, 0, 0.1)",
      }}
    >
      <CSidebarHeader className="text-center">
        <CSidebarBrand to="/" className=" text-decoration-none">
          {!unfoldable || isMobile ? (
            <div className="pt-0 align-items-center pb-2">
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "80px", width: "100px" }}
                />
              </div>
              <div className="ms-3">
                <div
                  className="fw-bold"
                  style={{ color: " #7B3F00", fontSize: "18px" }}
                >
                  AK Golden Crust Foods
                </div>
                <div style={{ color: " #7B3F00", fontSize: "12px" }}>
                  (OVEN FRESH & DELICIOUS)
                </div>
              </div>
            </div>
          ) : (
            <>
            {/* <div>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "50px", width: "50px" }}
                />
              </div> */}
              </>
          )}
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(set({ sidebarShow: false }))}
          style={{ filter: "invert(0) brightness(0)" }}
        />
      </CSidebarHeader>

      <div className="pt-3"></div>
      <Appnav items={navigation} />

      <CSidebarFooter className="border-top d-flex justify-content-between px-2 align-items-center">
        <button
          onClick={handleLogout}
          className={`${(!unfoldable || isMobile) ? "me-3 py-1 outline_btn" : "border-0 bg-transparent p-0 pb-1"}`}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-1" style={{width: '14px', height: '14px'}}>
            <path d="M15.625 2.3065C17.4838 3.37965 18.9365 5.03615 19.7578 7.01908C20.5792 9.00202 20.7233 11.2006 20.1678 13.2737C19.6123 15.3469 18.3882 17.1789 16.6854 18.4854C14.9826 19.792 12.8963 20.5002 10.75 20.5002C8.60369 20.5002 6.51736 19.792 4.81458 18.4854C3.1118 17.1789 1.88773 15.3469 1.33223 13.2737C0.776721 11.2006 0.920821 9.00202 1.74218 7.01908C2.56353 5.03615 4.01625 3.37965 5.875 2.3065M10.75 1V8.5" stroke="#7B3F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          {!unfoldable || isMobile ? "Logout" :""}
        </button>
        <CSidebarToggler
          onClick={() => {
            dispatch(set({ sidebarUnfoldable: !unfoldable, sidebarShow: true }));
          }}
        />
      </CSidebarFooter>
      <LogoutConfirmation show={show} setShow={setShow}/>
    </CSidebar>
  );
};

export default AppSidebar;
