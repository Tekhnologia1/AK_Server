import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons'; // Importing an icon
import './SelectBox.css'; // Import a custom CSS file

const SelectBox = ({ label, options, value, onChange, name, defaultValue }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const selectStyle = {
    padding: '12px',
    borderRadius: 0,
    borderColor: isHovered ? '#ff7f50' : '#7B3F0080', // Change border color on hover
    backgroundColor: isHovered ? '#f0f0f0' : 'white', // Change background color on hover
    appearance: 'none', // Hide the default dropdown arrow
    position: 'relative',
    zIndex: 1,
  };

  return (
    <Form.Group controlId={name} className="select-box-group">
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup className="select-box-input-group">
        <Form.Control
          as="select"
          value={value || defaultValue}
          onChange={onChange}
          name={name}
          style={selectStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="select-box"
        >
          <option value="">{defaultValue}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
        <ChevronDown className="select-icon" /> {/* Position the icon with CSS */}
      </InputGroup>
    </Form.Group>
  );
};

export default SelectBox;