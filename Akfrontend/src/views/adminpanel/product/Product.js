import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import SearchBox from "../../../commancomponet/Searchbox";
import {
  FaArrowRight,
  FaEdit,
  FaEllipsisV,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination1 from "../../../commancomponet/Pagination1";

import {
  createProduct,
  deleteProduct,
  fetchFillingTypes,
  fetchMasterProducts,
  fetchProducts,
  updateProduct,
} from "../../store/productSlice";
import ProductForm from "./ProductForm";
import CommonModal from "../../../commancomponet/CommanModale";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import { MdNavigateNext } from "react-icons/md";
import Backpage from "../../../commancomponet/Backpage";

const MemoizedSearchBox = React.memo(SearchBox);
const MemoizedPagination1 = React.memo(Pagination1);
const MemoizedProductForm = React.memo(ProductForm);
const MemoizedBackdropAlert = React.memo(BackdropAlert);
const MemoizedBackpage = React.memo(Backpage);


function Product() {
  const products = useSelector((state) => state.products.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pageProducts, setPageProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    variant: "success",
  });
  const pageSize = 5;

  const columns = [
    "SR.NO",
    "Product Name",
    "Product Details",
    "Price",
    "Marking Price",
    "Action",
    "View"
  ];

  useEffect(() => {
    dispatch(fetchFillingTypes());
    dispatch(fetchProducts());
    dispatch(fetchMasterProducts());
  }, [dispatch]);

  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = (product) => {
    setDeleteId(product.product_id);
    setShowDeleteModal(true);
  };

  const handleUpdateModalOpen = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };




  const handleDelete = async () => {
    if (deleteId) {
      const result = await dispatch(deleteProduct(deleteId));
      if (result.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Product Deleted!", varient: "success" });
        dispatch(fetchProducts());
        if (pageProducts.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } else {
        setAlert({ show: true, message: "Failed to delete product.", varient: "danger" });
      }
      setShowDeleteModal(false);
    }
  };





  const handleUpdate = async (values) => {
    try {
      const updatedData = {
        product_master_id: values.product_master_id,
        name: values.name,
        details: values.details,
        product_weight: values.weight,
        product_filling: Number(values.product_fill),
        base_price: values.basePrice,
        making_price: values.makingPrice,
        price_scale: values.price_scale,
      };
      if (Number(values.product_fill) === 1) {
        updatedData.filling_type_id = values.fill_items;
      }

      const result = await dispatch(updateProduct({ updatedData, id: selectedProduct.product_id }));
      if (result.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Product Updated!", varient: "success" });
      } else {
        setAlert({ show: true, message: "Failed to update product.", varient: "danger" });
      }
      dispatch(fetchProducts());
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Failed to update product:", error);
      setAlert({ show: true, message: "Failed to update product.", variant: "danger" });
    }
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTotalPages(Math.ceil(filteredProducts.length / pageSize));
    setPageProducts(
      filteredProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    );
  }, [products, currentPage, searchTerm]);

  const handleAddProduct = async (values) => {
    const newProduct = {
      product_master_id: values.product_master_id,
      name: values.name,
      details: values.details,
      product_weight: values.weight,
      product_filling: values.product_fill,
      filling_type_id: values.fill_items,
      base_price: values.basePrice,
      making_price: values.makingPrice,
      price_scale: values.price_scale,
    };
    const result = await dispatch(createProduct(newProduct));

    if (result.meta.requestStatus === "fulfilled") {
      // setAlert({ show: true, message: "Product Created!", variant: "success" });
      setAlert({ show: true, message: "Product Created!", varient: "success" });
    } else {
      // setAlert({ show: true, message: "Failed to create product.", variant: "danger" });
      setAlert({ show: true, message: "Failed to create the product!", varient: "danger" });
    }
    dispatch(fetchProducts());
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-lg-5">

      <MemoizedBackpage
        mainPage="Adminpanel"
        mainPagePath="/adminpanel"
        currentPage="Product"
      />


      <MemoizedProductForm
        className="row m-0 form_container pt-lg-4 pb-4"
        handleSubmit={handleAddProduct}
        isEditMode={false}
      />

      <div className="pt-5">
        <div className="row justify-content-end">
          <div className="col-lg-4">
            <MemoizedSearchBox
              placeholder="Search Product"
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
                <th key={index} style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageProducts.length > 0 ? (
              pageProducts.map((product, rowIndex) => (
                <tr key={product.id} className="text-center">
                  <td>{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
                  <td>{product.name}</td>
                  <td>{product.details}</td>
                  <td>{product.base_price}</td>
                  <td>{product.making_price}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleUpdateModalOpen(product)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleDeleteModalShow(product)}
                    >
                      <FaTrash />
                    </Button>
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
            onPageChange={handlePageChange}
          />
        </div>
      )}
      
      <CommonModal
        show={showDeleteModal}
        handleClose={handleDeleteModalClose}
        title={"Delete Product"}
        message={"Are you sure you want to delete this product?"}
        handleConfirm={handleDelete}
      />

      <CommonModal
        show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        title={"Update Product"}
        handleConfirm={handleUpdate}
        isUpdate
        data={selectedProduct}
        component={<MemoizedProductForm isEditMode={true} data={selectedProduct} handleSubmit={handleUpdate}/>}
      />



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

export default Product;













