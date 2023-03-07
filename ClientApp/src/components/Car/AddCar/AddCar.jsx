import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from 'reactstrap';
import { carSchema } from '../../../helpers/formsSchema';
import { Formik } from 'formik';
import FormFeedBackError from '../../Form/FormFeedBackError';
import SubmitButton from '../../Form/SubmitButton';
import { useAlert } from '../../Context/AlertContext';
import CarForm from '../CarForm';

function AddProduct() {
    const { showAlert } = useAlert();

    return (
        <div className='container-fluid'>
        <h1>Añadir Vehículo</h1>
        <Row>
            <Col>
                <Card body className='shadow'>
                    <CardTitle>
                        <h2 className='fw-bold'>Añadir Vehículo</h2>
                    </CardTitle>
                    <CardBody className='p-0'>
                        <Formik
                         initialValues={{
                            name: '',
                            description: '',
                            model: '',
                            color: '',
                            year: 1970,
                            chasis: '',
                            plate: '',
                            cylinderCapacity: 1,
                            mileage: 50000,
                            numberOfDoors: 4,
                            price: 0.00,
                            stock: 0,
                            transmition: 'Automática',
                            fuel: 'Gasolina'
                         }}
                         validationSchema={carSchema}
                         onSubmit={async (values) => {
                            const request = {
                                Nombre: values.name,
                                Description: values.description,
                                ModelID: values.model,
                                Color: values.color,
                                Anio: values.year,
                                Chasis: values.chasis,
                                Placa: values.plate,
                                Cilindraje: values.cylinderCapacity,
                                KilometrosTablero: values.mileage,
                                CantidadPuerta: values.numberOfDoors,
                                Precio: values.price,
                                Stock: values.stock,
                                Transmicion: values.transmition,
                                Combustible: values.fuel
                            }
                         }}
                        >
                        { ({...args}) => <CarForm {...args} /> }
                        </Formik>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default AddProduct;