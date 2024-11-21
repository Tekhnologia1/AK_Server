import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'; // Importing a search icon

const SearchBox = React.memo(({ placeholder, value, onChange, onSearch }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const inputStyle = {
    boxShadow: isHovered ? '0 0 5px #EAA44D' : 'none', // Show box shadow on hover
    borderColor: '#EAA44D', // Show border color on hover
    borderRadius: '4px 0px 0px 4px',
  };

  const inputStyle1 = {
    color: 'white',
    backgroundColor: '#EAA44D',
    boxShadow: isHovered ? '0 0 5px #EAA44D' : 'none', // Show box shadow on hover
    borderColor: isHovered ? '#EAA44D' : 'transparent', // Show border color on hover
    borderRadius: '0px 4px 4px 0px',
  };

  return (
    <Form className="d-flex">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder={placeholder || 'Search...'}  
          value={value}
          onChange={onChange}
          aria-label="Search"
          className="mr-2 p-2 ps-3"
          style={inputStyle}
          onMouseEnter={handleMouseEnter} // Trigger hover styles
          onMouseLeave={handleMouseLeave}
        />
        <Button
          variant="outline-primary"
          onClick={onSearch}
          style={inputStyle1}
          onMouseEnter={handleMouseEnter} // Trigger hover styles
          onMouseLeave={handleMouseLeave}
        >
          <Search />
        </Button>
      </InputGroup>
    </Form>
  );
});

export default SearchBox;
