import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeTypes } from "../../store/employeeSlice";
import { validateEmployeeData } from "../../validation/Validationall";
import CommanButton from "../../../commancomponet/CommanButton";
import InputBox from "../../../commancomponet/InputBox";
import SelectBox from "../../../commancomponet/SelectBox";
import DateInputs from "../../../commancomponet/DateInput";

function EmployeeForm({ data = {}, handleSubmit, isEditMode, className }) {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        employeeName: data.employeeName || "",
        username: data.username || "",
        password: data.password || "",
        email: data.email || "",
        contactNo: data.cell_number || "",
        salary: data.salary || "",
        enrollmentDate: data.enrollment_datetime || null,
        incrementDate: data.increament_datetime || null,
        incrementAmount: data.increament_amount || "",
        employee_type: data.employee_type || "",
    });

    console.log("data in props",data)
    const employeeType = useSelector((state) => state.employees.employeeTypes);
    const dispatch = useDispatch();

    const transformedpaymentterm = employeeType.map((employeeType) => ({
        label: employeeType.name,
        option: employeeType.employee_type_id,
    }));

    useEffect(() => {
        dispatch(fetchEmployeeTypes());
    }, [])

    useEffect(() => {
        setValues({
            employeeName: data.employeeName || "",
            username: data.username || "",
            password: data.password || "",
            email: data.email || "",
            contactNo: data.contactNo || "",
            salary: data.salary || "",
            enrollmentDate: data.enrollmentDate,
            incrementDate: data.incrementDate,
            incrementAmount: data.incrementAmount || "",
            employee_type: data.employee_type || "",  // Default to "Permanent"
        });
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async(e) => {
        e.preventDefault();

        const validationErrors = validateEmployeeData(values);
        if (Object.keys(validationErrors).length === 0) {

            const response = await handleSubmit(values);

            if (response.success) {
                // If submission is successful, reset the form values
                setValues({
                    employeeName: "",
                    username: "",
                    password: "",
                    email: "",
                    contactNo: "",
                    salary: "",
                    enrollmentDate: null,
                    incrementDate: null,
                    incrementAmount: "",
                    employee_type: "",
                });
                setErrors({});
            } else {
                // Handle failure case if needed
                // For example, you could display a message or log an error
                // console.error("Form submission failed:", response.error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    console.log("set form values ",values)

    return (
        <form className={className} onSubmit={handleFormSubmit}>
            <div className="row">
                {/* Employee Name */}
                <div className={isEditMode ? "mb-4" : "col-lg-4 gy-4 mb-2 mb-1"}>
                    <InputBox
                        placeholder="Employee Name"
                        value={values.employeeName}
                        onChange={handleChange}
                        name="employeeName"
                    />
                    <p className="text-danger error_text">{errors.employeeName}</p>
                </div>

                {/* Employee Username */}
                <div className={isEditMode ? "mb-4" : "col-lg-4 gy-4 mb-2"}>
                    <InputBox
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        name="username"
                    />
                    <p className="text-danger error_text">{errors.username}</p>
                </div>

                {/* Employee Password */}
                <div className={isEditMode ? "mb-4" : "col-lg-4 gy-4 mb-2"}>
                    <InputBox
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        type={isEditMode ? "password" : "text"}
                    />
                    <p className="text-danger error_text">{errors.password}</p>
                </div>

                {/* Employee Type */}
                <div className={isEditMode ? "mb-4" : "col-lg-4 gy-4 mb-2"}>
                    <SelectBox
                        options={transformedpaymentterm}
                        value={values.employee_type}
                        onChange={handleChange}
                        name="employee_type"
                        defaultValue="Employee Type"
                    />
                    <p className="text-danger error_text">{errors.employee_type}</p>
                </div>

                {/* Employee Email */}
                <div className={isEditMode ? "mb-4" : "col-lg-4 gy-4 mb-2"}>
                    <InputBox
                        placeholder="E-mail"
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                    />
                    <p className="text-danger error_text">{errors.email}</p>
                </div>

                {/* Employee Contact */}
                <div className={isEditMode ? "mb-4" : "col-lg-4 gy-4 mb-2"}>
                    <InputBox
                        placeholder="Contact No"
                        value={values.contactNo}
                        onChange={handleChange}
                        name="contactNo"
                    />
                    <p className="text-danger error_text">{errors.contactNo}</p>
                </div>

                {/* Employee Salary */}
                <div className={isEditMode ? "mb-4" : "col-lg-3 gy-4 mb-2"}>
                    <InputBox
                        placeholder="Salary"
                        value={values.salary}
                        onChange={handleChange}
                        name="salary"
                    />
                    <p className="text-danger error_text">{errors.salary}</p>
                </div>

                {/* Employee Enrolment Date */}
                <div className={isEditMode ? "mb-4" : "col-lg-3 gy-4 mb-2"}>
                    <DateInputs
                        name="enrollmentDate"
                        value={values.enrollmentDate}
                        onChange={handleChange}
                        placeholder="Enrollment Date" />
                    <p className="text-danger error_text">{errors.enrollmentDate}</p>
                </div>

                {/* Employee Increment Date */}
                <div className={isEditMode ? "mb-4" : "col-lg-3 gy-4 mb-2"}>
                    <DateInputs
                        name="incrementDate"
                        value={values.incrementDate}
                        onChange={handleChange}
                        placeholder="Increament Date" />
                    <p className="text-danger error_text">{errors.incrementDate}</p>
                </div>

                {/* Employee Increment Amount */}
                <div className={isEditMode ? "mb-4" : "col-lg-3 gy-4 mb-2"}>
                    <InputBox
                        placeholder="Increment Amount"
                        value={values.incrementAmount}
                        onChange={handleChange}
                        name="incrementAmount"
                    />
                    <p className="text-danger error_text">{errors.incrementAmount}</p>
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
    )
}

export default EmployeeForm;