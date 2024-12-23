// import React from "react";
// import CIcon from "@coreui/icons-react";
// import {
//   cilDescription,
//   cilNotes,
//   cilFace,
//   cilDollar,
//   cilSpeedometer,
//   cilStar,
//   cilReportSlash,
//   cilMoney,
// } from "@coreui/icons";
// import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
// import { FaCalculator } from "react-icons/fa";
// const _nav = [
//   {
//     component: CNavItem,
//     name: "Dashboard",
//     to: "/agency",
//     icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Create Member",
//     to: "/agency/createmember",
//     icon: <CIcon icon={cilFace} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Master Data",
//     to: "/agency/masterdatatable",
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Payment",
//     to: "/agency/payment",
//     icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Receipt",
//     to: "/agency/receipt",
//     icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Winner",
//     to: "/agency/schememonthwinner",
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Report Member",
//     to: "/agency/tmreport",
//     icon: <CIcon icon={cilReportSlash} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: "Help",
//     to: "https://www.tekhnologiaindia.com/",
//     icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//   },
// ];

// export default _nav;



import React from "react";
import {
  HouseDoor,
  PersonPlus,
  Grid,
  CashStack,
  Receipt,
  Trophy,
  FileText,
  QuestionCircle,
  Gear,
  ChatSquareText
} from "react-bootstrap-icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/",
    icon: <Grid className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Admin Panel",
    to: "/adminpanel",
    icon: <PersonPlus className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Messages",
    to: "/messges",
    icon: <ChatSquareText className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Help & Supprot",
    to: "/help",
    icon: <QuestionCircle className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Setting",
    to: "/",
    icon: <Gear className="nav-icon" />,
  },
  
];

export default _nav;
