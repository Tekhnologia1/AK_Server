
import React, { useEffect, useMemo, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Table } from "react-bootstrap";
import CafeDealsForm from "./CafeDealsForm";
import SearchBox from "../../../commancomponet/Searchbox";
import { useCallback } from "react";
import {
  createDeal,
  deleteDeal,
  fetchDeals,
  updateDeal,
} from "../../store/cafeDealsSlice";
import Pagination1 from "../../../commancomponet/Pagination1";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import Backpage from "../../../commancomponet/Backpage";

const MemoizedSearchBox = React.memo(SearchBox);
const MemoizedPagination1 = React.memo(Pagination1);
const MemoizedCafeDealsForm = React.memo(CafeDealsForm);
const MemoizedBackdropAlert = React.memo(BackdropAlert);
const MemoizedBackpage = React.memo(Backpage);

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageDeals, setPageDeals] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });
  const pageSize = 5;
  useEffect(() => {
    dispatch(fetchDeals()); // Fetch cafes on mount
  }, [dispatch]);


  const columns = useMemo(
    () => ["SR.NO.", "Cafe Name", "Product Name", "Deal Price", "Actions", "View"],
    []
  );



  useEffect(() => {
    const filteredDeals = deals.filter((deal) =>
      deal.Cafe_name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );
    const pages = Math.ceil(filteredDeals.length / pageSize);
    setTotalPages(pages);
    const deal = filteredDeals.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setPageDeals(deal);
  }, [deals, searchTerm, currentPage]);



  // const filteredDeals = useMemo(() => {
  //   return deals.filter((deal) =>
  //     deal.Cafe_name?.toLowerCase().includes(searchTerm.toLowerCase() || "")
  //   );
  // }, [deals, searchTerm]);



  // const pageDeals = useMemo(() => {
  //   const pages = Math.ceil(filteredDeals.length / pageSize);
  //   setTotalPages(pages);
  //   return filteredDeals.slice(
  //     (currentPage - 1) * pageSize,
  //     currentPage * pageSize
  //   );
  // }, [filteredDeals, currentPage]);





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
      const response = await dispatch(deleteDeal(deleteId));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({
          show: true,
          message: "Cafe Deal Deleted!",
          varient: "success",
        });
        dispatch(fetchDeals());
      } else {
        setAlert({
          show: true,
          message: "Cafe Not Deal Deleted!",
          varient: "danger",
        });
      }
      setShowDeleteModal(false);
      if (pageDeals.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  }, [deleteId, dispatch, pageDeals.length, currentPage]);

  const handleUpdate = useCallback(
    async (values) => {
      const id = selectedCafe.cafe_deal_details_id;
      const updatedData = {
        cafe_id: values.cafe,
        product_id: values.products,
        deal_price: values.dealprice,
      };
      const response = await dispatch(updateDeal({ id, updatedData }));
      if (response.meta.requestStatus === "fulfilled") {
        setAlert({
          show: true,
          message: "Cafe Deal Updated!",
          varient: "success",
        });
        dispatch(fetchDeals());
      } else {
        setAlert({
          show: true,
          message: "Cafe Not Deal Updated!",
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
      products: cafe.product_id,
      dealprice: cafe.deal_price,
    });
    setShowUpdateModal(true);
  }, []);

  const handleAddClick = async (values) => {
    const data = {
      cafe_id: values.cafe,
      product_id: values.products,
      deal_price: values.dealprice,
    };
    const response = await dispatch(createDeal(data));
    if (response.meta.requestStatus === "fulfilled") {
      setAlert({
        show: true,
        message: "Cafe Deal Created!",
        varient: "success",
      });
      dispatch(fetchDeals());
    } else {
      setAlert({
        show: true,
        message: "Cafe  Not Deal Created!",
        varient: "danger",
      });
    }
    setFormData({
      cafe: "",
      products: "",
      dealprice: "",
    });
  };

  return (
    <div className="p-lg-5">
      <MemoizedBackpage
        mainPage="Adminpanel"
        mainPagePath="/adminpanel"
        currentPage="Cafe Deals"
      />

      <MemoizedCafeDealsForm
        handleSubmit={handleAddClick}
        isEditMode={false}
        className="row m-0 form_container p-4"
      />
      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <MemoizedSearchBox
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
            {pageDeals.length > 0 ? (
              pageDeals.map((item, rowIndex) => (
                <tr key={item.id} className="text-center">
                  <td>{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
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
                        onClick={() =>
                          handleDeleteModalShow(item.cafe_deal_details_id)
                        }
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex justify-content-center">
                      <Button variant="" size="sm" className="me-2">
                        <FaEye />
                      </Button>
                    </div>
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
          <MemoizedPagination1
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
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
        <Modal.Body>Are you sure you want to delete this cafe deal?</Modal.Body>
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
          <MemoizedCafeDealsForm
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

export default CafeDeals;
