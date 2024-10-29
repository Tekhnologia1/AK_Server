import React, { useEffect, useState } from "react";
// import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createCafe,
  deleteCafe,
  fetchCafes,
  updateCafe,
} from "../../store/cafeSlice";
import { Button, Modal, Table } from "react-bootstrap";
import CafeForm from "./Cafeform";
import SearchBox from "../../../commancomponet/Searchbox";

function Cafe() {
  const dispatch = useDispatch();
  const cafes = useSelector((state) => state.cafes.cafes);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [formData, setFormData] = useState({
    cafeName: "",
    address: "",
    contactPerson: "",
    selectedCity: "",
    selectedRoute: "",
    selectedDeal: "",
    cafedeal: "",
    selectedPaymentTerm: "",
  });
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCafes()); // Fetch cafes on mount
  }, [dispatch]);

  // const filteredCafes = cafes.filter(cafe =>
  //   cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const columns = ["SR.NO.", "Cafe Name", "City", "Contact Person", "Actions"];

  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      console.log("objedfct");
      await dispatch(deleteCafe(deleteId));
      dispatch(fetchCafes());
      setShowDeleteModal(false);
    }
  };

  // const handleUpdate = async (values) => {
  //   const id = selectedCafe.cafe_id;
  //   const cafeDealId = parseInt(values.cafedeal, 10);
  //   const data = {
  //     name: values.cafeName,
  //     address: values.address,
  //     area: values.area,
  //     route_id: values.selectedRoute,
  //     cities_id: values.selectedCity,
  //     special_deal: values.selectedDeal,
  //     cafe_deal_id: cafeDealId,
  //     payment_term_id: values.selectedPaymentTerm,
  //     contact_person: values.contactPerson,
  //   };

  //   console.log("updatedData", data);
  //   await dispatch(updateCafe(data, id));
  //   dispatch(fetchCafes());
  //   setShowUpdateModal(false);
  // };




  const handleUpdate = async (values) => {
    const id = selectedCafe.cafe_id;
    const cafeDealId = parseInt(values.cafedeal, 10);
    const updatedData = {
      name: values.cafeName,
      address: values.address,
      area: values.area,
      route_id: values.selectedRoute,
      cities_id: values.selectedCity,
      special_deal: values.selectedDeal,
      cafe_deal_id: cafeDealId,
      payment_term_id: values.selectedPaymentTerm,
      contact_person: values.contactPerson,
    };
  
    console.log("updatedData", updatedData);
  
    // Pass an object containing both updatedData and id
    await dispatch(updateCafe({ updatedData, id }));
    dispatch(fetchCafes());
    setShowUpdateModal(false);
  };
  
  const handleUpdateModalOpen = (cafe) => {
    setSelectedCafe(cafe);
    setFormData({
      cafeName: cafe.name,
      address: cafe.address,
      area: cafe.area,
      contactPerson: cafe.contact_person,
      selectedCity: cafe.cities_id,
      selectedRoute: cafe.routes_id,
      selectedDeal: cafe.special_deal,
      selectedCafedeal: cafe.cafe_deals_id,
      selectedPaymentTerm: cafe.payment_terms_id,
    });
    setShowUpdateModal(true);
  };

  const handleAddClick = async (values) => {
    const data = {
      name: values.cafeName,
      address: values.address,
      area: values.area,
      route_id: values.selectedRoute,
      cities_id: values.selectedCity,
      special_deal: values.selectedDeal,
      cafe_deal_id: values.cafedeal,
      payment_term_id: values.selectedPaymentTerm,
      contact_person: values.contactPerson,
    };

    console.log("values", data);
    await dispatch(createCafe(data));
    dispatch(fetchCafes());
    setFormData({
      cafeName: "",
      address: "",
      contactPerson: "",
      selectedCity: "",
      selectedRoute: "",
      selectedDeal: "",
      cafedeal: "",
      selectedPaymentTerm: "",
    });
  };

  return (
    <div className="p-lg-5">
      <div className="pb-2 ps-2">
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
          Cafes{" "}
        </span>
      </div>

      <CafeForm
        handleSubmit={handleAddClick}
        isEditMode={false}
        className="row m-0 border rounded p-4"
      />

      {/* <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox 
              placeholder="Type to search..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>
      </div> */}

<div className="pt-5">
        <div className="row justify-content-end">
          <div className="col-lg-4">
            <SearchBox
              placeholder="Search Cafe"
              value={searchTerm}
              // onChange={handleSearchChange}
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
            {cafes.map((item, rowIndex) => (
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
                      onClick={() => handleDeleteModalShow(item.cafe_id)}
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
                <FaChevronRight/> {/* Right arrow icon */}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Modal
        show={showDeleteModal}
        onHide={handleDeleteModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this cafe?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Cafe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CafeForm
            data={formData}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Cafe;
