import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CFormInput,
} from "@coreui/react";
import { AppHeaderDropdown } from "./header/index";
import { set } from "../views/store/uiSlice";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";

const AppHeader = () => {
  const headerRef = useRef();
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);
  const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle(
          "shadow-sm",
          document.documentElement.scrollTop > 0
        );
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <CHeader
      position="sticky"
      className="mb-4 p-0"
      ref={headerRef}
      style={{ background: '#FFFFFF' }}
    >
      <CContainer className="border-bottom px-4 justify-content-start" fluid>
        <CHeaderToggler
          onClick={() => {
            dispatch(set({ sidebarUnfoldable: !unfoldable, sidebarShow: window.innerWidth < 768 ? !sidebarShow : true }))
          }}
          style={{ marginInlineStart: "-14px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
            />
          </svg>
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex"> 
          <CNavItem>
            <CNavLink to="/" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <div className="d-none ms-auto">
          {/* Search Box with Icon */}
          <div className="search-box position-relative mx-4" style={{ maxWidth: "250px", display: "flex", alignItems: "center" }}>
            <CFormInput
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="pe-5"
            />
            <FaSearch
              className="position-absolute"
              style={{ right: "10px", color: "gray", pointerEvents: "none" }}
            />
          </div>

          {/* Notification and Message Icons */}
          <div className="d-flex align-items-center">
            <div className="position-relative mx-2" style={{cursor: 'pointer'}}>
              <FaBell size={20} />
              <span className="badge-dot"></span>
            </div>
            <div className="position-relative mx-2" style={{cursor: 'pointer'}}>
              <FaEnvelope size={20} />
              <span className="badge-dot"></span>
            </div>
          </div>
        </div>
        {/* 
        <CHeaderNav className="d-flex align-items-center justify-content-center">
          <AppHeaderDropdown />
        </CHeaderNav> */}
      </CContainer>

      {/* Custom Styles */}
      <style jsx>{`
        .badge-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background-color: red;
          border-radius: 50%;
        }
      `}</style>
      
    </CHeader>
  );
};

export default AppHeader;
