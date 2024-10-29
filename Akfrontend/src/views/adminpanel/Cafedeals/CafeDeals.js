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
import CafeUser from "../cafeuser/CafeUser";
import CafeUserForm from "../cafeuser/CafeUserForm";
import CafeDealsForm from "./CafeDealsForm";
import SearchBox from "../../../commancomponet/Searchbox";
import { createDeal, deleteDeal, fetchDeals, updateDeal } from "../../store/cafeDealsSlice";

function CafeDeals() {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.deals.deals);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [formData, setFormData] = useState({
    cafe: "",
    products: "",
    dealprice: "",
  });
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDeals()); // Fetch cafes on mount
  }, [dispatch]);

  const columns = [
    "SR.NO.",
    "Cafe Name",
    "Product Name",
    "Deal Price",
    "Actions",
  ];

  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = (id) => {


    console.log("object",id)
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (deleteId) {

      console.log("cvbnm")
      await dispatch(deleteDeal(deleteId));
      dispatch(fetchDeals());
      setShowDeleteModal(false);
    }
  };

  const handleUpdate = async (values) => {
    const id = selectedCafe.cafe_deal_details_id;
    const updatedData = {
      cafe_id: values.cafe,
      product_id: values.products,
      deal_price: values.dealprice,
    };
  
    console.log("updatedData", updatedData); 
    console.log("id", id); 
    await dispatch(updateDeal({ id, updatedData })); // Pass an object with both id and updatedData
    dispatch(fetchDeals());
    setShowUpdateModal(false);
  };
  
  // const handleUpdate = async (values) => {
  //   const id = selectedCafe.cafe_deal_details_id;
  //   const data = {
  //     cafe_id: values.cafe,
  //     product_id: values.products,
  //     deal_price: values.dealprice,
  //   };
  //   console.log("updatedData", data);
  //   await dispatch(updateDeal({ data, id })); // Pass an object with both data and id
  //   dispatch(fetchCafes());
  //   setShowUpdateModal(false);
  // };

  const handleUpdateModalOpen = (cafe) => {
    setSelectedCafe(cafe);
     setFormData({
      cafe: cafe.cafe_id,
      products:cafe.product_id,
      dealprice:cafe.deal_price,
     });


    setShowUpdateModal(true);
  };

  const handleAddClick = async (values) => {
    const data = {
      cafe_id: values.cafe,
      product_id: values.products,
      deal_price: values.dealprice,
    };
    console.log("object",data)
    await dispatch(createDeal(data));
    dispatch(fetchDeals());
    setFormData({
      cafe: "",
      products: "",
      dealprice: "",
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
          Cafe Deals{" "}
        </span>
      </div>
      <CafeDealsForm
        handleSubmit={handleAddClick}
        isEditMode={false}
        className="row m-0 border rounded p-4"
      />
      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>{" "}
      *
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
            {deals.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.Cafe_name}</td>
                <td>{item.product_name}</td>
                <td>{item.deal_price}</td>
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
                      onClick={() => handleDeleteModalShow(item.cafe_deal_details_id
                      )}
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
          <CafeDealsForm
            data={formData}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CafeDeals;
