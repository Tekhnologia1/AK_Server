// import React, { useState } from "react";
// import { Form, InputGroup } from "react-bootstrap"; // Using Bootstrap for styling
// import { FaCalendarAlt } from "react-icons/fa"; // Importing a calendar icon from react-icons

// const DateInputBox = ({
//   label,
//   value,
//   onChange,
//   name,
//   className,
//   placeholder = "", // Empty placeholder by default
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   // Adjust styles for input and icon when hovered
//   const inputStyle = {
//     padding: "12px",
//     paddingRight: "40px", // Leave space for the icon inside the input
//     borderRadius: "4px",
//     borderColor: isHovered ? "#ff7f50" : "#7B3F0080", // Change border color on hover
//     backgroundColor: isHovered ? "#f0f0f0" : "white", // Change background color on hover
//     position: "relative",
//   };

//   const iconStyle = {
//     position: "absolute",
//     right: "10px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     color: isHovered ? "#ff7f50" : "#7B3F0080", // Change icon color on hover
//     cursor: "pointer", // Make the icon clickable
//   };

//   // Simulate a click on the input when the icon is clicked
//   const handleIconClick = (e) => {
//     const input = document.getElementById(name);
//     if (input) {
//       input.focus(); // Focus the input to trigger the date picker
//     }
//   };

//   return (
//     <Form.Group controlId={name} className={className} style={{ position: "relative" }}>
//       {label && <Form.Label>{label}</Form.Label>}
//       <InputGroup>
//         {/* Date input */}
//         <Form.Control
//           id={name} // Set an ID to target the input
//           type="text" // Changed from "date" to "text" to remove default icon
//           value={value}
//           onChange={onChange}
//           name={name}
//           placeholder={placeholder} // Now customizable
//           className={className}
//           style={inputStyle}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onBlur={(e) => (e.target.type = "text")}  // Switch back to text after selection
//         />
//         {/* Icon inside the input */}
//         <FaCalendarAlt style={iconStyle} onClick={handleIconClick} />
//       </InputGroup>
//     </Form.Group>
//   );
// };

// export default DateInputBox;


import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa"; // Importing the calendar icon

const DateInputBox = ({
  label,
  value,
  onChange,
  name,
  className,
  placeholder = "Select date", // Updated placeholder
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputType, setInputType] = useState("text"); // Track the input type

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Adjust styles for input and icon when hovered
  const inputStyle = {
    padding: "12px",
    paddingRight: "40px", // Leave space for the icon inside the input
    borderRadius: "4px",
    borderColor: isHovered ? "#ff7f50" : "#7B3F0080", // Change border color on hover
    backgroundColor: isHovered ? "#f0f0f0" : "white", // Change background color on hover
    position: "relative",
  };

  const iconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: isHovered ? "#ff7f50" : "#7B3F0080", // Change icon color on hover
    cursor: "pointer", // Make the icon clickable
  };

  // Simulate a click on the input when the icon is clicked
  const handleIconClick = () => {
    setInputType("date"); // Change input type to "date" to show the calendar
    const input = document.getElementById(name);
    if (input) {
      input.focus(); // Focus the input to trigger the date picker
    }
  };

  // Revert back to "text" after the date is selected or input loses focus
  const handleBlur = (e) => {
    if (!e.target.value) {
      setInputType("text");
    }
  };

  return (
    <Form.Group controlId={name} className={className} style={{ position: "relative" }}>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup>
        {/* Date input */}
        <Form.Control
          id={name} // Set an ID to target the input
          type={inputType} // Dynamic input type
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder} // Now customizable
          className={className}
          style={inputStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onBlur={handleBlur} // Switch back to text after selection
        />
        {/* Icon inside the input */}
        <span style={iconStyle} onClick={handleIconClick}>
          <FaCalendarAlt />
        </span>
      </InputGroup>
    </Form.Group>
  );
};

export default DateInputBox;
