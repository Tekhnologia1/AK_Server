import React, { useState, useEffect } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import SelectBox from "../../commancomponet/SelectBox";

function EmployeeForm({ employeeTypeOptions, formData1 }) {

  const [formData, setFormData] = useState({
    employeeName: "",
    username: "",
    password: "",
    email: "",
    contactNo: "",
    salary: "",
    enrollmentDate: "",
    incrementDate: "",
    incrementAmount: "",
    employee_type: "",  
  });

  const handleSubmit=()=>{
    console.log(formData)
  }
console.log("incrementDate", formData1.incrementDate)
  useEffect(() => {
    setFormData({
      employeeName: formData1.employeeName || "",
      username: formData1.username || "",
      password: formData1.password || "",
      email: formData1.email || "",
      contactNo: formData1.contactNo || "",
      salary: formData1.salary || "",
      enrollmentDate: formData1.enrollmentDate ? new Date(formData1.enrollmentDate).toISOString().split('T')[0] : '',
      incrementDate: formData1.incrementDate ? new Date(formData1.incrementDate).toISOString().split('T')[0] : '',
      incrementAmount: formData1.incrementAmount || "",
      employee_type: formData1.employee_type || "1",  // Default to "Permanent"
    });
  }, [formData1]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputBox
          label="Employee Name"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          placeholder="Enter employee name"
        />
        <InputBox
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
        <InputBox
          label="Password"
          name="password"
          type="text"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <InputBox
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <InputBox
          label="Contact Number"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          placeholder="Enter contact number"
        />
        <InputBox
          label="Salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Enter salary"
        />
        <InputBox
          label="Enrollment Date"
          name="enrollmentDate"
          type="date"
          value={formData.enrollmentDate}
          onChange={handleChange}
        />
        <InputBox
          label="Increment Date"
          name="incrementDate"
          type="date"
          value={formData.incrementDate}
          onChange={handleChange}
        />
        <InputBox
          label="Increment Amount"
          name="incrementAmount"
          value={formData.incrementAmount}
          onChange={handleChange}
          placeholder="Enter increment amount"
        />
        <SelectBox
          label="Employee Type"
          options={[
            { label: "Select Employee Type", value: "" }, 
            ...employeeTypeOptions,
          ]}
          value={formData.employee_type}
          onChange={handleChange}
          name="employee_type"
          defaultValue={"Employee_type"}
        />
        <div className="d-flex justify-content-center pt-3">
          <CommanButton
            label="Update"
            variant="#7B3F0080"
            className="mb-3 ps-4 pe-4"
            style={{ borderRadius: "5px" }}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;