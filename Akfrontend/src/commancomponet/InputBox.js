import React, { useState } from "react";
import { Form } from "react-bootstrap";
const InputBox = React.memo(({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const inputStyle = {
    padding: "12px",
    borderRadius: "4px",
    borderColor: isHovered ? "#ff7f50" : "#7B3F0080", 
    backgroundColor: isHovered ? "#f0f0f0" : "white", 
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
        {...props}
      />
    </Form.Group>
  );
});

export default InputBox;
