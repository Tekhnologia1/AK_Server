import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import './Appnav.css'
import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'


export const Appnav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon" style={{color:'red'}} >
                <span className="nav-icon-bullet " style={{color:'black'}} ></span>
              </span>
            )}
        {name && name}
      </>
    )
  }
  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <div className='pb-1 ' >
      <Component  as="div" key={index} style={{color:'red'}}>
    {rest.to || rest.href ? (
       <CNavLink {...(rest.to && { as: NavLink })} {...rest} className='nav-text'>
           {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (

          navLink(name, icon, badge, indent)
          
         )}
       </Component>
       </div>
    )
  }
  const navGroup = (item, index) => {
    const { component, name, icon, items, to, ...rest } = item
    const Component = component
    return (
      <Component compact as="div" key={index} toggler={navLink(name, icon)} {...rest} style={{color:'red'}}>
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true),
        )}
      </Component>
      // <></>
    )
  }
  return (
    <CSidebarNav as={SimpleBar} style={{color:'red'}}>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </CSidebarNav>
  )
}
Appnav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}


