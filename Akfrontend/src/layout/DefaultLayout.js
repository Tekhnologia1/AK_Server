import React from 'react'
import AppSidebar from '../components/AppSidebar'
import AppContent from '../components/AppContent'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'


const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-white">
        <AppHeader />
        <div className="body flex-grow-1 bg-white position-relative">
          <AppContent />
        </div>
        {/* <AppFooter/> */}
      </div>
    </div>
  )
}

export default DefaultLayout

