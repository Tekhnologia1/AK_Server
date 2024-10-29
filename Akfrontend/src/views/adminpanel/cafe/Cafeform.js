

import React, { useEffect, useState } from "react";
import CommanButton from "../../../commancomponet/CommanButton";
import SelectBox from "../../../commancomponet/SelectBox";
import InputBox from "../../../commancomponet/InputBox";
import {
  validateCafeForm,
} from "../../validation/Validationall";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { fetchRoutes } from "../../store/routeSlice";
import { fetchAreas, fetchCities } from "../../store/areaSlice";
import { fetchSpecialDeals } from "../../store/cafeSlice";
import { fetchDeals } from "../../store/cafeDealsSlice";
import { fetchCafeDeal1 } from "../../store/cafeDeal1Slice";

const CafeForm = ({ data = {}, handleSubmit, isEditMode, className }) => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.areas.cities);
  const routes = useSelector((state) => state.routes.routes);
  const paymentTerm = useSelector((state) => state.cafes.specialDeals);
  const areas = useSelector((state) => state.areas.areas);
  const deals = useSelector((state) => state.deals.deals);
  const cafeDeal1 = useSelector((state) => state.cafeDeal1.cafeDeal1);


  const [values, setValues] = useState({
    selectedCity: data.selectedCity || "",
    cafeName: data.cafeName || "",
    address: data.address || "",
    area: data.area || "",
    selectedRoute: data.selectedRoute || "",
    selectedDeal: data.selectedDeal || "",
    cafedeal:data.cafedeal||"",
    selectedPaymentTerm: data.selectedPaymentTerm || "",
    contactPerson: data.contactPerson || "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchDeals())
    dispatch(fetchRoutes());
    dispatch(fetchCities());
    dispatch(fetchSpecialDeals());
    dispatch(fetchAreas());
    dispatch(fetchDeals())
    dispatch(fetchCafeDeal1())
  }, []);

  const transformedpaymentterm = paymentTerm.map((paymentterm) => ({
    label: paymentterm.name,
    option: paymentterm.payment_terms_id,
  }));

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));


  console.log("objectczddfssfsdfff",deals)
  const transformeddeals = cafeDeal1.map((deals) => ({
    label: deals.cafe_id,
    option: deals.cafe_deals_id,
  }));


  const transformedarea = areas.map((area) => ({
    label: area.name,
    option: area.areas_id,
  }));


  const transformedRoutes = routes.map((route) => ({
    label: route.route_name,
    option: route.routes_id,
  }));

  const cafesdeals=[
    {
      label: "Yes",
      option: 1,
    },
    {
      label: "No",
      option: 0,
    },
  ];

  useEffect(() => {
    if (data) {
      setValues({
        selectedCity: data.selectedCity || "",
        cafeName: data.cafeName || "",
        address: data.address || "",
        area: data.area || "",
        selectedRoute: data.selectedRoute || "",
        selectedDeal: data.selectedDeal || "",
        cafedeal:data.cafedeal||"",
        selectedPaymentTerm: data.selectedPaymentTerm || "",
        contactPerson: data.contactPerson || "",
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

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   // const validationErrors = validateCafeForm(values);
  //   // if (Object.keys(validationErrors).length === 0) {
  //     console.log(values);
  //     handleSubmit(values);

  //     setValues({
  //       selectedCity: "",
  //       cafeName: "",
  //       address: "",
  //       area: "",
  //       selectedRoute: "",
  //       selectedDeal: "",
  //       cafedeal:"",
  //       selectedPaymentTerm: "",
  //       contactPerson: "",
  //     });
  //   // } else {
  //   //   setErrors(validationErrors);
  //   // }
  // };



  // Import validateCafeForm from your validation file


// In the handleFormSubmit function:
const handleFormSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateCafeForm(values);
  console.log(validationErrors)
  if (Object.keys(validationErrors).length === 0) {
    handleSubmit(values);

    setValues({
      selectedCity: "",
      cafeName: "",
      address: "",
      area: "",
      selectedRoute: "",
      selectedDeal: "",
      cafedeal: "",
      selectedPaymentTerm: "",
      contactPerson: "",
    });
    setErrors({})
  } else {
    setErrors(validationErrors);
  }
};

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <div className="row">
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "Cafe Name" : ""}
            placeholder="Cafe Name"
            value={values.cafeName}
            onChange={handleChange}
            name="cafeName"
          />
          <p className="text-danger">{errors.cafeName}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "Cafe Name" : ""}
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
            name="address"
          />
          <p className="text-danger">{errors.address}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "Area" : ""}
            options={transformedarea}
            value={values.area}
            onChange={handleChange}
            name="area"
            defaultValue="Area"
          />
          <p className="text-danger">{errors.area}</p>
        </div>
      </div>

      <div className="row">
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "City Name" : ""}
            options={transformedCities}
            value={values.selectedCity}
            onChange={handleChange}
            name="selectedCity"
            defaultValue="City"
          />
          <p className="text-danger">{errors.selectedCity}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "Route Name" : ""}
            options={transformedRoutes}
            value={values.selectedRoute}
            onChange={handleChange}
            name="selectedRoute"
            defaultValue="Route"
          />
          <p className="text-danger">{errors.selectedRoute}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "Special Deal" : ""}
            options={cafesdeals} // replace with your deal options
            value={values.selectedDeal}
            onChange={handleChange}
            name="selectedDeal"
            defaultValue="Special Deal"
          />
          <p className="text-danger">{errors.selectedDeal}</p>
        </div>
      </div>

      <div className="row justify-content-center">

      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "Cafe Deal" : ""}
            options={transformeddeals} // replace with your deal options
            value={values.cafedeal}
            onChange={handleChange}
            name="cafedeal"
            defaultValue="Cafe Deal"
          />
          {/* <p className="text-danger">{errors.selectedDeal}</p> */}
        </div>
      
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "Payment Term" : ""}
            options={transformedpaymentterm} // replace with your payment term options
            value={values.selectedPaymentTerm}
            onChange={handleChange}
            name="selectedPaymentTerm"
            defaultValue="Payment Term"
          />
          <p className="text-danger">{errors.selectedPaymentTerm}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "Contact Perso" : ""}
            placeholder="Contact Person"
            value={values.contactPerson}
            onChange={handleChange}
            name="contactPerson"
          />
          <p className="text-danger">{errors.contactPerson}</p>
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

export default CafeForm;
