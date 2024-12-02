import React, { useCallback, useEffect, useState } from "react";
import {FaEdit,FaEye,FaTrash,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {createCafe,deleteCafe,fetchCafes,updateCafe,} from "../../store/cafeSlice";
import { useMemo } from "react";
import { Button, Modal, Table,Row,Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import SearchBox from "../../../commancomponet/Searchbox";
import Pagination1 from "../../../commancomponet/Pagination1"; // Importing the Pagination1 component
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import Backpage from "../../../commancomponet/Backpage";
import CafeForm from './Cafeform'
import ShowModal from "../../../commancomponet/ShowModal";
import { PiEyeBold, PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { isMobileView } from "../../../Utils/utils";

// Memoize child components to avoid unnecessary re-renders
const MemoizedSearchBox = React.memo(SearchBox);
const MemoizedPagination1 = React.memo(Pagination1);
const MemoizedCafeForm = React.memo(CafeForm);
const MemoizedBackdropAlert = React.memo(BackdropAlert);
const MemoizedBackpage = React.memo(Backpage);

function Cafe() {
  const [showModal1, setShowModal1] = useState(false);
  const dispatch = useDispatch();
  const cafes = useSelector((state) => state.cafes.cafes);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [modaledata, seModaledata] = useState({});

  console.log("object",cafes)
  const [formData, setFormData] = useState({
    cafeName: "",
    address: "",
    contactPerson: "",
    selectedCity: "",
    selectedRoute: "",
    selectedDeal: "",
    franchise_id:"",
    // cafedeal: "",
    selectedPaymentTerm: "",
  });
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [pageCafes, setPageCafes] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });
  const pageSize = 5;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCafes()); // Fetch cafes on mount
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const filteredCafes = cafes.filter((cafe) =>
      cafe.cafe_name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    setTotalPages(Math.ceil(filteredCafes.length / pageSize));
    setPageCafes(
      filteredCafes.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    );
  }, [cafes, currentPage, searchTerm]);

  const columns = useMemo(
    () => ["SR.NO.", "Cafe Name", "City", "Contact Person", "Actions"],
    []
  );

  const handleDeleteModalClose = useCallback(
    () => setShowDeleteModal(false),
    []
  );
  const handleDeleteModalShow = useCallback((id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  }, []);

  const handleDelete = useCallback(async () => {
    if (deleteId) {
      const response = await dispatch(deleteCafe(deleteId));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Cafe Deleted!", varient: "success" });
        dispatch(fetchCafes());
      } else {
        setAlert({
          show: true,
          message: "Cafe Not Deleted!",
          varient: "danger",
        });
      }
      setShowDeleteModal(false);
      if (pageCafes.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  }, [deleteId, dispatch, pageCafes.length, currentPage]);

  const handleUpdateModalOpen = (cafe) => {
    setSelectedCafe(cafe);
    console.log(cafe);
    setFormData({
      cafeName: cafe.cafe_name,
      address: cafe.address,
      area: cafe.area,
      contactPerson: cafe.contact_person,
      selectedCity: cafe.cities_id,
      selectedRoute: cafe.routes_id,
      selectedDeal: cafe.special_deal,
      franchise_id:cafe.franchise_id ,
      // selectedCafedeal: cafe.cafe_deals_id,
      selectedPaymentTerm: cafe.payment_terms_id,
    });
    setShowUpdateModal(true);
  };

  const handleUpdate = useCallback(
    async (values) => {
      const id = selectedCafe.cafe_id;
      const fraid = values.franchise_id ? values.franchise_id : null;
      const spe = values.cafeName.trim().substring(0, 3).toUpperCase();
      const updatedData = {
        name: values.cafeName,
        address: values.address,
        area: values.area,
        route_id: values.selectedRoute,
        cities_id: values.selectedCity,
        special_deal: values.selectedDeal,
        payment_term_id: values.selectedPaymentTerm,
        contact_person: values.contactPerson,
        franchise_id:fraid,
        code:spe
      };

      const response = await dispatch(updateCafe({ updatedData, id }));

      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Cafe Updated!", varient: "success" });
        dispatch(fetchCafes());
      } else {
        setAlert({
          show: true,
          message: "Cafe Not Updated!",
          varient: "danger",
        });
      }

      setShowUpdateModal(false);
    },
    [dispatch, selectedCafe]
  );

  const handleAddClick = useCallback(
    async (values) => {
      const fraid = values.franchise_id ? values.franchise_id : null;
      const spe = values.cafeName.trim().substring(0, 3).toUpperCase();
      const data = {
        name: values.cafeName,
        address: values.address,
        area: values.area,
        route_id: values.selectedRoute,
        cities_id: values.selectedCity,
        special_deal: values.selectedDeal,
        payment_term_id: values.selectedPaymentTerm,
        contact_person: values.contactPerson,
        franchise_id:fraid,
        code:spe
      };
      const response = await dispatch(createCafe(data));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Cafe Created!", varient: "success" });
        dispatch(fetchCafes());
      } else {
        setAlert({
          show: true,
          message: "Cafe not created!",
          varient: "danger",
        });
      }

      setFormData({
        cafeName: "",
        address: "",
        contactPerson: "",
        selectedCity: "",
        selectedRoute: "",
        selectedDeal: "",
        franchise_id:"",
        selectedPaymentTerm: "",
      });
    },
    [dispatch]
  );
  
  const modalContent = (
    <Row className="m-0">
      <Col  className="gy-2" lg={6}><span className="fw-bold">Cafe Name :</span> {modaledata?.cafe_name}</Col>
      <Col  className="gy-2" lg={6}> <span className="fw-bold">Address :</span> {modaledata?.address} </Col>
      <Col  className="gy-2" lg={6}><span className="fw-bold">Route Name :</span> {modaledata?.route_name}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">City Name :</span> {modaledata?.cities_name}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">Contact Person :</span> {modaledata?.contact_person}</Col>
    </Row>
  );

  return (
    <div className="p-lg-5">
      <MemoizedBackpage
        mainPage="Admin Panel"
        mainPagePath="/adminpanel"
        currentPage="Cafes"
      />

      <MemoizedCafeForm
        handleSubmit={handleAddClick}
        isEditMode={false}
        className="row m-0 form_container p-4"
      />

      <div className="pt-5">
        <div className="row justify-content-end">
          <div className="col-lg-4">
            <MemoizedSearchBox
              placeholder="Search Cafe"
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
            {pageCafes.length > 0 ? (
              pageCafes.map((item, rowIndex) => (
                <tr key={item.id} className="text-center">
                  <td>{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
                  <td>{item.cafe_name}</td>
                  <td>{item.cities_name}</td>
                  <td>{item.contact_person}</td>
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
                          handleDeleteModalShow(item.cafe_id);
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
                            handleDeleteModalShow(item.cafe_id);
                          }}>
                          <PiTrashBold />
                        </button>
                      </OverlayTrigger>}
                  </td>
                  {/* <td>
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
                     
                    </div>
                  </td> */}
                  {/* <td>
                    <div className="d-flex justify-content-center">
                      <Button variant="" size="sm" className="me-2"   onClick={() => {
                          seModaledata(item);
                          setShowModal1(true);
                        }} >
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
        <MemoizedPagination1
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

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

      <ShowModal
        show={showModal1}
        setShow={setShowModal1}
        title="Cafe Detail"
        bodyContent={modalContent}
        data={modaledata}
      />


      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Cafe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MemoizedCafeForm
            data={formData}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        </Modal.Body>
      </Modal>
      <MemoizedBackdropAlert
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

export default Cafe;
