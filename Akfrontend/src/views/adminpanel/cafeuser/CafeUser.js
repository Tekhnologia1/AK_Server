import React, { useEffect, useMemo, useState, useCallback } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Table, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import CafeUserForm from "./CafeUserForm";
import {
  createCafeUser,
  deleteCafeUser,
  fetchCafeUsers,
  updateCafeUser,
} from "../../store/cafeuserSlice";
import SearchBox from "../../../commancomponet/Searchbox";
import Pagination1 from "../../../commancomponet/Pagination1";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import Backpage from "../../../commancomponet/Backpage";
import ShowModal from "../../../commancomponet/ShowModal";
import { isMobileView } from "../../../Utils/utils";
import { PiEyeBold, PiNotePencilBold, PiTrashBold } from "react-icons/pi";

function CafeUser() {
  const [showModal1, setShowModal1] = useState(false);
  const dispatch = useDispatch();
  const cafeuser = useSelector((state) => state.cafeusers.users);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [modaledata, seModaledata] = useState({});
  const [formData, setFormData] = useState({
    cafe: "",
    name: "",
    userName: "",
    password: "",
    userType: "",
    email: "",
    contactNo: "",
  });
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [pageCafeUsers, setPageCafeUsers] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });
  const pageSize = 5;

  useEffect(() => {
    dispatch(fetchCafeUsers());
  }, [dispatch]);

  useEffect(() => {
    const filteredUsers = cafeuser.filter((user) =>
      user.cafe_name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );

    const pages = Math.ceil(filteredUsers.length / pageSize);
    setTotalPages(pages);
    const us = filteredUsers.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setPageCafeUsers(us);
  }, [cafeuser, currentPage, searchTerm]);

  const columns = useMemo(
    () => ["SR.NO.", "Cafe", "Cafe User Name", "Contact Number", "Actions"],
    []
  );

  const handleDeleteModalClose = useCallback(() => setShowDeleteModal(false), []);
  const handleDeleteModalShow = useCallback((id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  }, []);

  const handleDelete = useCallback(async () => {
    if (deleteId) {
      const response = await dispatch(deleteCafeUser(deleteId));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({
          show: true,
          message: "Cafe User Deleted!",
          varient: "success",
        });
        dispatch(fetchCafeUsers());
      } else {
        setAlert({
          show: true,
          message: "Cafe User Not Deleted!",
          varient: "danger",
        });
      }
      setShowDeleteModal(false);
      if (pageCafeUsers.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  }, [deleteId, dispatch, pageCafeUsers.length, currentPage]);

  const handleUpdate = useCallback(
    async (values) => {
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

      const response = await dispatch(updateCafeUser({ id, updatedData }));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({
          show: true,
          message: "Cafe User Updated!",
          varient: "success",
        });
        dispatch(fetchCafeUsers());
      } else {
        setAlert({
          show: true,
          message: "Cafe User Not Updated!",
          varient: "danger",
        });
      }
      setShowUpdateModal(false);
    },
    [dispatch, selectedCafe]
  );

  const handleUpdateModalOpen = useCallback((cafe) => {
    setSelectedCafe(cafe);
    setFormData({
      cafe: cafe.cafe_id,
      name: cafe.name,
      userName: cafe.username,
      password: cafe.password,
      contactNo: cafe.cell_number,
      userType: cafe.user_type_id,
      email: cafe.email,
    });
    setShowUpdateModal(true);
  }, []);

  const handleAddClick = useCallback(
    async (values) => {
      const data = {
        cafe_id: values.cafe,
        name: values.name,
        username: values.userName,
        password: values.password,
        user_type_id: values.userType,
        email: values.email,
        cell_number: values.contactNo,
      };
      const response = await dispatch(createCafeUser(data));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({
          show: true,
          message: "Cafe User Created!",
          varient: "success",
        });
        dispatch(fetchCafeUsers());
      } else {
        setAlert({
          show: true,
          message: "Cafe User Not Created!",
          varient: "danger",
        });
      }
      setFormData({
        cafe: "",
        name: "",
        userName: "",
        password: "",
        userType: "",
        email: "",
        contactNo: "",
      });
    },
    [dispatch]
  );

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page) => setCurrentPage(page), []);

  const modalContent = (
    <Row className="m-0">
      <Col className="gy-2" lg={6}><span className="fw-bold">Cafe Name :</span> {modaledata?.cafe_name}</Col>
      <Col className="gy-2" lg={6}> <span className="fw-bold">Cafe User Name :</span> {modaledata?.name} </Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">UserName :</span> {modaledata?.username}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">User Type :</span> {modaledata?.user_type_name}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">Email :</span> {modaledata?.email}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">Mobile No :</span> {modaledata?.cell_number}</Col>

    </Row>
  );

  return (
    <div className="p-lg-5">
      <Backpage mainPage="Admin Panel" mainPagePath="/adminpanel" currentPage="CafeUser" />
      <CafeUserForm handleSubmit={handleAddClick} isEditMode={false} className="row m-0 form_container p-4" />
      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox placeholder="Search by cafe name" value={searchTerm} onChange={handleSearchChange} />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Table responsive="sm">
          <thead>
            <tr className="text-center">
              {columns.map((column, index) => (
                <th key={index} style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageCafeUsers.length > 0 ? (
              pageCafeUsers.map((item, rowIndex) => (
                <tr key={item.id} className="text-center">
                  <td>{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
                  <td>{item.cafe_name}</td>
                  <td>{item.name}</td>
                  <td>{item.cell_number}</td>
                  <td className="d-flex justify-content-center gap-2">
                    {isMobileView() ?
                      <button className="icon_blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          seModaledata(item);
                          setShowModal1(true);
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
                            seModaledata(item);
                            setShowModal1(true);
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
                          handleDeleteModalShow(item.cafe_users_id);
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
                            handleDeleteModalShow(item.cafe_users_id);
                          }}>
                          <PiTrashBold />
                        </button>
                      </OverlayTrigger>}
                  </td>
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
          <Pagination1 currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      )}
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Cafe User?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


      <ShowModal
        show={showModal1}
        setShow={setShowModal1}
        title="Cafe User"
        bodyContent={modalContent}
        data={modaledata}
      />

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} backdrop="static" keyboard={false} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Update Cafe User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CafeUserForm data={formData} handleSubmit={handleUpdate} isEditMode={true} />
        </Modal.Body>
      </Modal>
      <BackdropAlert alert={alert} setAlert={setAlert} />
    </div>
  );
}

export default CafeUser;
