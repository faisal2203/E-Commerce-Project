import React, { useState } from 'react'
import "../layout.css"
import { Link, useLocation } from 'react-router-dom';


const Layout = ({ children }) => {

  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false)
  const [userName, setUserName] = useState('User')

  const userMenu = [
    {
      name: 'Dashboard',
      path: '/',
      icon: 'ri-home-line'
    },
    {
      name: 'Add Products',
      path: '/add-products',
      icon: 'ri-file-list-line'
    },
    {
      name: 'Platform Listing',
      path: '/platform-listing',
      icon: 'ri-hospital-line'
    },
  ]

  return (
    <div className='main'>
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-container d-flex justify-content-between align-items-center">
            <div className="sidebar-header">
              <h2>M2A</h2>
            </div>
            <div className="sidebar-toggle ">
              {collapsed ? <i className="ri-menu-2-line header-action-icon" onClick={() => setCollapsed(false)}></i> : <i className="ri-close-line header-action-icon" onClick={() => setCollapsed(true)}></i>}
            </div>
          </div>
          <div className="menu">
            {
              userMenu.map((menu) => {
                const isActive = location.pathname === menu.path
                return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              })
            }
          </div>
        </div>
        <div className="content">
          <div className="header">
            <p> Welcome, <span className='userName'>{userName}</span></p>
            <div className="loggout-button">
              <button className='btn btn-danger'>Logout</button>
            </div>
          </div>
          <hr className='horizontalLine' />
          <div className="body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
