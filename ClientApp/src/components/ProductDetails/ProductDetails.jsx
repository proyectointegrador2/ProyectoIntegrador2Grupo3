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
    CardSubtitle
} from 'reactstrap';

function ProductDetails() {

    return (
        <div>
            <h1>Dashboard</h1>

            <div>

                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>


            </div>
           
            <div class="row">
                <div class="col col-md-6 img-size">
                    <img src="https://i.pinimg.com/originals/6e/f5/6f/6ef56f8f50728b314d9dd174804de445.jpg" />
                </div>
                <div class="col col-md-6 img-size">
                    <img src="https://i.pinimg.com/originals/6e/f5/6f/6ef56f8f50728b314d9dd174804de445.jpg" />
                </div>
                
            </div>
            
        </div>

        


        )
}

export default ProductDetails