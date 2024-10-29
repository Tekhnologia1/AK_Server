import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  createArea,
  deleteArea,
  fetchAreas,
  fetchCities,
} from "../store/areaSlice";
import { Button, Modal, Table } from "react-bootstrap";
import { updateEmployee } from "../store/employeeSlice";
import { validateAreaForm } from "../validation/Validationall";
function Areas() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.areas.cities);
  const areas = useSelector((state) => state.areas.areas);
  const [showFirstModal, setShowFirstModal] = useState(false);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [formErrors1, setFormErrors1] = useState({});
  const [deleteId, setDeleteId] = useState(null); // Updated state variable
  const [formData, setFormData] = useState({
    areaName: "",
    areaDetails: "",
    selectedCity: "",
  });
  const [formData1, setFormData1] = useState({
    areaName: "",
    areaDetails: "",
    selectedCity: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCities()); // Fetch cities on mount
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAreas()); // Fetch areas on mount
  }, [dispatch]);

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));

  const columns = ["SR.NO.", "Area Name", "City Name", "Status"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSelectChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCity: e.target.value,
    }));
  };

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDeleteId(id); // Set the area ID to delete
    setShowFirstModal(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await dispatch(deleteArea(deleteId)); // Await deletion
      dispatch(fetchAreas()); // Re-fetch areas only after deletion
      setShowFirstModal(false); // Close modal
    }
  };
  const handleUpdate = () => {
    const validationErrors = validateAreaForm(formData1);
    setFormErrors1(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const { areaName, areaDetails, selectedCity } = formData1;
      const id = selectedArea.areas_id;
      const updatedArea = {
        name: areaName,
        cities_id: selectedCity,
        area_details: areaDetails,
      };

      dispatch(updateEmployee({ updatedData: updatedArea, id }));
      setShowUpdateModal(false);
      setFormErrors1({});
    } else {
      // alert("Please correct the errors before updating.");
    }
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateModalOpen = (area) => {
    setSelectedArea(area);
    console.log("object", area);
    setFormData1({
      areaName: area.name,
      areaDetails: area.area_details,
      selectedCity: area.cities_id,
    });
    setShowUpdateModal(true);
  };

  const handleAddClick = async () => {
    const validationErrors = validateAreaForm(formData);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const { areaName, areaDetails, selectedCity } = formData;
      const newArea = {
        name: areaName,
        cities_id: selectedCity,
        area_details: areaDetails,
      };
      await dispatch(createArea(newArea));
      dispatch(fetchAreas());
      setFormData({
        areaName: "",
        areaDetails: "",
        selectedCity: "",
      });
      setFormErrors({});
    } else {
      // alert("Please correct the errors before adding.");
    }
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
          <FaArrowRight />
        </span>
        <span className="fs-5 fw-bold" style={{ color: "#7B3F00" }}>
          {" "}
          Area / Location{" "}
        </span>
      </div>

      <div className="row m-0 border rounded pb-3">
        <div className="col-lg-12 p-4 ">
          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Area Name"
                value={formData.areaName}
                onChange={handleInputChange}
                name="areaName"
              />
              {formErrors.areaName && (
                <p className="text-danger">{formErrors.areaName}</p>
              )}
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Area Details / Address"
                value={formData.areaDetails}
                onChange={handleInputChange}
                name="areaDetails"
              />
              {formErrors.areaDetails && (
                <p className="text-danger">{formErrors.areaDetails}</p>
              )}
            </div>
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={transformedCities}
                value={formData.selectedCity}
                onChange={handleSelectChange}
                name="selectedCity"
                defaultValue="City"
              />
              {formErrors.selectedCity && (
                <p className="text-danger">{formErrors.selectedCity}</p>
              )}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <CommanButton
            label="Add"
            onClick={handleAddClick}
            variant="#7B3F0080"
            className="mb-3 ps-4 pe-4"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>

      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox placeholder="Type to search..." value={"searchTerm"} />
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
            {areas.map((item, rowIndex) => (
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
                      onClick={() => handleUpdateModalOpen(item)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleFirstModalShow(item.areas_id)}
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
                <FaChevronLeft />
              </a>
            </li>
            <li className="page-item">
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
                <FaChevronRight />
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
        <Modal.Body>Are you sure you want to delete this area?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Area /Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <InputBox
                label="Area Name"
                name="areaName"
                value={formData1.areaName}
                onChange={handleChange1}
                placeholder="Enter area Name"
              />
              {formErrors1.areaName && (
                <p className="text-danger">{formErrors1.areaName}</p>
              )}

              <InputBox
                label="Area Details / Address"
                name="areaDetails"
                value={formData1.areaDetails}
                onChange={handleChange1}
                placeholder="Enter Area Details / Address"
              />
              {formErrors1.areaDetails && (
                <p className="text-danger">{formErrors1.areaDetails}</p>
              )}

              <SelectBox
                label="City"
                options={transformedCities}
                value={formData1.selectedCity}
                onChange={handleChange1}
                name="selectedCity"
                defaultValue=""
              />
              {formErrors1.selectedCity && (
                <p className="text-danger">{formErrors1.selectedCity}</p>
              )}

              <div className="d-flex justify-content-center pt-3">
                <CommanButton
                  label="Update"
                  variant="#7B3F0080"
                  className="mb-3 ps-4 pe-4"
                  style={{ borderRadius: "5px" }}
                  onClick={handleUpdate}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Areas;
