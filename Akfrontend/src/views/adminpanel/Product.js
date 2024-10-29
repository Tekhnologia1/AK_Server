import React, { useState, useEffect } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import { Button, Modal, Table } from "react-bootstrap";
import SearchBox from "../../commancomponet/Searchbox";
import {
  FaArrowRight,
  FaEdit,
  FaEllipsisV,
  FaTrash,
} from "react-icons/fa";
import productImage from "../../assets/images/lucide_image-down.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateProductData } from "../validation/Validationall";
import {
  createProduct,
  deleteProduct,
  fetchFillingTypes,
  fetchMasterProducts,
  fetchProducts,
} from "../store/productSlice";
import SelectBox from "../../commancomponet/SelectBox";

function Product() {
  const products = useSelector((state) => state.products.products);
  const masterProducts = useSelector((state) => state.products.masterProducts);
  const fillingTypes = useSelector((state) => state.products.fillingTypes);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showFirstModal, setShowFirstModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [errors, setErrors] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    details: "",
    items: "",
    weight: "",
    basePrice: "",
    makingPrice: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");



  
  const transformedCities = masterProducts.map((masterproduct) => ({
    label: masterproduct.name,
    option: masterproduct.pro_mast_id,
  }));


  const transformedfillingtype= fillingTypes.map((fillingtype) => ({
    label: fillingtype.name,
    option: fillingtype.filling_types_id,
  }));


  const columns = [
    "#",
    "Product Name",
    "Product Details",
    "Price",
    "Marking Price",
    "Status",
  ];

  useEffect(() => {
    dispatch(fetchFillingTypes())
    dispatch(fetchProducts());
    dispatch(fetchMasterProducts())
  }, [dispatch]);

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDeleteId(id);
    setShowFirstModal(true);
  };

  const handleAddButtonClick = () => {
    const validationErrors = validateProductData(productData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
console.log("productData",productData)
    setErrors({});
    dispatch(createProduct(productData)); // Pass product data to createProduct
    alert("Product added: " + JSON.stringify(productData));
    setProductData({
      name: "",
      details: "",
      items: "",
      weight: "",
      basePrice: "",
      makingPrice: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...productData,
      [name]: value,
    };
  
    if (name === "basePrice" || name === "weight") {
      updatedData.makingPrice = updatedData.basePrice * updatedData.weight;
    }
  
    setProductData(updatedData);
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async () => {
    if (deleteId) {
      await dispatch(deleteProduct(deleteId));
      dispatch(fetchProducts());
      setShowFirstModal(false);
    }
  };




  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <span style={{ color: "#7B3F00" }}>
          <FaArrowRight />
        </span>
        <span className="fs-5 fw-bold" style={{ color: "#7B3F00" }}>
          Product
        </span>
      </div>

      <div className="row m-0 border rounded pb-3">
        <div className="col-lg-12 p-4">
          <div className="row m-0">
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={transformedCities}
                value={productData.selectedPaymentTerm}
                onChange={handleChange}
                name="selectedPaymentTerm"
                defaultValue="Master Product"
              />
              <p className="text-danger">{errors.selectedPaymentTerm}</p>
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Product Name"
                value={productData.name}
                onChange={handleChange}
                name="name"
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Product Details"
                value={productData.details}
                onChange={handleChange}
                name="details"
              />
              {errors.details && <p className="text-danger">{errors.details}</p>}
            </div>
          </div>


          <div className="row m-0">
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={transformedfillingtype}
                value={productData.items}
                onChange={handleChange}
                name="items"
                defaultValue="Fill items"
              />
              <p className="text-danger">{errors.items}</p>
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Product Wt."
                value={productData.weight}
                onChange={handleChange}
                name="weight"
              />
              {errors.weight && <p className="text-danger">{errors.weight}</p>}
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Base Price"
                value={productData.basePrice}
                onChange={handleChange}
                name="basePrice"
              />
              {errors.basePrice && <p className="text-danger">{errors.basePrice}</p>}
            </div>
          </div>


          <div className="row m-0 justify-content-center">


          <div className="col-lg-4 gy-4">
              <SelectBox
                options={transformedfillingtype}
                value={productData.items}
                onChange={handleChange}
                name="items"
                defaultValue="Price Scale"
              />
              <p className="text-danger">{errors.items}</p>
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Making Price"
                value={productData.makingPrice}
                onChange={handleChange}
                name="makingPrice"
              />
              {errors.makingPrice && <p className="text-danger">{errors.makingPrice}</p>}
            </div>
          </div>
        </div>





        
        {/* <div className="col-lg-2 d-flex align-items-center justify-content-center pt-2">
          <div
            className="p-lg-5"
            style={{
              backgroundColor: "#F2ECE6",
              border: "dotted",
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <img src={productImage} alt="Upload" />
            )}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div> */}




        <div className="d-flex justify-content-center pt-2">
          <CommanButton
            label="Add"
            onClick={handleAddButtonClick}
            variant="#7B3F0080"
            className="mb-3 ps-4 pe-4"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>

      <div className="pt-5">
        <div className="row justify-content-end">
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
            {filteredProducts.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.base_price}</td>
                <td>{item.making_price}</td>
                <td>
                  <Button variant="transparent">
                    <FaEdit />
                  </Button>
                  <Button
                    variant="transparent"
                    onClick={() => handleFirstModalShow(item.id)}
                  >
                    <FaTrash />
                  </Button>
                  <Button variant="transparent">
                    <FaEllipsisV />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showFirstModal} onHide={handleFirstModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product;
