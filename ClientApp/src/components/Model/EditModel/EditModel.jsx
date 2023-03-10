import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { brandSchema } from '../../../helpers/formsSchema'
import { useAlert } from '../../Context/AlertContext'
import { Loading } from '../../Loading/Loading'
import SubmitButton from '../../Form/SubmitButton'
import FormFeedBackError from '../../Form/FormFeedBackError'
import { editModel, getModelByID } from '../../../helpers/carHelpers'

function EditModel() {
    const [modelData, setModelData] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const { showAlert } = useAlert();

    useEffect(() => {
        getModelByID(id)
         .then(data => {
            if(data.success){
                setModelData(data.model)
            }else{
                setModelData(null)
            }
         })
         .catch(err => console.error(err))
         .finally(() => setLoading(false))
    }, [id])

    if(loading){
        return <Loading/>
    }

    if(!modelData){
        return <Navigate to="/404" replace />
    }

    return (
        <div className='container-fluid'>
            <h1>Editar Modelo</h1>
            <Row>
                <Col>
                    <Card body className='shadow'>
                        <CardTitle>
                            <h2 className='fw-bold'>Editar Modelo</h2>
                        </CardTitle>
                        <CardBody className='p-0'>
                            <Formik
                             initialValues={{
                                name: modelData.nombre,
                                brandID: modelData.brandId
                             }}
                             validationSchema={brandSchema}
                             onSubmit={async (values) => {
                                const request = {
                                    Nombre: values.name,
                                }
                                await editModel(request, id).then(data => {
                                    if(data.success){
                                        showAlert("success", data.message)
                                    }else{
                                        showAlert("danger", data.message)
                                    }
                                })
                                .finally(() => {})
                             }}
                            >
                            {({handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting}) => (
                                <Form onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
                                    <Row>
                                        <Col lg={4} md={6} sm={12}>
                                            <FormGroup>
                                                <Label for='name'>Nombre</Label>
                                                <Input id='name'
                                                name='name'
                                                placeholder='Corolla'
                                                defaultValue={values.name}
                                                invalid={touched.name && Boolean(errors.name)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                />
                                                <FormFeedBackError error={errors.name} touched={touched.name} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                        <FormGroup>
                                            <Label for='brandID'>Marca</Label>
                                            <Input id='brandID'
                                             name='brandID'
                                             type='select'
                                             placeholder='Toyota'
                                             defaultValue={values.brandID}
                                             invalid={touched.brandID && Boolean(errors.brandID)}
                                             onChange={handleChange}
                                            >
                                                <option value="">Elije una marca...</option>
                                                {
                                                    brandData.map(brand => <option key={brand.id} value={brand.id}>{brand.nombre}</option>)
                                                }
                                            </Input>
                                            <FormFeedBackError error={errors.brandID} touched={errors.brandID} />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <SubmitButton text="Guardar cambios" loading={isSubmitting} />
                                </Form>
                            )}
                            </Formik>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default EditModel
