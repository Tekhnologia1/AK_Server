import React, { useEffect, useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAreas, fetchCities } from "../store/areaSlice";
import { fetchRoutes } from "../store/routeSlice";

function Routess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const route = useSelector((state) => state.routes.routes);
  const cities = useSelector((state) => state.areas.cities);
  const areas = useSelector((state) => state.areas.areas);

  // Collect all form data in one state
  const [formData, setFormData] = useState({
    routeName: "",
    routeDetails: "",
    routeStartPoint: "",
    routeEndPoint: "",
    city: "",
  });



// useEffect(()=>{
//   dispatch()
// })
  const genderOptions = [
    { label: "City", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];

  useEffect(() => {
    dispatch(fetchAreas())
    dispatch(fetchRoutes());
    dispatch(fetchCities());
  }, [dispatch]);

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));


  const transformedareas = areas.map((city) => ({
    label: city.name,
    option: city.areas_id,
  }));


  const cityOptions = transformedCities;
  const columns = ["SR.NO.", "Route Name", "City Name", "Status"];

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle SelectBox changes
  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {


    
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="p-lg-5">
      <div className="pb-2">
        <span
          onClick={() => navigate("/dashboard/adminpanel")}
          style={{ color: "#7B3F00", cursor: "pointer" }}
          className="fs-5 fw-bold"
        >
          Adminpanel
        </span>
        <span style={{ color: "#7B3F00" }}>
          {" "}
          <FaArrowRight />
        </span>
        <span className="fs-5 fw-bold " style={{ color: "#7B3F00" }}>
          {" "}
          Route{" "}
        </span>
      </div>

      <div className="row m-0 border rounded pb-3">
        <div className="col-lg-12 p-4">
          <div className="row m-0">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Route Name"
                value={formData.routeName}
                onChange={handleChange}
                name="routeName"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Route Details/Address"
                value={formData.routeDetails}
                onChange={handleChange}
                name="routeDetails"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={transformedareas}
                value={formData.routeEndPoint}
                onChange={(value) => handleSelectChange("routeEndPoint", value)}
                name="routeEndPoint"
                defaultValue="Area Covered"
              />
            </div>
          </div>

          <div className="row m-0">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Route Start Point"
                value={formData.routeStartPoint}
                onChange={handleChange}
                name="routeStartPoint"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={genderOptions}
                value={formData.routeEndPoint}
                onChange={(value) => handleSelectChange("routeEndPoint", value)}
                name="routeEndPoint"
                defaultValue="Route End Point"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={cityOptions}
                value={formData.city}
                onChange={(value) => handleSelectChange("city", value)}
                name="city"
                defaultValue="City"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <CommanButton
            label="Create"
            onClick={handleSubmit}
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

      <div className="pt-4">
        <Table responsive="sm">
          <thead>
            <tr className="text-center">
              {columns.map((column, index) => (
                <th
                  key={index}
                  style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {route.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.cities_id}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => {
                        // handleFirstModalShow(item.areas_id)
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <Button
                      size="sm"
                      style={{
                        background: "white",
                        border: "none",
                        color: "black",
                      }}
                    >
                      <FaEllipsisV />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="pt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" tabIndex="-1">
                <FaChevronLeft />
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link text-white"
                style={{ backgroundColor: " #7B3F00" }}
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">...</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">
                <FaChevronRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>




    </div>
  );
}

export default Routess;




