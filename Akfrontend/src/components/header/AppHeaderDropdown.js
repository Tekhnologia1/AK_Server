// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import {
//   CAvatar,
//   CDropdown,
//   CDropdownDivider,
//   CDropdownHeader,
//   CDropdownItem,
//   CDropdownMenu,
//   CDropdownToggle,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import avatar8 from './../../assets/images/avatars/8.jpg'

// const AppHeaderDropdown = () => {
//   const navigate = useNavigate();
//   const userName = localStorage.getItem('userName');
//   const firstLetter = userName ? userName.charAt(0).toUpperCase() : ''; // Get the first letter of the username

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from local storage
//     navigate('/login'); // Redirect to login page
//   };

//   // Inline styles for the circular avatar container and letter
//   const avatarContainerStyles = {
//     display: 'inline-block',
//     position: 'relative',
//     width: '35px', // Adjust size as needed
//     height: '35px', // Adjust size as needed
//     borderRadius: '50%',
//     backgroundColor: '#007bff', // Change background color as needed
//     color: '#fff', // Change text color as needed
//     textAlign: 'center',
//   };

//   const avatarLetterStyles = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     fontSize: '18px', // Adjust font size as needed
//     fontWeight: 'bold',
//   };

//   return (
//     <CDropdown variant="nav-item">
//       <CDropdownToggle placement="bottom-end" className="py pe-0" caret={false}>
//         <div style={avatarContainerStyles}>
//           <div style={avatarLetterStyles}>{firstLetter}</div>
//         </div>
//       </CDropdownToggle>
//       <CDropdownMenu className="pt-0" placement="bottom-end">
//         <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
//         <CDropdownItem href="#">
//           <CIcon icon={cilUser} className="me-2" />
//          {userName}
//         </CDropdownItem>
//         <CDropdownDivider />
//         <CDropdownItem as="button" onClick={handleLogout}>
//           <CIcon icon={cilLockLocked} className="me-2" />
//           Logout
//         </CDropdownItem>
//       </CDropdownMenu>
//     </CDropdown>
//   )
// }

// export default AppHeaderDropdown


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { PersonFill, LockFill } from 'react-bootstrap-icons' // Import Bootstrap icons
import LogoutConfirmation from '../../views/pages/logout/LogoutConfirmation'

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : ''; // Get the first letter of the username
  const [show, setShow] = useState(false)
  const handleLogout = () => {
    setShow(true)
  };

  // Inline styles for the circular avatar container and letter
  const avatarContainerStyles = {
    display: 'inline-block',
    position: 'relative',
    width: '35px', // Adjust size as needed
    height: '35px', // Adjust size as needed
    borderRadius: '50%',
    backgroundColor: '#007bff', // Change background color as needed
    color: '#fff', // Change text color as needed
    textAlign: 'center',
  };

  const avatarLetterStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '18px', // Adjust font size as needed
    fontWeight: 'bold',
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py pe-0" caret={false}>
        <div style={avatarContainerStyles}>
          <div style={avatarLetterStyles}>{firstLetter}</div>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <PersonFill className="me-2" /> 
          {/* {userName} */}  AK Golden Crust Foods
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem as="button" onClick={handleLogout}>
          <LockFill className="me-2" /> {/* Replaced CIcon with LockFill */}
          Logout
        </CDropdownItem>
      </CDropdownMenu>
      <LogoutConfirmation show={show} setShow={setShow}/>
    </CDropdown>
  )
}

export default AppHeaderDropdown
