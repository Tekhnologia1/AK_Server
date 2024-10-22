import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Using Bootstrap for styling

const InputBox = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const inputStyle = {
    padding: "12px",
    borderRadius: 0,
    borderColor: isHovered ? "#ff7f50" : "#7B3F0080", // Change border color on hover
    backgroundColor: isHovered ? "#f0f0f0" : "white", // Change background color on hover

  };

  return (
    <Form.Group controlId={name} className={className}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
        style={inputStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Form.Group>
  );
};

export default InputBox;
