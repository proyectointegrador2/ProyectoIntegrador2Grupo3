import React from 'react'
import { Card, Col, Form, Row, Input, InputGroupText, Button, FormFeedback } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import FieldGroup from '../Form/FieldGroup' 
import * as Yup from 'yup'
import { useFormik } from 'formik'
import './login.css'

const validationSchema = Yup.object({
    email: Yup.string("Ingrese un correo").email("Ingrese un formato de email válido").required("Este campo es requerido"),
    password: Yup.string("Ingrese la contraseña").min(8, "La contraseña debe ser al menos 8 carácteres").required("Este campo es requerido"),
})

function Login() {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            termsAndConditions: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const request = {
                email: values.email,
                password: values.password,
            }

            fetch('api/user/login', {
                method: 'POST',
                body: JSON.stringify(request),
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        }
    })
  return (
    <div className='login'>
        <div className="login-form">
            <Row>
                <Col>
                    <Card body className='shadow'>
                        <h1 className='text-center fw-bold'>Iniciar Sesión</h1>
                        <Form className='mt-2 mb-2' onSubmit={formik.handleSubmit}>
                            <FieldGroup>
                                <Input
                                 placeholder='Email'
                                 type='email'
                                 bsSize="lg"
                                 id='email'
                                 value={formik.values.email}
                                 onChange={formik.handleChange}
                                 invalid={formik.touched.email && Boolean(formik.errors.email)}
                                />
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </InputGroupText>
                                {
                                    formik.touched.email && formik.errors.email &&
                                    <FormFeedback>
                                        {formik.errors.email}
                                    </FormFeedback>
                                }
                            </FieldGroup>
                            <FieldGroup>
                                <Input
                                  placeholder='Contraseña' type='password'
                                  bsSize="lg"
                                  autoComplete='on'
                                  id='password'
                                  value={formik.values.password}
                                  onChange={formik.handleChange}
                                  invalid={formik.touched.password && Boolean(formik.errors.password)}
                                />

                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock}/>
                                </InputGroupText>

                                {
                                    formik.touched.password && formik.errors.password &&
                                    <FormFeedback>
                                        {formik.errors.password}
                                    </FormFeedback>
                                }
                            </FieldGroup>
                            <Button type='submit' size='lg' color='primary' block className='submit-button m-auto'>Entrar</Button>
                        </Form>
                        <span className='text-muted text-center mt-4'>no tienes una cuenta? <Link to={'/register'}>Registrate!</Link></span>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Login