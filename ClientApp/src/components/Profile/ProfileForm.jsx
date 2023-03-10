import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import FormFeedBackError from '../Form/FormFeedBackError'
import SubmitButton from '../Form/SubmitButton'

function ProfileForm({handleSubmit, handleChange, touched, errors, loading, values}) {
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <Label for='name'>Nombre</Label>
                        <Input id='name'
                            name='name'
                            placeholder='Joe'
                            defaultValue={values.name}
                            invalid={touched.name && Boolean(errors.name)}
                            onChange={handleChange}
                        />
                        <FormFeedBackError error={errors.name} touched={errors.name} />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <Label for='lastName'>Apellido</Label>
                        <Input id='lastName'
                            name='lastName'
                            placeholder='Dan'
                            defaultValue={values.lastName}
                            invalid={touched.lastName && Boolean(errors.lastName)}
                            onChange={handleChange}
                        />
                        <FormFeedBackError error={errors.lastName} touched={errors.lastName} />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input id='email'
                            name='email'
                            type='email'
                            placeholder='mail@example.com'
                            defaultValue={values.email}
                            invalid={touched.email && Boolean(errors.email)}
                            onChange={handleChange}
                        />
                        <FormFeedBackError error={errors.email} touched={errors.email} />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <Label for='address'>Dirección</Label>
                        <Input id='address'
                            name='address'
                            placeholder='Calle Costa Rica #35, Ensanche ozama'
                            defaultValue={values.address}
                            invalid={touched.address && Boolean(errors.address)}
                            onChange={handleChange}
                        />
                        <FormFeedBackError error={errors.address} touched={errors.address} />
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <Label for='phone'>Telefono</Label>
                        <Input id='phone'
                            name='phone'
                            placeholder='555-555-5555'
                            defaultValue={values.phone}
                            invalid={touched.phone && Boolean(errors.phone)}
                            onChange={handleChange}
                        />
                        <FormFeedBackError error={errors.phone} touched={errors.phone} />
                    </FormGroup>
                </Col>
            </Row>
            <SubmitButton text={"Guardar cambios"} loading={loading} />
        </Form>
    )
}

export default ProfileForm