
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
import { fetchAreas, fetchCities } from "../../store/areaSlice";
import SearchDropdown from "../../../commancomponet/SearchDropdown/index";
import DateInputs from "../../../commancomponet/DateInput";

const EnquiryForm = ({ data = {}, handleSubmit, isEditMode, className }) => {

    const cities = useSelector((state) => state.areas.cities);

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        // product_master_id: data.pro_mast_id || '',
        name: data.name || "",
        address: data.address || "",
        // details: data.details || "",
        // product_fill: data.product_filling === 1 ? 1 : data.product_filling === 0 ? 0 : "",
        // fill_items: data.product_filling || "",
        // weight: data.product_weight || "",
        // basePrice: data.base_price || "",
        // makingPrice: data.making_price || "",
        // price_scale: data.price_scale || "",
    });

    const dispatch = useDispatch();
    const masterProducts = useSelector((state) => state.products.masterProducts);
    const fillingTypes = useSelector((state) => state.products.fillingTypes);
    const areas = useSelector((state) => state.areas.areas);

    const transformedCities = masterProducts.map((masterproduct) => ({
        label: masterproduct.name,
        option: masterproduct.pro_mast_id,
    }));
    const transformedfillingtype = fillingTypes.map((fillingtype) => ({
        label: fillingtype.name,
        option: fillingtype.filling_types_id,
    }));

    const cityList = cities.map((city) => ({
        label: city.name,
        option: city.cities_id,
    }));

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    useEffect(() => {
        if (data) {
            setValues({
                // product_master_id: data.pro_mast_id || '',
                name: data.name || "",
                address: data.address || ""
            });
        }
    }, []); // Added 'data' as a dependency to update values when data changes

    console.log("master product", values.product_master_id)
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "product_fill") {
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        } else {
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

            {/* Name Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    label={isEditMode ? "Name" : ""}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>


            {/* Address Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Address"
                    value={values.address}
                    onChange={handleChange}
                    name="address"
                    label={isEditMode ? "Address" : ""}
                />
                {errors.address && <p className="text-danger">{errors.address}</p>}
            </div>

            {/* City Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <SearchDropdown
                    name={"city"}
                    placeholder="City"
                    isSearchabel={true}
                    options={cityList}
                    onChange={handleChange}
                    value={values.cafeId}
                />
                {errors.cafeId && <p className="text-danger error_text">{errors.cafeId}</p>}
            </div>


            {/* Cafe Name Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Cafe Name"
                    value={values.cafeName}
                    onChange={handleChange}
                    name="cafeName"
                    label={isEditMode ? "Cafe Name" : ""}
                />
                {errors.cafeName && <p className="text-danger">{errors.cafeName}</p>}
            </div>

            {/* Contact Person Name Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Contact Person Name"
                    value={values.contactName}
                    onChange={handleChange}
                    name="contactName"
                    label={isEditMode ? "Contact Person Name" : ""}
                />
                {errors.contactName && <p className="text-danger">{errors.contactName}</p>}
            </div>

            {/* Contact Person Number Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Contact Person No."
                    value={values.contactNumber}
                    onChange={handleChange}
                    name="contactNumber"
                    type="tel"
                    label={isEditMode ? "Contact Person No." : ""}
                />
                {errors.contactNumber && <p className="text-danger">{errors.contactNumber}</p>}
            </div>

            {/* Owner Name Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Owner Name"
                    value={values.ownerName}
                    onChange={handleChange}
                    name="ownerName"
                    label={isEditMode ? "Owner Name" : ""}
                />
                {errors.ownerName && <p className="text-danger">{errors.ownerName}</p>}
            </div>

            {/* Owner Number Field */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <InputBox
                    placeholder="Owner No."
                    value={values.ownerNumber}
                    onChange={handleChange}
                    name="ownerNumber"
                    type="tel"
                    label={isEditMode ? "Contact Person No." : ""}
                />
                {errors.ownerNumber && <p className="text-danger">{errors.ownerNumber}</p>}
            </div>

            {/* Follow Up Date */}
            <div className={isEditMode ? "" : "col-lg-4 gy-4"}>
                <DateInputs
                    name="followupDate"
                    value={values.followupDate}
                    onChange={handleChange}
                    placeholder="Follow Up Date" />
                <p className="text-danger error_text">{errors.followupDate}</p>
            </div>

            <div className="d-flex justify-content-center pt-4">
                <CommanButton
                    label={"Submit"}
                    onClick={handleFormSubmit}
                    variant="#7B3F0080"
                    className="mb-3 ps-4 pe-4"
                    style={{ borderRadius: "10px" }}
                />
            </div>
        </form>
    );
};

export default EnquiryForm;
