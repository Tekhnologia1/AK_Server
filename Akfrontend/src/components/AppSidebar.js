// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   CCloseButton,
//   CSidebar,
//   CSidebarBrand,
//   CSidebarFooter,
//   CSidebarHeader,
//   CSidebarToggler,
// } from "@coreui/react";
// import logo from '../assets/images/ai-01 1.png'

// import { Appnav } from "./Appnav";
// import navigation from "../_nav";

// import { set } from "../views/store/uiSlice";
// import { Button } from "bootstrap";
// const AppSidebar = () => {
//   const value = localStorage.getItem("pass");
//   console.log(value);

//   const dispatch = useDispatch();
//   const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
//   const sidebarShow = useSelector((state) => state.ui.sidebarShow);

//   return (

//     <CSidebar
//       className="border-end"
//       // colorScheme="white"
//       position="fixed"
//       unfoldable={unfoldable}
//       visible={sidebarShow}
//       style={{ backgroundColor: "rgba(123, 63, 0, 0.1)" }}
//       onVisibleChange={(visible) => {
//         dispatch(set({ sidebarShow: visible }));
//       }}
//     >
//       <CSidebarHeader className="text-center">
//         <CSidebarBrand to="/" className=" text-decoration-none">
//           {!unfoldable ? (
//     <div className="pt-0 align-items-center">
//       <div>
//         <img src={logo} alt="Logo" style={{ height: '80px', width: '100px' }} />
//       </div>
//       <div className="ms-3"> {/* Add margin-start to create space between the logo and content */}
//         <div className="fw-bold " style={{color:' #7B3F00',fontSize:'18px'}}>AK Golden Crust Foods</div>
//         <div className="" style={{color:' #7B3F00' ,fontSize:'12px'}} >(OVEN FRESH & DELICIOUS)</div>
//       </div>
//     </div>

//             // <h2 className="text-center pt-3 ps-5 "></h2>
//           ) : (
//             <></>
//           )}
//         </CSidebarBrand>
//         <CCloseButton
//           className="d-lg-none"
//           dark
//           onClick={() => dispatch(set({ sidebarShow: false }))}
//         />
//       </CSidebarHeader>

//       <div className="pt-3"></div>
//       <Appnav items={navigation} />

//       <CSidebarFooter className="border-top d-none d-lg-flex">
//         <CSidebarToggler
//           onClick={() => dispatch(set({ sidebarUnfoldable: !unfoldable }))}
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
import { Button } from "bootstrap";
import "./sidebar.css";

const AppSidebar = () => {
  const value = localStorage.getItem("pass");

  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);

  console.log("@@ ", unfoldable);
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to update the isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("########### ", unfoldable, isMobile);
  return (
    <CSidebar
      className="border-end"
      // colorScheme="white"
      position="fixed"
      unfoldable={!isMobile && unfoldable}
      visible={sidebarShow}
      style={{
        backgroundColor: isMobile
          ? "rgb(247, 241, 229)"
          : "rgba(123, 63, 0, 0.1)",
      }}
      // onVisibleChange={(visible) => {
      //   dispatch(set({ sidebarShow: visible }));
      // }}
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
                {" "}
                {/* Add margin-start to create space between the logo and content */}
                <div
                  className="fw-bold "
                  style={{ color: " #7B3F00", fontSize: "18px" }}
                >
                  AK Golden Crust Foods
                </div>
                <div
                  className=""
                  style={{ color: " #7B3F00", fontSize: "12px" }}
                >
                  (OVEN FRESH & DELICIOUS)
                </div>
              </div>
            </div>
          ) : (
            // <h2 className="text-center pt-3 ps-5 "></h2>
            <></>
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

      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => {
            dispatch(
              set({ sidebarUnfoldable: !unfoldable, sidebarShow: true })
            );
          }}
        />

        {/* <Button className="">Logout</Button> */}
      </CSidebarFooter>
    </CSidebar>
  );
};

export default AppSidebar;
