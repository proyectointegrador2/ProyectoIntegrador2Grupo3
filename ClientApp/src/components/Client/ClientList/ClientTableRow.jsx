import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { deleteClient } from '../../../helpers/clientHelpers'
import ModalDelete from '../../ModalDelete/ModalDelete'
import { useAlert } from '../../Context/AlertContext'

function ClientTableRow({ id, name, lastName, email, address, phone }) {
    const [modal, setModal] = useState(false)
    const { showAlert } = useAlert()
    const navigate = useNavigate()

    const toggle = () =>  setModal(!modal)

    const handleDelete = async() => {
        await deleteClient(id)
            .then(data => {
                if(data.success){
                    navigate(0) //refresh page
                }else{
                    showAlert("danger", data.message)
                }
            })
            .catch(err => {
                showAlert("danger", err.message)
            })
            .finally(() => {
                setModal(false)
            })
    }

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
                            <Link to={`/dashboard/Edit-Client/${id}`} replace className='me-1 text-black text-decoration-none'>
                                <FontAwesomeIcon icon={faPenToSquare} color='#0d6efd' />
                                <span className='ms-1'>Editar</span>
                            </Link>
                        </DropdownItem>
                        <DropdownItem onClick={toggle}>
                            <FontAwesomeIcon icon={faTrash} color='crimson' />
                            <span className='ms-1'>Eliminar</span>
                            <ModalDelete modal={modal} toggle={toggle} tableName="Cliente" fullName={`${name} ${lastName}`} handleDelete={handleDelete} />
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}

export default ClientTableRow