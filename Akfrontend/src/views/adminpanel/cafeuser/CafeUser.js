import React, { useEffect, useState } from "react";
// import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Table } from "react-bootstrap";
import CafeUserForm from "./CafeUserForm";
import { createCafeUser, deleteCafeUser, fetchCafeUsers, updateCafeUser } from "../../store/cafeuserSlice";
import SearchBox from "../../../commancomponet/Searchbox";

function CafeUser() {
  const dispatch = useDispatch();
  const cafeuser = useSelector((state) => state.cafeusers.users);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [formData, setFormData] = useState({
        cafe: "",
        name: "",
        userName:"",
        password:"",
        userType: "",
        email: "",
        contactNo: "",   
  });
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCafeUsers()); 
  }, [dispatch]);

  // const filteredCafes = cafes.filter(cafe =>
  //   cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const columns = ["SR.NO.", "Cafe User Name", "User Type", "Contact Number", "Actions"];

  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      console.log(deleteId)
      await dispatch(deleteCafeUser(deleteId));
      dispatch(fetchCafeUsers());
      setShowDeleteModal(false);
    }
  };



  const handleUpdate = async (values) => {
    const id = selectedCafe.cafe_users_id;
    const updatedData = { 
      cafe_id: values.cafe,
      name: values.name,
      username: values.userName,
      password: values.password,
      user_type_id: values.userType,
      email: values.email,
      cell_number: values.contactNo,
    };
  
    console.log("updatedData", updatedData);
  
    // Dispatching with the correct key
    await dispatch(updateCafeUser({ id, updatedData }));
    dispatch(fetchCafeUsers());
    setShowUpdateModal(false);
  };
  
  const handleUpdateModalOpen = (cafe) => {
    setSelectedCafe(cafe);
    setFormData({
      cafe: cafe.cafe_id,
      name: cafe.name,
      userName: cafe.username,
      password:cafe.password,
      contactNo: cafe.cell_number,
      userType: cafe.user_type_id,
      email: cafe.email,
    });
    setShowUpdateModal(true);
  };

  const handleAddClick = async (values) => {
    const data={
         cafe_id:values.cafe,
         name: values.name,
        username: values.userName,
        password:values.password ,
        user_type_id: values.userType,
        email: values.email,
        cell_number: values.contactNo
            
}
    console.log("values", values);
    await dispatch(createCafeUser(data));
    dispatch(fetchCafeUsers());
    setFormData({
      cafe: "",
      name: "",
      userName:"",
      password:"",
      userType: "",
      email: "",
      contactNo: "",   
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
          Cafe User{" "}
        </span>
      </div>

      <CafeUserForm
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
            {cafeuser.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.user_type_id}</td>
                <td>{item.cell_number}</td>
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
                      onClick={() => handleDeleteModalShow(item.cafe_users_id)}
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
          <CafeUserForm
            data={formData}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CafeUser;
