import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import SearchBox from "../../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

function Product() {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const columns = [
    "#",
    "Product Name",
    "Product Details",
    "Price",
    "Marking Price",
    "Status",
  ];

  useEffect(() => {
    dispatch(fetchFillingTypes());
    dispatch(fetchProducts());
    dispatch(fetchMasterProducts());
  }, [dispatch]);

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (item) => {
    setDeleteId(item.product_id);
    setShowFirstModal(true);
  };

  const handleUpdateModalOpen = (product) => {
    setSelectedProduct(product);

    setShowUpdate(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await dispatch(deleteProduct(deleteId));
      dispatch(fetchProducts());
      setShowFirstModal(false);
    }
  };

  const handleUpdate = async (values) => {
    try {
      const id = selectedProduct.product_id;
      let updatedData = {
        product_master_id: values.product_master_id,
        name: values.name,
        details: values.details,
        product_weight: values.weight,
        product_filling: Number(values.product_fill),
        
        // filling_type_id: Number(values.product_fill)=== 1 ? values.fill_items "",
        base_price: values.basePrice,
        making_price: values.makingPrice,
        price_scale: values.price_scale,
      };
      if(Number(values.product_fill === 1)){
        updatedData.filling_type_id = values.fill_items
      }
      
      console.log("update", updatedData);

      await dispatch(updateProduct({ updatedData, id: id }));
      dispatch(fetchProducts());

      setShowUpdate(false);
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };
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
    console.log("nne", newProduct);
    await dispatch(createProduct(newProduct));
    dispatch(fetchProducts());
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredProducts = products.filter((product) =>
  //   product.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  // );
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
          Product
        </span>
      </div>

      <div className="row m-0 border rounded pb-3">
        <div className="col-lg-12 p-4">
          <ProductForm
            className="row m-0"
            handleSubmit={handleAddProduct}
            isEditMode={false}
          />
        </div>
      </div>

      <div className="pt-5">
        <div className="row justify-content-end">
          <div className="col-lg-4">
            <SearchBox
              placeholder="Search Product"
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
            {products.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.base_price}</td>
                <td>{item.making_price}</td>
                <td>
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
                  <Button variant="transparent" onClick={() => {}}>
                    <FaEllipsisV />
                  </Button>
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


      <CommonModal
        show={showFirstModal}
        handleClose={handleFirstModalClose}
        title={"Delete Product"}
        message={"Are you sure you want to delete this product?"}
        handleConfirm={handleDelete}
      />

      <CommonModal
        show={showUpdate}
        handleClose={() => {
          setShowUpdate(false);
        }}
        title={"Update Product"}
        handleConfirm={handleUpdate}
        isUpdate={true}
        modalForm={
          <ProductForm
            data={selectedProduct}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        }
      />
    </div>
  );
}

export default Product;
