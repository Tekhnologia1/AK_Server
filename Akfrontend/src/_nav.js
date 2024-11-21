
import React from "react";
import {
  PersonPlus,
  Grid,
  QuestionCircle,
  Gear,
  ChatSquareText
} from "react-bootstrap-icons";
import {  CNavItem } from "@coreui/react";

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
