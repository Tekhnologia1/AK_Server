import React, { useEffect, useState } from "react";
import CommanButton from "../../../commancomponet/CommanButton";
import SelectBox from "../../../commancomponet/SelectBox";
import InputBox from "../../../commancomponet/InputBox";
import { validateCafeDealForm } from "../../validation/Validationall";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { fetchRoutes } from "../../store/routeSlice";
import { fetchAreas, fetchCities } from "../../store/areaSlice";
import { fetchCafes, fetchSpecialDeals } from "../../store/cafeSlice";
import { fetchDeals } from "../../store/cafeDealsSlice";
import { fetchProducts } from "../../store/productSlice";

const CafeDealsForm = ({ data = {}, handleSubmit, isEditMode, className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cafedata = useSelector((state) => state.cafes.cafes);


  const [values, setValues] = useState({
    cafe: data.selectedCity || "",
    products: data.cafeName || "",
    dealprice: data.address || "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchCafes());
    dispatch(fetchProducts());

  }, []);

  const transformedproducts = products.map((products) => ({
    label: products.name,
    option: products.product_id,
  }));

  const transformedcafes = cafedata.map((cafedata) => ({
    label: cafedata.name,
    option: cafedata.cities_id,
  }));

  useEffect(() => {
    if (data) {
      setValues({
        cafe: data.cafe || "",
        products: data.products || "",
        dealprice: data.dealprice || "",
      });
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };



  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateCafeDealForm(values);
    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      handleSubmit(values);

      setValues({
        cafe: "",
        products: "",
        dealprice: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <div className="row">
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
            label={isEditMode ? "Cafe" : ""}
            options={transformedcafes}
            value={values.cafe}
            onChange={handleChange}
            name="cafe"
            defaultValue="Cafe"
          />
          <p className="text-danger">{errors.cafe}</p>
        </div>
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>


        <SelectBox
            label={isEditMode ? "Products" : ""}
            options={transformedproducts}
            value={values.products}
            onChange={handleChange}
            name="products"
            defaultValue="Products"
          />
          <p className="text-danger">{errors.products}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
            label={isEditMode ? "Deal Price" : ""}
            placeholder="Deal Price"
            value={values.dealprice}
            onChange={handleChange}
            name="dealprice"
          />
          <p className="text-danger">{errors.dealprice}</p>
        </div>
      </div>

      <div className="d-flex justify-content-center pt-3">
        <CommanButton
          label={isEditMode ? "Update" : "Add"}
          variant="#7B3F0080"
          className="mb-3 ps-4 pe-4"
          style={{ borderRadius: "5px" }}
          onClick={handleFormSubmit}
        />
      </div>
    </form>
  );
};

export default CafeDealsForm;
