import React, { useEffect, useState } from "react";
import AreaForm from "./AreaForm ";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  createArea,
  deleteArea,
  fetchAreas,
  fetchCities,
  updateArea,
} from "../store/areaSlice";
import { Modal, Button, Table,Row,Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { validateAreaForm } from "../validation/Validationall";
import InputBox from "../../commancomponet/InputBox";
import SelectBox from "../../commancomponet/SelectBox";
import CommanButton from "../../commancomponet/CommanButton";
import SearchBox from "../../commancomponet/Searchbox";
import Pagination1 from "../../commancomponet/Pagination1";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import BackdropAlert from "../../commancomponet/Alert/backdropAlert";
import Backpage from "../../commancomponet/Backpage";
import ShowModal from '../../commancomponet/ShowModal.js'
import { PiEyeBold, PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { isMobileView } from "../../Utils/utils.js";
function Areas() {
  const [showModal1, setShowModal1] = useState(false);

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
  const [totalPages, setTotalPages] = useState();
  const [pageAreas, setPageAreas] = useState([]);
  const [modaledata, seModaledata] = useState({});

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });
  const columns = ["SR.NO.", "Area Name", "City Name", "Action"];

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

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    // Filter products based on search term (all products)
    const filteredAreas = areas.filter((r) =>
      r.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );

    const pages = Math.ceil(filteredAreas.length / pageSize);
    setTotalPages(pages);
    const area = filteredAreas.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setPageAreas(area);
  }, [areas, currentPage, searchTerm]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
      console.log(deleteId);

      const response = await dispatch(deleteArea(deleteId.areas_id));
      console.log(response.meta.requestStatus);
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Area Deleted!", varient: "success" });
        dispatch(fetchAreas());
      } else {
        setAlert({
          show: true,
          message: "Area not deleted!",
          varient: "danger",
        });
      }

      setShowFirstModal(false);
      // Check if there's data on the current page after deletion
      if (pageAreas.length === 1 && currentPage > 1) {
        // Only decrease page if we're on an empty page after deletion
        setCurrentPage(currentPage - 1);
      }
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

      const response = await dispatch(createArea(newArea));

      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Area created!", varient: "success" });
        dispatch(fetchAreas());
      } else {
        setAlert({
          show: true,
          message: "Area not created!",
          varient: "danger",
        });
      }
      setFormData({ areaName: "", areaDetails: "", selectedCity: "" });
      setFormErrors({});
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleUpdate = async () => {
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
      const response = await dispatch(
        updateArea({ updatedData: updatedArea, id })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Area Updated!", varient: "success" });
        dispatch(fetchAreas());
      } else {
        setAlert({
          show: true,
          message: "Area Update Failed!",
          varient: "danger",
        });
      }

      setShowUpdateModal(false);
      setFormErrors1({});
    }
  };


  const handleModal=(item)=>{

    console.log("tyuiojpjuiwehfuyuyguyguyuyguyg",item)
    seModaledata(item);
    setShowModal1(true);
    
  }


  const modalContent = (
    <Row className="m-0">
      <Col  className="gy-2" lg={6}><span className="fw-bold">Area Name :</span> {modaledata?.name}</Col>
      <Col  className="gy-2" lg={6}> <span className="fw-bold">City Name :</span> {modaledata?.cities_name} </Col>
      <Col  className="gy-2" lg={6}><span className="fw-bold">Area Details :</span> {modaledata?.area_details}</Col>
    </Row>
  );

  return (
    <div className="p-lg-5">
      <Backpage
        mainPage="Admin Panel"
        mainPagePath="/adminpanel"
        currentPage="Area / Location"
      />

      <div className="row m-0 form_container pb-3">
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
            <SearchBox
              placeholder="Type to search..."
              value={searchTerm}
              onChange={handleSearchChange}
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
            {pageAreas.length > 0 ? (
              pageAreas.map((item, rowIndex) => (
                <tr key={item.id} className="text-center">
                  <td>{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
                  <td>{item.name}</td>
                  <td>{item.cities_name}</td>
                  <td className="d-flex justify-content-center gap-2">
                    {isMobileView() ?
                      <button className="icon_blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModal(item);
                        }}
                      >
                        <PiEyeBold
                          style={{ cursor: 'pointer' }}
                        />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">View</Tooltip>
                        }
                      >
                        <button className="icon_blue"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleModal(item);
                          }}
                        >
                          <PiEyeBold />
                        </button>
                      </OverlayTrigger>}
                    {isMobileView() ?
                      <button className="icon_green"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateModalOpen(item);
                        }}
                      >
                        <PiNotePencilBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Edit</Tooltip>
                        }
                      >
                        <button className="icon_green"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateModalOpen(item);
                          }}>
                          <PiNotePencilBold />
                        </button>
                      </OverlayTrigger>}

                    {isMobileView() ?
                      <button className="icon_red"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFirstModalShow(item);
                        }}
                      >
                        <PiTrashBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Delete</Tooltip>
                        }
                      >
                        <button className="icon_red"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFirstModalShow(item);
                          }}>
                          <PiTrashBold />
                        </button>
                      </OverlayTrigger>}
                  </td>
                  {/* <td>
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
                      onClick={() => handleFirstModalShow(item)}
                    >
                      <FaTrash />
                    </Button>
             
                  </td> */}

                  {/* <td>
                    <div className="d-flex justify-content-center">
                      <Button variant="" size="sm" className="me-2"   onClick={() =>{handleModal(item)} }>
                        <FaEye />
                      </Button>
                    </div>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="pt-4">
          <Pagination1
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}





      <ShowModal
        show={showModal1}
        setShow={setShowModal1}    
        title="Area Detail"
        bodyContent={modalContent}
        data={modaledata}
      />


      <Modal show={showFirstModal} onHide={handleFirstModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this area?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstModalClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Area Modal */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Area</Modal.Title>
        </Modal.Header>
        <div className="p-2">
          <AreaForm
            formData={formData1}
            formErrors={formErrors1}
            transformedCities={transformedCities}
            onChange={handleUpdateInputChange}
            onSubmit={handleUpdate}
            buttonLabel="Update"
          />
        </div>
      </Modal>
      <BackdropAlert
        closeAlert={() => {
          setAlert({ ...alert, show: false });
        }}
        show={alert.show}
        setShow={setAlert}
        varient={alert.varient}
        message={alert.message}
      />
    </div>
  );
}

export default Areas;
