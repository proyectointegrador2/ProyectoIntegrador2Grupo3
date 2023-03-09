import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardTitle, Input, InputGroup, InputGroupText, Table } from 'reactstrap'
import { useAlert } from '../../Context/AlertContext'
import ModelTableRow from './ModelTableRow'
import { Loading } from '../../Loading/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getModels } from '../../../helpers/carHelpers'

function ModelList() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const { showAlert } = useAlert()

    useEffect(() => {
        getModels()
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch(err => {
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
                    <CardTitle><span className='fw-bold ms-3'>Lista de Modelos</span></CardTitle>
                    <CardBody>
                        <Button color='success mb-2 fw-bold' size='lg' tag={Link} to="/dashboard/New-Brand">
                            <FontAwesomeIcon icon={faPlus} className='me-2'/>
                            Agregar Modelo
                        </Button>
                        <InputGroup  className='mb-2'>
                            <InputGroupText className='bg-white border-end-0' >
                                <FontAwesomeIcon icon={faSearch}/>
                            </InputGroupText>
                            <Input type='search' className='border-start-0' placeholder="Buscar Nombre o ID" />
                        </InputGroup>
                        <Table hover className='bg-white border'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Marca</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(model => <ModelTableRow key={model.Id} id={model.Id} name={model.Nombre} brand={model.brand.Nombre} />)
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            )
        }
    }
}

export default ModelList