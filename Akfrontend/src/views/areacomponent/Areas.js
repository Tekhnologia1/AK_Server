// src/components/Areas.js
import React, { useEffect, useState } from "react";
import AreaForm from "./AreaForm ";
import AreaTable from "./AreaTable ";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  createArea,
  deleteArea,
  fetchAreas,
  fetchCities,
  updateArea,
} from "../store/areaSlice";
import { Modal, Button } from "react-bootstrap";
import { validateAreaForm } from "../validation/Validationall";
import InputBox from "../../commancomponet/InputBox";
import SelectBox from "../../commancomponet/SelectBox";
import CommanButton from "../../commancomponet/CommanButton";
import SearchBox from "../../commancomponet/Searchbox";

function Areas() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.areas.cities);
  const areas = useSelector((state) => state.areas.areas);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [formErrors1, setFormErrors1] = useState({});
  const [deleteId, setDeleteId] = useState(null);
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


  // const filteredarea= areas.filter((areas) =>
  //   areas.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );



  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchAreas());
  }, [dispatch]);

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDeleteId(id);
    setShowFirstModal(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await dispatch(deleteArea(deleteId));
      dispatch(fetchAreas());
      setShowFirstModal(false);
    }
  };

  const handleSelectChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCity: e.target.value,
    }));
  };

  const handleUpdateModalOpen = (area) => {
    setSelectedArea(area);
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
      setFormData({ areaName: "", areaDetails: "", selectedCity: "" });
      setFormErrors({});
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleUpdate = async() => {
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
      console.log(updatedArea);
     await dispatch(updateArea({ updatedData: updatedArea, id }));
     dispatch(fetchAreas())
      setShowUpdateModal(false);
      setFormErrors1({});
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
        <span style={{ color: "#7B3F00" }}>&gt;</span>
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
                placeholder="Search Area"
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
            <SearchBox placeholder="Type to search..." 
            value={searchTerm} 
            // onChange={handleSearchChange}
/>
          </div>
        </div>
      </div>



      <div className="pt-4">
        <AreaTable
          areas={areas}
          onUpdate={handleUpdateModalOpen}
          onDelete={handleFirstModalShow}
        />
      </div>

      <Modal
        show={showFirstModal}
        onHide={handleFirstModalClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
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

      <Modal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AreaForm
            formData={formData1}
            formErrors={formErrors1}
            transformedCities={transformedCities}
            onChange={handleUpdateInputChange}
            onSubmit={handleUpdate}
            buttonLabel="Update"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Areas;
