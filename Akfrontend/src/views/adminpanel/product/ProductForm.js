
import React, { useEffect, useState } from "react";
import { validateProductData, validateProductForm } from "../../validation/Validationall";
import SelectBox from "../../../commancomponet/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFillingTypes,
  fetchMasterProducts,
  fetchProducts,
} from "../../store/productSlice";
import InputBox from "../../../commancomponet/InputBox";
import CommanButton from "../../../commancomponet/CommanButton";

const priceScales = [
  { label: "Per Item", option: "Per Item" },
  { label: "Per Kg", option: "Per kg" },
];

const productfilling = [
  { label: "Yes", option: 1 },
  { label: "No", option: 0 },
];

const ProductForm = ({ data = {}, handleSubmit, isEditMode, className }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    product_master_id: data.pro_mast_id || '',
    name: data.name || "",
    details: data.details || "",
    product_fill: data.product_filling === 1 ? 1 : data.product_filling === 0 ? 0 : "",
    fill_items: data.product_filling || "",
    weight: data.product_weight || "",
    basePrice: data.base_price || "",
    makingPrice: data.making_price || "",
    price_scale: data.price_scale || "",
  });
  
  console.log("values ",values)
  const dispatch = useDispatch();
  const masterProducts = useSelector((state) => state.products.masterProducts);
  const fillingTypes = useSelector((state) => state.products.fillingTypes);

  const transformedCities = masterProducts.map((masterproduct) => ({
    label: masterproduct.name,
    option: masterproduct.pro_mast_id,
  }));
  const transformedfillingtype = fillingTypes.map((fillingtype) => ({
    label: fillingtype.name,
    option: fillingtype.filling_types_id,
  }));

  useEffect(() => {
    dispatch(fetchFillingTypes());
    dispatch(fetchProducts());
    dispatch(fetchMasterProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setValues({
        product_master_id: data.pro_mast_id || '',
        name: data.name || "",
        details: data.details || "",
        product_fill: data.product_filling === 1 ? 1 : data.product_filling === 0 ? 0 : "",
        fill_items: data.filling_types_id || "",
        weight: data.product_weight || "",
        basePrice: data.base_price || "",
        makingPrice: data.making_price || "",
        price_scale: data.price_scale || "",
      });
    }
  }, []); // Added 'data' as a dependency to update values when data changes

  console.log("master product",values.product_master_id)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name === "product_fill"){
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }else{
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }

    // Clear fill_items if product_fill is set to 0
    if (name === "product_fill" && value == 0) {
      setValues((prevValues) => ({
        ...prevValues,
        fill_items: "", // Clear fill_items when product_fill is 0
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form values
    const validationErrors = validateProductForm(values);

    if (values.product_fill == 1 && !values.fill_items) {
      validationErrors.fill_items = "Fill items are required when product filling is 'Yes'.";
    }

    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(values); // Submit the values
      // Reset the form values
      setValues({
        product_master_id: '',
        name: "",
        details: "",
        product_fill: "",
        fill_items: "",
        weight: "",
        basePrice: "",
        makingPrice: "",
        price_scale: "",
      });
      // Clear any previous errors
      setErrors({});
    } else {
      // Set validation errors in state
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={className}>
      {/* Master Product Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
          label={isEditMode ? "Master Product" : ""}
          options={transformedCities}
          value={values.product_master_id ? values.product_master_id : ''}
          onChange={handleChange}
          name="product_master_id"
          defaultValue={isEditMode ? "" : "Master Product"}
        />
        {errors.product_master_id && (
          <p className="text-danger">{errors.product_master_id}</p>
        )}
      </div>

      {/* Product Name Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          placeholder="Product Name"
          value={values.name}
          onChange={handleChange}
          name="name"
          label={isEditMode ? "Product Name" : ""}
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}
      </div>

      {/* Product Details Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          label={isEditMode ? "Product Details" : ""}
          placeholder="Product Details"
          value={values.details}
          onChange={handleChange}
          name="details"
        />
        {errors.details && <p className="text-danger">{errors.details}</p>}
      </div>

      {/* Product Fill Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
          label={isEditMode ? "Product Filling" : ""}
          options={productfilling}
          value={values.product_fill}
          onChange={handleChange}
          name="product_fill"
          defaultValue={isEditMode ? "" : "Product Filling"}
        />
        {errors.product_fill && <p className="text-danger">{errors.product_fill}</p>}
      </div>

      {/* Fill Items Field */}
      {values.product_fill !== 0 && <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
          label={isEditMode ? "Fill Items" : ""}
          options={transformedfillingtype}
          value={values.fill_items}
          onChange={handleChange}
          name="fill_items"
          defaultValue={isEditMode ? "" : "Fill Items"}
          disabled={values.product_fill == 0} // Disable when product_fill is 0
        />
        {errors.fill_items && <p className="text-danger">{errors.fill_items}</p>}
      </div>}

      {/* Product Weight Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          label={isEditMode ? "Product Wt." : ""}
          placeholder="Product Wt."
          value={values.weight}
          onChange={handleChange}
          name="weight"
          type="number"
        />
        {errors.weight && <p className="text-danger">{errors.weight}</p>}
      </div>

      {/* Base Price Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          label={isEditMode ? "Base Price" : ""}
          placeholder="Base Price"
          value={values.basePrice}
          onChange={handleChange}
          name="basePrice"
          type="number"
        />
        {errors.basePrice && <p className="text-danger">{errors.basePrice}</p>}
      </div>

      {/* Price Scale Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
          label={isEditMode ? "Price Scale" : ""}
          options={priceScales}
          value={values.price_scale}
          onChange={handleChange}
          name="price_scale"
          defaultValue={"Price Scale"}
        />
        {errors.price_scale && <p className="text-danger">{errors.price_scale}</p>}
      </div>

      {/* Making Price Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          label={isEditMode ? "Making Price" : ""}
          placeholder="Making Price"
          value={values.makingPrice}
          onChange={handleChange}
          name="makingPrice"
          type="number"
        />
        {errors.makingPrice && <p className="text-danger">{errors.makingPrice}</p>}
      </div>

      <div className="d-flex justify-content-center pt-4">
        <CommanButton
          label={isEditMode ? "Update" : "Add"}
          onClick={handleFormSubmit}
          variant="#7B3F0080"
          className="mb-3 ps-4 pe-4"
          style={{ borderRadius: "10px" }}
        />
      </div>
    </form>
  );
};

export default ProductForm;
