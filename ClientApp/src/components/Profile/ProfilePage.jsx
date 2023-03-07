import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { userSchema } from '../../helpers/formsSchema';
import { getCurrentUser } from '../../helpers/userHelpers';
import { useAlert } from '../Context/AlertContext';
import { Loading } from '../Loading/Loading';
import ProfileForm from './ProfileForm';

function ProfilePage() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const { showAlert } = useAlert()
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentUser()
            .then(data => setData(data))
            .catch(err => showAlert("danger", err.message))
            .finally(() => {
                setLoading(false)
            })
    },[showAlert])

    if(loading){
        return <Loading />
    }

    if(!data){
        navigate("/pagenotfound")
    }

    return (
        <div className="profile">
            <Card body>
                <CardBody>
                    <Row className='justify-content-between align-items-center'>
                        <Col md={4}>
                            <Row className='align-items-center'>
                                <Col>
                                    <Row className='align-items-center'>
                                        <Col>
                                            <div className='profile-avatar rounded-circle bg-primary d-inline-block p-4'>
                                                <FontAwesomeIcon icon={faUser} color="white" size={"3x"}/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-inline-block">
                                                <div className="d-flex flex-column">
                                                    <span className="fw-bold">Fulano</span>
                                                    <span>Usuario</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Button color='primary' outline className='d-block ms-auto'>Editar perfil</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Button color='primary' className='d-block ms-auto'>Cambiar contraseña</Button>
                        </Col>
                    </Row>

                    <Formik 
                     initialValues={{
                        name: '',
                        lastName: '',
                        email: '',
                        address: '',
                        phone: ''
                     }}
                     validationSchema={userSchema}
                     onSubmit = {async (values) => {
                        console.log(values)
                     }}
                    >
                    {({...args}) => <ProfileForm {...args}/>}
                    </Formik>
                </CardBody>
            </Card>
        </div>
    )
}


    export default ProfilePage;
