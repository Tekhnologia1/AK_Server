import React, { useEffect, useState } from "react";
import SelectBox from "../../../commancomponet/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import InputBox from "../../../commancomponet/InputBox";
import CommanButton from "../../../commancomponet/CommanButton";
import { fetchCities } from "../../store/areaSlice";
import MultiSelectComponent from "../../../commancomponet/MultiSelect";
import { validateRouteForm } from "../../validation/Validationall";
import { fetchAreas } from "../../store/areaSlice";
import "./route.css";

const RouteForm = ({ data = {}, handleSubmit, isEditMode, className }) => {
  const area = useSelector((state) => state.areas.areas);

  const transformedarea = area.map((area) => ({
    label: area.name,
    option: area.areas_id,
  }));
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: data.name || "",
    details: data.route_details || "",
    startPoint: data.startPoint || "Ak",
    endPoint: data.route_end_point || "",
    city: data.cities_id || "",
  });

  const dispatch = useDispatch();
  const masterProducts = useSelector((state) => state.products.masterProducts);
  const fillingTypes = useSelector((state) => state.products.fillingTypes);

  // const cities = useSelector((state) => state.areas.cities);
  const cities = useSelector((state) => state.areas.cities);

  console.log("object", cities);

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));

  console.log("transformedCities", cities);

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchAreas());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const areasIdArray = data.areas_id
        ? data.areas_id
            .replace(/[\[\]]/g, "") // Remove square brackets
            .split(",") // Split by comma
            .map(Number)
        : []; // Converts "12" to [12]
      const result = data.areas_id
        ? transformedarea.filter((item) => {
            return areasIdArray.includes(item.option);
          })
        : [];

      setValues({
        name: data.route_name || "",
        details: data.route_details || "",
        area: result,
        startPoint: data.route_start_point || "Ak",
        endPoint: data.route_end_point || "",
        city: data.cities_id || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...values,
      [name]: value,
    };

    if (name === "basePrice" || name === "weight") {
      updatedData.makingPrice = updatedData.basePrice * updatedData.weight;
    }

    setValues(updatedData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // setValues({...values, area: result.map(item => item.option)})
    const validationErrors = validateRouteForm(values);
    if (Object.keys(validationErrors).length === 0) {
      // const area = result.map(item => item.option);
      // handleSubmit({...values, area: values.area.map(item => item.option)});
      handleSubmit(values);
      setValues({
        name: data.name || "",
        details: data.route_details || "",
        // area: data.areas_id || [],
        area: [],
        // area: data.areas_id
        //   ? Array.isArray(data.areas_id)
        //     ? data.areas_id
        //     : JSON.parse(data.areas_id)
        //   : [],
        startPoint: data.startPoint || "",
        endPoint: data.route_end_point || "",
        city: data.cities_id || "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={className}>
      {/* Route Name Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          placeholder="Route Name"
          value={values.name}
          onChange={handleChange}
          name="name"
          label={isEditMode ? "Route Name" : ""}
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}
      </div>

      {/* Route Details Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          label={isEditMode ? "Route Details/Address" : ""}
          placeholder="Route Details/Address"
          value={values.details}
          onChange={handleChange}
          name="details"
        />
        {errors.details && <p className="text-danger">{errors.details}</p>}
      </div>

      {/* Area Covered Field */}
      <div className={isEditMode ? "update" : "col-lg-4 gy-4"}>
        <MultiSelectComponent
          label={isEditMode ? "Area Covered" : ""}
          // value={Array.isArray(values.area) ? values.area : [values.area]}
          value={values.area}
          filterPlaceholder="Select Area"
          options={transformedarea}
          search={true}
          name="area"
          onChange={handleChange}
          placeholder={"Area Covered"}
          style={{
            zIndex: "1100 !important",
          }}
        />
        {errors.area && <p className="text-danger">{errors.area}</p>}
      </div>

      {/* Start Point Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <InputBox
          label={isEditMode ? "Route Start Point" : ""}
          placeholder="Route Start Point"
          value={values.startPoint}
          onChange={handleChange}
          name="startPoint"
        />
        {errors.startPoint && (
          <p className="text-danger">{errors.startPoint}</p>
        )}
      </div>

      {/* End Point Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
          label={isEditMode ? "Route End Point" : ""}
          options={transformedarea}
          value={values.endPoint}
          onChange={handleChange}
          name="endPoint"
          defaultValue={"Route End Point"}
        />
        {errors.endPoint && <p className="text-danger">{errors.endPoint}</p>}
      </div>

      {/* City Field */}
      <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
        <SelectBox
          label={isEditMode ? "City" : ""}
          options={transformedCities}
          value={values.city}
          onChange={handleChange}
          name="city"
          defaultValue={isEditMode ? "" : "City"}
        />
        {errors.city && <p className="text-danger">{errors.city}</p>}
      </div>

      <div className="d-flex justify-content-center pt-4">
        <CommanButton
          label={isEditMode ? "Update" : "Create"}
          onClick={handleFormSubmit}
          variant="#7B3F0080"
          className="mb-3 ps-4 pe-4"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </form>
  );
};

export default RouteForm;









