// UpdateEmployeeModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import InputBox from "./InputBox";
import DateInputBox from "./Dateinputbox";
import SelectBox from "./Searchbox";

function UpdateEmployeeModal({
  show,
  handleClose,
  formData,
  handleChange,
  handleUpdate,
  employeeTypeOptions,
}) {
  return (

        <div className="row">
          <div className="col-12 mb-3">
            <InputBox
              placeholder="Employee Name"
              value={formData.employeeName}
              onChange={handleChange}
              name="employeeName"
            />
          </div>
          <div className="col-12 mb-3">
            <InputBox
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="col-12 mb-3">
            <SelectBox
              options={employeeTypeOptions}
              value={formData.employee_type}
              onChange={handleChange}
              name="employee_type"
              defaultValue="Employee Type"
            />
          </div>
          <div className="col-12 mb-3">
            <InputBox
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="col-12 mb-3">
            <InputBox
              placeholder="Contact No"
              value={formData.contactNo}
              onChange={handleChange}
              name="contactNo"
            />
          </div>
          <div className="col-12 mb-3">
            <DateInputBox
              value={formData.enrollmentDate}
              onChange={handleChange}
              placeholder="Enrollment Date"
              name="enrollmentDate"
              className="my-date-input"
            />
          </div>
        </div>
     
  );
}

export default UpdateEmployeeModal;
