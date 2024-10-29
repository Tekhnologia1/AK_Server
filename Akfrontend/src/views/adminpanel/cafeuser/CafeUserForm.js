import React, { useEffect, useState } from "react";
import CommanButton from "../../../commancomponet/CommanButton";
import SelectBox from "../../../commancomponet/SelectBox";
import InputBox from "../../../commancomponet/InputBox";
// import { validateCafeForm, validateUserForm } from "../../validation/Validationall";
import { useSelector, useDispatch } from "react-redux";
import { fetchCafes} from "../../store/cafeSlice";
import { fetchUsertype } from "../../store/cafeuserSlice";
import { validateCafeUserForm } from "../../validation/Validationall";

const CafeUserForm = ({ data = {}, handleSubmit, isEditMode, className }) => {
  const dispatch = useDispatch();
  const cafe = useSelector((state) => state.cafes.cafes);
  const { usertype, status, error } = useSelector((state) => state.cafeusers);


  const [values, setValues] = useState({
    cafe: data.cafe || "",
    name: data.name || "",
    userName: data.userName || "",
    password: data.password || "",
    userType: data.userType || "",
    email: data.email || "",
    contactNo: data.contactNo || "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchCafes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsertype());
  }, [dispatch]);


  useEffect(() => {
    if (data) {
      setValues({
        cafe: data.cafe || "",
        name: data.name || "",
        userName: data.userName || "",
        password: data.password || "",
        userType: data.userType || "",
        email: data.email || "",
        contactNo: data.contactNo || "",
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
  //   console.log("object,",values)
  //   const validationErrors = validateUserForm(values);
  //   if (Object.keys(validationErrors).length === 0) {

  //   console.log("object,",values)
  //     handleSubmit(values);
  //     setValues({
  //       cafe: "",
  //       name: "",
  //       userName: "",
  //       password: "",
  //       userType: "",
  //       email: "",
  //       contactNo: "",
  //     });
  //  } else {
  //     setErrors(validationErrors);
  //   } 
  // };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form values before validation:", values);
    const validationErrors = validateCafeUserForm(values);
    if (Object.keys(validationErrors).length == 0) {
      console.log("Submitting:", values);
      handleSubmit(values);
   
      setValues({
        cafe: "",
        name: "",
        userName: "",
        password: "",
        userType: "",
        email: "",
        contactNo: "",
      });
      setErrors({})
    } else {
      setErrors(validationErrors);
    }
  };




console.log("cafe",cafe)
// console.log("cafe",usertype)

  const transformedcafe = cafe.map((cafe) => ({
    label: cafe.name,
    option: cafe.cafe_id,
  }));

const transUserType =usertype.map((usertype) => ({
  label: usertype.name,
  option: usertype.user_type_id,
}));


  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <div className="row">
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "Cafe" : ""}
            options={transformedcafe}
            value={values.cafe}
            onChange={handleChange}
            name="cafe"
            defaultValue="Cafe"
          />
          <p className="text-danger">{errors.cafe}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "Name" : ""}
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
          <p className="text-danger">{errors.name}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "User Name" : ""}
            placeholder="User Name"
            value={values.userName}
            onChange={handleChange}
            name="userName"
          />
          <p className="text-danger">{errors.userName}</p>
        </div>
      </div>

      <div className="row">
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "Password" : ""}
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            name="password"
          />
          <p className="text-danger">{errors.password}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <SelectBox
            label={isEditMode ? "User Type" : ""}
            options={transUserType}
            value={values.userType}
            onChange={handleChange}
            name="userType"
            defaultValue="User Type"
          />
          <p className="text-danger">{errors.userType}</p>
        </div>

        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "E-mail" : ""}
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
            name="email"
          />
          <p className="text-danger">{errors.email}</p>
        </div>
      </div>

      <div className="row">
        <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
          <InputBox
            label={isEditMode ? "Contact No" : ""}
            placeholder="Contact No"
            value={values.contactNo}
            onChange={handleChange}
            name="contactNo"
          />
          <p className="text-danger">{errors.contactNo}</p>
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

export default CafeUserForm;
