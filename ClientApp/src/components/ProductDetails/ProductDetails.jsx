import React from 'react'
import './ProductDetails.css';
import {
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from 'reactstrap';

function ProductDetails() {

    return (
        <div>
            <h1>Product Details</h1>

            <Container>
                
                <Row>
                    <Col className="bg-light">
                        <div>
                        <img className="imagenPrincipal" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg"/>
                            </div>
                         <Row>
                            <Col className="bg-light" md="3">
                                <div>
                                <img className="tamanoImagen margenIzquierdo margenSuperior" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                                </div>
                            </Col>
                            <Col className="bg-light" md="3">
                                <div>
                                    <img className="tamanoImagen margenIzquierdo margenSuperior" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                                </div>
                            </Col>
                            <Col className="bg-light" md="3">
                                <div>
                                    <img className="tamanoImagen margenIzquierdo margenSuperior" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="bg-light border">
                        <h4 className="nombreProductoMargin"><strong>Nombre del producto</strong></h4>
                        
                        <Row>
                            <Col className="bg-light" md="3">
                                <p className="precioVenta"><strong>$500.00</strong></p>
                            </Col>
                            <Col className="bg-light" md="2">
                                <p className="precioOferta"><strong>$350.00</strong></p>
                            </Col>
                        </Row>

                        <Row>
                            <p className="margenIzquierdo margenSuperior">Color: <strong>White</strong></p>
                        </Row>

                        <Row>
                            <Col className="bg-light" md="3">
                                <img className="tamanoImagen margenIzquierdo" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                            </Col>
                            <Col className="bg-light" md="3">
                                <img className="tamanoImagen margenIzquierdo" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="bg-light margenIzquierdo marginSuperiorBotones" md="3">
                                <UncontrolledDropdown group>
                                    <Button color="light" className="Borde">
                                        Primary
                                    </Button>
                                    <DropdownToggle
                                        caret
                                        color="light"
                                    />
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem>
                                            Some Action
                                        </DropdownItem>
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>

                            <Col className="bg-light margenIzquierdo marginSuperiorBotones" md="3">
                                <Button color="dark" className="Borde">
                                    Add to Car
                                </Button>
                                {' '}
                            </Col>

                            <Col className="bg-light margenIzquierdo marginSuperiorBotones" md="3">
                                <Button outline color="dark" className="Borde" >
                                    WishList
                                </Button>
                                {' '}
                            </Col>
                        </Row>                        

                    </Col>
                    
                </Row>
               
            </Container>
           
            
            
        </div>

        


        )
}

export default ProductDetails