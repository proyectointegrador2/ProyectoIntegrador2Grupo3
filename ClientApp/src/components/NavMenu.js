import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useAuthentication } from './Context/AuthenticationContext';
import AdminDropdownBar from './Header/AdminDropdownBar';

function NavMenu () {
  const [collapsed, setCollapsed] = useState(true)
  const { isLoggedIn, role, handleLogout } = useAuthentication()

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        {isLoggedIn && role === "admin" &&<AdminDropdownBar />}
        <NavbarBrand tag={Link} to="/">SistemaDeInventarioDeVentaDeVehiculos</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
            </NavItem>
            <NavItem>
              {
                !isLoggedIn ? 
                <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>:
                <NavLink className="text-dark pointer" onClick={handleLogout}>Cerrar Sesión</NavLink>
              }
            </NavItem>
            <NavItem>
              {isLoggedIn && role === "admin" && <NavLink tag={Link} className="text-dark" to="/dashboard"><span className='text-success fw-bold'>Ir al Dashboard</span></NavLink>}
            </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/ProductDetails">ProductDetails</NavLink>
                        </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default NavMenu