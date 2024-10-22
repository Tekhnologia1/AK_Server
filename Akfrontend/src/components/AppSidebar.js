import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from "@coreui/react";
import logo from '../assets/images/ai-01 1.png'

import { Appnav } from "./Appnav";
import navigation from "../_nav";

import { set } from "../views/store/uiSlice";
import { Button } from "bootstrap";
const AppSidebar = () => {
  const value = localStorage.getItem("pass");
  console.log(value);

  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      // colorScheme="white"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      style={{ backgroundColor: "rgba(123, 63, 0, 0.1)" }}
      onVisibleChange={(visible) => {
        dispatch(set({ sidebarShow: visible }));
      }}
    >
      <CSidebarHeader className="text-center">
        <CSidebarBrand to="/" className=" text-decoration-none">
          {!unfoldable ? (
           <div className=" ps-5">
           <img src={logo} alt="" style={{ height: '80px', width: '80px' }} />

    
         </div>
         

            // <h2 className="text-center pt-3 ps-5 "></h2>
          ) : (
            <></>
          )}
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(set({ sidebarShow: false }))}
        />
      </CSidebarHeader>

      <div className="pt-3"></div>
      <Appnav items={navigation} />

      <CSidebarFooter className="border-top d-none d-lg-flex">
        {/* <CSidebarToggler
          onClick={() => dispatch(set({ sidebarUnfoldable: !unfoldable }))}
        /> */}

        {/* <Button className="">Logout</Button> */}
      </CSidebarFooter>
    </CSidebar>
  );
};

export default AppSidebar;
