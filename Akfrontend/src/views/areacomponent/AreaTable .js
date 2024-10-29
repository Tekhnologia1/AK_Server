// src/components/AreaTable.js
import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";

const AreaTable = ({ areas, onUpdate, onDelete }) => {
  const columns = ["SR.NO.", "Area Name", "City Name", "Status"];

  return (
    <Table responsive="sm">
      <thead>
        <tr className="text-center">
          {columns.map((column, index) => (
            <th
              key={index}
              style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {areas.map((item, rowIndex) => (
          <tr key={item.id} className="text-center">
            <td>{rowIndex + 1}</td>
            <td>{item.name}</td>
            <td>{item.cities_name}</td>
            <td>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-2"
                  onClick={() => onUpdate(item)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="me-2"
                  onClick={() => onDelete(item.areas_id)}
                >
                  <FaTrash />
                </Button>
                <Button
                  size="sm"
                  style={{
                    background: "white",
                    border: "none",
                    color: "black",
                  }}
                >
                  <FaEllipsisV />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AreaTable;
