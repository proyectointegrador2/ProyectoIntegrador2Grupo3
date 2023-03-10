import React from 'react';
import './OrderDetails.css';
import {
Card,
CardBody,
CardTitle,
CardSubtitle,
CardText,
Button,
Row,
Col
} from 'reactstrap';

function OrderDetails() {
    return (
        <div>
            <h1>Order Details</h1>

            <Card
                style={{
                    width: '70rem',
                    marginBottom: '30px'
                }}
            >

                <CardBody>
                    <Row>
                        <Col className="bg-light" md="3">
                            <div>
                                <p>ORDER NO:</p>
                                <p><strong>673290789</strong></p>
                            </div>
                        </Col>
                        <Col className="bg-light" md="3">
                            <div>
                                <p>SHIPPED DATE:</p>
                                <p><strong>01 Oct, 2022</strong></p>
                            </div>
                        </Col>
                        <Col className="bg-light" md="3">
                            <div>
                                <p>STATUS</p>
                                <p><strong>Awating Delivery</strong></p>
                            </div>
                        </Col>
                        <Col className="bg-light" md="3">
                            <div>
                                <p>ORDER AMOUNT</p>
                                <p><strong>$259.00</strong></p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="">
                            <Row>
                                <Col className="margenSuperior" md="12">
                                    <div>
                                        <h4>Order Items (3)</h4>
                                    </div>
                                </Col>                               

                            </Row>

                        </Col>


                    </Row>

                    <hr/>

                    <Row>
                        <Col className="" md="3">
                            <div>
                                <Col className="" md="4">
                                    <div>
                                        <img className="tamanoImagen  margenSuperior" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <Col className="" md="3">
                            <div>
                                <p><strong>Nombre</strong></p>
                                <p>$ 500.00</p>
                                <br />
                                <p><strong>Color: Rojo</strong></p>
                                
                            </div>
                        </Col>                       
                    </Row>
                    <hr/>
                    <Row>
                        <Col className="" md="3">
                            <div>
                                <Col className="" md="4">
                                    <div>
                                        <img className="tamanoImagen  margenSuperior" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <Col className="" md="3">
                            <div>
                                <p><strong>Nombre</strong></p>
                                <p>$ 500.00</p>
                                <br />
                                <p><strong>Color: Rojo</strong></p>

                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="" md="3">
                            <div>
                                <Col className="" md="4">
                                    <div>
                                        <img className="tamanoImagen  margenSuperior" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <Col className="" md="3">
                            <div>
                                <p><strong>Nombre</strong></p>
                                <p>$ 500.00</p>
                                <br />
                                <p><strong>Color: Rojo</strong></p>

                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

           

        </div>

    )
}

export default OrderDetails