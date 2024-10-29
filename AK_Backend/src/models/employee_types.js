// const sql = require("../config/database");

// const tbl_employee_type = {};

// // Create Employee Type
// tbl_employee_type.create = (newEmployeeType, result) => {
//     sql.query("CALL CreateEmployeeType(?, ?, ?, ?)", 
//               [newEmployeeType.name, newEmployeeType.details, newEmployeeType.super_user, newEmployeeType.created_by], 
//               (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         console.log("created employee type: ", { name: newEmployeeType.name });
//         result(null, { message: "Employee Type created successfully!", ...newEmployeeType });
//     });
// };

// // Find Employee Type by ID
// tbl_employee_type.findById = (id, result) => {
//     sql.query("CALL FindEmployeeTypeById(?)", [id], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res[0].length) {
//             console.log("found employee type: ", res[0][0]);
//             result(null, res[0][0]);
//             return;
//         }

//         result({ kind: "not_found" }, null);
//     });
// };

// // Get All Employee Types
// tbl_employee_type.getAll = result => {
//     sql.query("CALL GetAllEmployeeTypes()", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log("employee types: ", res[0]);
//         result(null, res[0]);
//     });
// };

// // Update Employee Type by ID
// tbl_employee_type.updateById = (id, employeeType, result) => {
//     sql.query("CALL UpdateEmployeeTypeById(?, ?, ?, ?, ?)", 
//               [id, employeeType.name, employeeType.details, employeeType.super_user, employeeType.updated_by], 
//               (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("updated employee type: ", { id: id, ...employeeType });
//         result(null, { id: id, ...employeeType });
//     });
// };

// // Delete Employee Type by ID
// tbl_employee_type.remove = (id, result) => {
//     sql.query("CALL DeleteEmployeeTypeById(?)", [id], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("deleted employee type with id: ", id);
//         result(null, res);
//     });
// };

// // Delete All Employee Types
// tbl_employee_type.removeAll = result => {
//     sql.query("CALL DeleteAllEmployeeTypes()", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log(`deleted ${res.affectedRows} employee types`);
//         result(null, res);
//     });
// };


// module.exports = tbl_employee_type;
