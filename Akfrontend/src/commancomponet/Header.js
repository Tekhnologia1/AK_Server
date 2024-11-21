import React from "react";
import header from '../commancomponet/header.css'
import logo from '../assets/images/ai-01 1.png'
import { MdTrolley } from "react-icons/md";

const Header = ({count}) => {
    return (
        <header className="header-container">
            {/* <div className="row"> */}
                <div className="d-flex align-items-center gap-1">
                    <img src={logo} alt="logo" style={{height:'70px',width:'70px'}} />
                    <div>
                        <p className="mb-0 header-title fs-5 fw-bold">AK Golden Crust Foods</p>
                        <h6 className="mb-0  ">(OVEN FRESH & DELICIOUS)</h6>
                    </div>
                </div>
                <div className="text-end">
                    <button className="btn btn-cart">
                        <i class="bi bi-cart3 me-1"></i>
                             <span> <MdTrolley style={{height:'30px',width:'30px'}}/></span><span className="mb-0 btn-text ">  {count}</span>
                    </button>
                        <i class="bi bi-cart3 icon-btn"></i>
                </div>
            {/* </div> */}
        </header>
    )
}

export default Header