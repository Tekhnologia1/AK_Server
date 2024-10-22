import React from "react";
import { useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Table from "react-bootstrap/Table";
import Tablecom from "../../commancomponet/Tablecom";
import { Button } from "react-bootstrap";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Routess() {
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const genderOptions = [
    { label: "City", value: "" },
    { label: "pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];

  const columns = ["SR.NO.", "Route Name", "City Name"];

  const data = [
    [1, "kothrud", "pune"],
    [2, "kothrud", "pune"],
    [3, "kothrud", "pune"],
    [4, "kothrud", "pune"],
  ];

  return (
    <div className="p-lg-5">


<div className="pb-2">
        <span onClick={()=>{navigate('/dashboard/adminpanel')}}  style={{ color: '#7B3F00', cursor: 'pointer' }}
 className="fs-5 fw-bold">Adminpanel</span><span style={{color:'#7B3F00'}}> <FaArrowRight/></span><span className="fs-5 fw-bold " style={{color:'#7B3F00'}}> Route </span>  


      </div>
      <div className=" ">
        <div className="row m-0 border rounded  pb-3">
          <div className="col-lg-12 p-4 ">
            <div className="row m-0 ">
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Route Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Route Details/Address"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </div>
              <div className="col-lg-4 gy-4 ">
                <SelectBox
                  options={genderOptions}
                  value={"gender"}
                  // onChange={handleChange}
                  name="gender"
                  defaultValue="Area Covered"
                />
              </div>
            </div>

            <div className="row m-0 ">
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Route Start point"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </div>
              <div className="col-lg-4 gy-4 ">
                <SelectBox
                  options={genderOptions}
                  value={"gender"}
                  // onChange={handleChange}
                  name="gender"
                  defaultValue="Route End point"
                />
              </div>
              <div className="col-lg-4 gy-4 ">
                <SelectBox
                  options={genderOptions}
                  value={"gender"}
                  // onChange={handleChange}
                  name="gender"
                  defaultValue="City"
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <CommanButton
              label="Create"
              onClick={() => alert("Button clicked!")}
              variant="#7B3F0080"
              className="mb-3 ps-4 pe-4"
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>

        <div className="pt-5">
          <div className="row justify-content-end m-0">
            <div className="col-lg-4">
              <SearchBox
                placeholder="Type to search..."
                value={"searchTerm"}
                // onChange={handleSearchChange}
                // onSearch={handleSearchClick}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 ">
        <Tablecom columns={columns} data={data} />
      </div>

      <div className=" pt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                <FaChevronLeft /> {/* Left arrow icon */}
              </a>
            </li>
            <li className="page-item ">
              <a
                className="page-link text-white"
                style={{ backgroundColor: " #7B3F00" }}
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <FaChevronRight /> {/* Right arrow icon */}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Routess;
