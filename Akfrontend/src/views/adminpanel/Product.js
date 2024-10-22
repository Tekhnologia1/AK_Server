import React, { useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Tablecom from "../../commancomponet/Tablecom";
import { Button } from "react-bootstrap";
import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productImage from "../../assets/images/lucide_image-down.png";
import { useNavigate } from "react-router-dom";

function Product() {


  const navigate=useNavigate()
  const [productData, setProductData] = useState({
    name: "",
    details: "",
    items: "",
    weight: "",
    basePrice: "",
    makingPrice: "",
  });


  
  const [selectedImage, setSelectedImage] = useState(null); // State for the uploaded image

  const columns = [
    "#",
    "Product Name",
    "Product Details",
    "Price",
    "Marking Price",
  ];

  const handleButtonClick = (productId) => {
    console.log(`Button clicked for product ${productId}`);
  };

  const data = [
    // ... Your existing data
  ];

  const handleAddButtonClick = () => {
    // Process the data (e.g., log it or send it to an API)
    console.log("Product Data:", productData);
    alert("Product added: " + JSON.stringify(productData));

    // Optionally reset the input fields
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
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="p-lg-5 ">


<div className="pb-2">
        <span onClick={()=>{navigate('/dashboard/adminpanel')}}  style={{ color: '#7B3F00', cursor: 'pointer' }}
 className="fs-5 fw-bold">Adminpanel</span><span style={{color:'#7B3F00'}}> <FaArrowRight/></span><span className="fs-5 fw-bold " style={{color:'#7B3F00'}}> Product</span>  


      </div>
      <div className="row m-0 border rounded pb-3">
        <div className="col-lg-10 p-4 ">
          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Product Name"
                value={productData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Product Details"
                value={productData.details}
                onChange={handleChange}
                name="details"
              />
            </div>
            <div className="col-lg-4 gy-4 ">
              <InputBox
                placeholder="Fill items"
                value={productData.items}
                onChange={handleChange}
                name="items"
              />
            </div>
          </div>
          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Product Wt."
                value={productData.weight}
                onChange={handleChange}
                name="weight"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Base Price"
                value={productData.basePrice}
                onChange={handleChange}
                name="basePrice"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Making Price"
                value={productData.makingPrice}
                onChange={handleChange}
                name="makingPrice"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-flex align-items-center justify-content-center pt-2">
          <div
            className="p-lg-5"
            style={{ backgroundColor: "#F2ECE6", border: "dotted", cursor: "pointer" }}
            onClick={() => document.getElementById("fileInput").click()} // Trigger file input click
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" style={{ width: "100%", height: "auto" }} />
            ) : (
              <img src={productImage} alt="Upload" />
            )}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }} // Hide the file input
              accept="image/*" // Accept only images
              onChange={handleImageUpload} // Handle image upload
            />
          </div>
        </div>

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
              value={"searchTerm"}
              // onChange={handleSearchChange}
              // onSearch={handleSearchClick}
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <Tablecom columns={columns} data={data} />
      </div>

      <div>
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
                style={{ backgroundColor: " #7B3F00" }}
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
    </div>
  );
}

export default Product;
