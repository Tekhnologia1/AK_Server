import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEllipsisV } from 'react-icons/fa'; // Importing icons from react-icons

const Tablecom = React.memo(({ columns, data, onEdit, onDelete, onMoreActions }) => {
  return (
    <Table responsive="sm">
      <thead className="bg-dark">
        <tr className="bg-dark text-center"> {/* Add text-center to center the heading */}
          {columns.map((column, index) => (
            <th
              key={index}
              style={{ backgroundColor: '#F2ECE6', color: '#7B3F00' }}
              className="text-center" // Center the headings
            >
              <div className="p-1">{column}</div>
            </th>
          ))}
          <th style={{ backgroundColor: '#F2ECE6', color: '#7B3F00' }} className="text-center">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-center"> {/* Center the content */}
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="text-center"> {/* Center the individual cells */}
                {cell}
              </td>
            ))}
            <td>
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={() => onEdit(rowIndex)} // Handle edit action
              >
                <FaEdit /> {/* Edit icon */}
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="me-lg-5"
                onClick={() => onDelete(rowIndex)} // Handle delete action
              >
                <FaTrash /> {/* Delete icon */}
              </Button>

              <Button
                size="sm"
                style={{ background: 'white', border: 'none', color: 'black' }}
                onClick={() => onMoreActions(rowIndex)} // Handle more actions with ellipsis
              >
                <FaEllipsisV />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default Tablecom;
