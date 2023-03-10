import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardTitle, Input, InputGroup, InputGroupText, Table } from 'reactstrap'
import { useAlert } from '../../Context/AlertContext'
import ClientTableRow from './ClientTableRow'
import { Loading } from '../../Loading/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getClients } from '../../../helpers/clientHelpers'

function ClientList() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const { showAlert } = useAlert()

    useEffect(() => {
        getClients()
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
                showAlert("danger", err.message)
            })
            .finally(() => setLoading(false))
    },[showAlert])

    if(loading){
        return <Loading/>
    }else{
        if(!data) return <p>No hay informacion para mostrar</p> 
        else {
            return (
                <Card body className='shadow'>
                    <CardTitle><span className='fw-bold ms-3'>Lista de Clientes</span></CardTitle>
                    <CardBody>
                        <Button color='success mb-2 fw-bold' size='lg' tag={Link} to="/dashboard/New-Client">
                            <FontAwesomeIcon icon={faPlus} className='me-2'/>
                            Agregar Cliente
                        </Button>
                        <InputGroup  className='mb-2'>
                            <InputGroupText className='bg-white border-end-0' >
                                <FontAwesomeIcon icon={faSearch}/>
                            </InputGroupText>
                            <Input type='search' className='border-start-0' placeholder="Buscar Nombre, Correo, ID..." />
                        </InputGroup>
                        <Table hover className='bg-white border'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre Completo</th>
                                    <th>Tel??fono</th>
                                    <th>Correo</th>
                                    <th>Direccion</th>
                                    <th>Acci??n</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(client => <ClientTableRow key={client.id} id={client.id} name={client.nombre} lastName={client.apellido} email={client.correo} phone={client.telefono} address={client.direccion} />)
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            )
        }
    }
}

export default ClientList