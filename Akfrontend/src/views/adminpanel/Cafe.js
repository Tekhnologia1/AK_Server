import React, { useState, useEffect } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaEllipsisV,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteArea, fetchAreas, fetchCities } from "../store/areaSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Table } from "react-bootstrap";
import { validateCafeForm } from "../validation/Validationall";
import { updateEmployee } from "../store/employeeSlice";
import { fetchCafes } from "../store/cafeSlice";
import { fetchRoutes } from "../store/routeSlice";
function Cafe() {
  const cities = useSelector((state) => state.areas.cities);
  const route = useSelector((state) => state.routes.routes);

  const cafedata = useSelector((state) => state.cafes.cafes);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [deleteid, setDelete] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Single state to hold all form data
  const [errors, setErrors] = useState({});
  const [errors1, setErrors1] = useState({});
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [formData, setFormData] = useState({
    cafeName: "",
    address: "",
    area: "",
    contactPerson: "",
    selectedCity: "",
    selectedRoute: "",
    selectedDeal: "",
    selectedPaymentTerm: "",
  });

  const [formData1, setFormData1] = useState({
    cafeName: "",
    address: "",
    area: "",
    contactPerson: "",
    selectedCity: "",
    selectedRoute: "",
    selectedDeal: "",
    selectedPaymentTerm: "",
  });
  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDelete(id);
    setShowFirstModal(true);
  };

  const [data, setData] = useState([
    [1, "Iranni", "Pune", "CK"],
    [2, "Cafe Mocha", "Mumbai", "John"],
    // Add initial data as needed
  ]);

  useEffect(() => {
    dispatch(fetchRoutes())
    dispatch(fetchCities())
    dispatch(fetchCafes()); // Correct async pattern
  }, [dispatch]);

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));


  const transformedroute = route.map((route) => ({
    label: route.name,
    option: route.routes_id,
  }));

  const genderOptions = [
    { label: "City", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];

  const columns = [
    "SR.NO.",
    "Cafe Name",
    "City Name",
    "Contact Person",
    "Status",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCafe = () => {
    const validationErrors = validateCafeForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      setFormData({
        cafeName: "",
        address: "",
        area: "",
        contactPerson: "",
        selectedCity: "",
        selectedRoute: "",
        selectedDeal: "",
        selectedPaymentTerm: "",
      });
    }
  };

  const handleUpdate = () => {
    const validationErrors = validateCafeForm(formData1);
    setErrors1(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const {
        cafeName,
        address,
        area,
        contactPerson,
        selectedCity,
        selectedRoute,
        selectedDeal,
        selectedPaymentTerm,
      } = formData1;
      const id = selectedCafe.areas_id;


      console.log(formData1)
      const updatedArea = {
        //   name: cafeName,
        //   cities_id: address,
        //   area_details: areaDetails,
      };

      dispatch(updateEmployee({ updatedData: updatedArea, id }));
      setShowUpdateModal(false);
      setErrors1({});
    } else {
      // alert("Please correct the errors before updating.");
    }
  };

  const handleDelete = () => {
    if (deleteid) {
      dispatch(deleteArea(deleteid));
      setShowFirstModal(false);
    }
  };

  const handleUpdateModalOpen = (cafe) => {
    setSelectedCafe(cafe);
    console.log("object", cafe);
    setFormData1({
   cafeName: cafe.name,
    address: cafe.address,
    area:cafe.area,
    contactPerson:cafe.contact_person,
    selectedCity:cafe.cities_id,
    selectedRoute:cafe.route_id,
    selectedDeal:cafe.special_deal,
    selectedPaymentTerm:cafe.payment_term_id,
   });
    setShowUpdateModal(true);
  };


  console.log("formData1",formData1)
  return (
    <div className="p-lg-5 ">
      <div className="pb-2">
        <span
          onClick={() => {
            navigate("/dashboard/adminpanel");
          }}
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
          Cafe
        </span>
      </div>

      <div>
        <div className="row m-0 border rounded  pb-3">
          <div className="col-lg-12 p-4 ">



            <div className="row m-0 ">
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Cafe Name"
                  value={formData.cafeName}
                  onChange={handleChange}
                  name="cafeName"
                />
                <p className="text-danger">{errors.cafeName}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  name="address"
                />
                <p className="text-danger">{errors.address}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Area"
                  value={formData.area}
                  onChange={handleChange}
                  name="area"
                />
                <p className="text-danger">{errors.area}</p>
              </div>
            </div>




            <div className="row m-0 ">
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={transformedCities}
                  value={formData.selectedCity}
                  onChange={handleChange}
                  name="selectedCity"
                  defaultValue="City"
                />
                <p className="text-danger">{errors.selectedCity}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={transformedroute}
                  value={formData.selectedRoute}
                  onChange={handleChange}
                  name="selectedRoute"
                  defaultValue="Route"
                />
                <p className="text-danger">{errors.selectedRoute}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={genderOptions}
                  value={formData.selectedDeal}
                  onChange={handleChange}
                  name="selectedDeal"
                  defaultValue="Special Deal"
                />
                <p className="text-danger">{errors.selectedDeal}</p>
              </div>
            </div>




            

            <div className="row m-0 justify-content-center ">
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={genderOptions}
                  value={formData.selectedPaymentTerm}
                  onChange={handleChange}
                  name="selectedPaymentTerm"
                  defaultValue="Payment Term"
                />
                <p className="text-danger">{errors.selectedPaymentTerm}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Contact Person"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  name="contactPerson"
                />
                <p className="text-danger">{errors.contactPerson}</p>
              </div>

              
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <CommanButton
              label="Add"
              onClick={handleAddCafe}
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
                placeholder="Search by Route name"
                value={"searchTerm"}
                // onChange={handleSearchChange}
                // onSearch={handleSearchClick}
              />
            </div>
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
            {cafedata.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.cities_name}</td>
                <td>{item.contact_person}</td>
                
                <td>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleUpdateModalOpen(item)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => {
                        handleFirstModalShow(item.areas_id);
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
              <a className="page-link" href="#" tabIndex="-1">
                <FaChevronLeft /> {/* Left arrow icon */}
              </a>
            </li>
            <li className="page-item ">
              <a
                className="page-link text-white"
                style={{ backgroundColor: "#7B3F00" }}
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

      <Modal
        show={showFirstModal}
        onHide={handleFirstModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <InputBox
                label="Cafe Name"
                placeholder="Cafe Name"
                value={formData1.cafeName}
                onChange={handleChange1}
                name="cafeName"
              />
              <p className="text-danger">{errors.cafeName}</p>

              <InputBox
                label="Address"
                placeholder="Address"
                value={formData1.address}
                onChange={handleChange1}
                name="address"
              />
              <p className="text-danger">{errors1.address}</p>
              <InputBox
                label="Area"
                placeholder="Area"
                value={formData1.area}
                onChange={handleChange1}
                name="area"
              />
              <p className="text-danger">{errors1.area}</p>
              <SelectBox
                options={transformedCities}
                value={formData1.selectedCity}
                onChange={handleChange1}
                name="selectedCity"
                defaultValue="City"
              />
              <p className="text-danger">{errors1.selectedCity}</p>
              <SelectBox
                label="Route"
                options={transformedroute}
                value={formData1.selectedRoute}
                onChange={handleChange1}
                name="selectedRoute"
                defaultValue="Route"
              />
              <p className="text-danger">{errors1.selectedRoute}</p>
              <SelectBox
                label="Special Deal"
                options={genderOptions}
                value={formData1.selectedDeal}
                onChange={handleChange1}
                name="selectedDeal"
                defaultValue="Special Deal"
              />
              <p className="text-danger">{errors1.selectedDeal}</p>
              <SelectBox
                label="Payment Term"
                options={genderOptions}
                value={formData1.selectedPaymentTerm}
                onChange={handleChange1}
                name="selectedPaymentTerm"
                defaultValue="Payment Term"
              />
              <p className="text-danger">{errors1.selectedPaymentTerm}</p>
              <InputBox
                label="Contact Person"
                placeholder="Contact Person"
                value={formData1.contactPerson}
                onChange={handleChange1}
                name="contactPerson"
              />
              <p className="text-danger">{errors1.contactPerson}</p>

              <CommanButton
                label="Update"
                onClick={handleAddCafe}
                variant="#7B3F0080"
                className="mb-3 ps-4 pe-4"
                style={{ borderRadius: "5px" }}
              />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Cafe;
