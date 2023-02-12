
import React from 'react'
import { Badge, Table } from 'reactstrap'
import Summary from './Summary'


function Dashboard() {

    return (
        <div>
            <h1>Dashboard</h1>
            <p className="text-muted ms-1">Dashboard</p>


            <div className="bg-light p-2">

                <Summary />

                <Table responsive bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Cliente</th>
                            <th>Metodo Pago</th>
                            <th>Estado</th>
                            <th>Precio total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>1</th>
                            <td className='text-muted'>2/11/2023</td>
                            <td className='text-muted'>Joe Dan</td>
                            <td className='text-muted'>Efectivo</td>
                            <td className='text-muted'>
                                <Badge color='success'>Completado</Badge>
                            </td>
                            <td className='text-muted'>$1500.00</td>
                        </tr>
                        <tr>
                            <th scope='row'>2</th>
                            <td className='text-muted'>2/11/2023</td>
                            <td className='text-muted'>Joe Dan</td>
                            <td className='text-muted'>Efectivo</td>
                            <td className='text-muted'>
                                <Badge color='success'>Completado</Badge>
                            </td>
                            <td className='text-muted'>$1500.00</td>
                        </tr>
                        <tr>
                            <th scope='row'>3</th>
                            <td className='text-muted'>2/11/2023</td>
                            <td className='text-muted'>Joe Dan</td>
                            <td className='text-muted'>Efectivo</td>
                            <td className='text-muted'>
                                <Badge color='success'>Completado</Badge>
                            </td>
                            <td className='text-muted'>$1500.00</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Dashboard