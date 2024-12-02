import React, { useState } from "react";

const Note = ({ value, onChange, placeholder, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const textareaStyle = {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid",
    borderColor: isHovered ? " #7B3F00" : "#7B3F0080", 
    backgroundColor: isHovered ? "#f0f0f0" : "#fafafa", // Hover effect for background
    color: "#333",
    fontSize: "14px",
    transition: "all 0.3s ease", // Smooth transition for hover effects
    // boxShadow: isHovered ? "0 2px 6px rgba(0, 0, 0, 0.15)" : "0 1px 3px rgba(0, 0, 0, 0.1)", // Hover effect for shadow

    margin: "10px 0", // Space between elements
    lineHeight: "1.6", // Improve readability for more content
    width: "100%", // Full width
    resize: "vertical", // Allow vertical resizing only
  };

  return (
    <textarea rows={1}
      className={`note-textarea ${className}`}
      style={textareaStyle}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Note;
