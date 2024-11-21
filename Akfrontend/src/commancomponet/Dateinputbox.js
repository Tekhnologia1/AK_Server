import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
const DateInputBox = React.memo(({label,value,onChange,name,className,placeholder = "Select date",}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [inputType, setInputType] = useState("text");
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const inputStyle = {
      padding: "12px",
      paddingRight: "40px",
      borderRadius: "4px",
      borderColor: isHovered ? "#ff7f50" : "#7B3F0080",
      backgroundColor: isHovered ? "#f0f0f0" : "white",
      position: "relative",
    };
    const iconStyle = {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      color: isHovered ? "#ff7f50" : "#7B3F0080",
      cursor: "pointer",
    };
    const handleIconClick = () => {
      setInputType("date");
      const input = document.getElementById(name);
      if (input) {
        input.focus();
      }
    };

    const handleBlur = (e) => {
      if (!e.target.value) {
        setInputType("text");
      }
    };
    return (
      <Form.Group
        controlId={name}
        className={className}
        style={{ position: "relative" }}
      >
        {label && <Form.Label>{label}</Form.Label>}
        <InputGroup>
          <Form.Control
            id={name}
            type={inputType}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            className={className}
            style={inputStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onBlur={handleBlur}
          />
          <span style={iconStyle} onClick={handleIconClick}>
            <FaCalendarAlt />
          </span>
        </InputGroup>
      </Form.Group>
    );
  }
);

export default DateInputBox;
