import React, {useState} from 'react'
import { Accordion, NavItem, NavLink } from 'reactstrap'
import { faBox, faCartShopping, faTableCellsLarge, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AccordionNavItem from './AccordionNavItem'
import { Link } from 'react-router-dom'

function CollapseNavItems({dropdownToggle}) {
    const [open, setOpen] = useState("")
    const toggle = (id) => {
        if (open === id) {
          setOpen("");
        } else {
          setOpen(id);
        }
    };

    const routes = [
        {
            path: "/dashboard",
            text: "Dashboard",
            icon: faTableCellsLarge,
            children: []
        },
        {
            text: "Productos",
            icon: faBox,
            children: [ 
                {
                    path: "/dashboard/Add-Product",
                    text: "Agregar Producto"
                },
                {
                    path: "/dashboard/Product-List",
                    text: "Lista de productos"
                },
            ]
        },
        {
            text: "Ventas",
            icon: faCartShopping,
            children: [ 
                {
                    path: "/dashboard/New-Sale",
                    text: "Nueva Venta"
                },
                {
                    path: "/dashboard/Sales-List",
                    text: "Lista de Ventas"
                },
            ]
        },
        {
            text: "Clientes",
            icon: faUser,
            children: [
                {
                    path: "/dashboard/New-Client",
                    text: "Nuevo Cliente",
                },
                {
                    path: "/dashboard/Client-List",
                    text: "Lista de Clietes",
                }
            ]
        },
        {
            text: "Administrar usuarios",
            icon: faUsers,
            children: [
                {
                    path: "/dashboard/New User",
                    text: "Nuevo usuario"
                },
                {
                    path: "/dashboard/UserList",
                    text: "Lista de usuarios"
                }
            ]
        }
    ]

    return (
        routes.map((route, index) => (
            route.children.length ? (
                <NavItem className='pointer' key={index}> 
                    <Accordion open={open} toggle={toggle}>
                        <AccordionNavItem id={index.toString()} items={route.children} icon={route.icon} text={route.text} dropdownToggle={dropdownToggle}/> 
                    </Accordion>
                </NavItem>
            ) :
            <NavItem key={index} className='sidebar-item'>
                <NavLink tag={Link} to={route.path} onClick={dropdownToggle}>
                    <FontAwesomeIcon icon={route.icon} size='2x' color='#0d6efd' />
                    <span className='fw-bold text-black ms-3'>{route.text}</span>
                </NavLink>
            </NavItem>
        ))
    )
}

export default CollapseNavItems