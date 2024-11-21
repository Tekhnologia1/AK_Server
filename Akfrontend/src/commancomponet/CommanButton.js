import React, { useState } from "react";
import { Button } from "react-bootstrap"; // Using Bootstrap for styling

const CommanButton = React.memo
(({
  label,
  onClick,
  variant = "",
  className,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle = {
    color:'white',
    backgroundColor: isHovered ? "#ff7f50" : " #7B3F00",
    borderColor: isHovered ? "#ff7f50" : "",     // Example hover border color
    ...style, // Apply any additional custom styles passed in
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={className}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Button>
  );
});

export default CommanButton;
