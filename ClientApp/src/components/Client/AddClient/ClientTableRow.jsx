import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

function ClientTableRow({id, name, lastName, email, address, phone}) {
  return (
    <tr>
        <th scope='row'>{id}</th>
        <td>{name} {lastName}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>
            <UncontrolledDropdown>
                <DropdownToggle caret outline color='primary'>Acción</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <Link to={`dashboard/Edit-Client/${id}`} className='me-1 text-black text-decoration-none'>
                            <FontAwesomeIcon icon={faPenToSquare} color='#0d6efd' />
                            <span className='ms-1'>Editar</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <FontAwesomeIcon icon={faTrash} color='crimson' />
                        <span className='ms-1'>Eliminar</span>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </td>
    </tr>
  )
}

export default ClientTableRow