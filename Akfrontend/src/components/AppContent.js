import React  from 'react'
import { Outlet} from 'react-router-dom'
const AppContent = () => {
  return (
    <div className='pt-0'>
    <Outlet/>
    </div>
    
  )
}
export default React.memo(AppContent)
