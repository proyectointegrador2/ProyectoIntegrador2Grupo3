import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Table, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Modal, ModalHeader, ModalBody, ModalFooter,Row,Form,Col,FormGroup,Label,Input } from 'reactstrap';
import { Link } from "react-router-dom";


function MyButton() {
    return (
<div>
            <Button tag={Link} to="/Add-Product" replace color="success">
            + Add Product
        </Button>
        { ' ' }

    <Button color="primary">
        Import Product
    </Button>
        { ' ' }
 </div>
    );
    

}

//mostrarModal AddProduct = () => { this.sctState((modalAddProduct: true)); }
//ocultarModal AddProduct = () => { this.sctState((modalAddProduct: false)); }


function Example(props) {
    const { className } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const closeBtn = (
        <button className="close" onClick={toggle} type="button">
            &times;
        </button>
    );

    return (
        <div>
            <Button color="success" onClick={toggle}>
                Add Product
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={closeBtn}>
                   Add Product 
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Name">
                                        Name
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Insert name"
                                        type="name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Code">
                                        Code
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="Code"
                                        placeholder="Insert code"
                                        type="code"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="Category">
                                Category
                            </Label>
                            <Input
                                id="exampleAddress"
                                name="Category"
                                placeholder="Insert category"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">
                                Sub-Category
                            </Label>
                            <Input
                                id="exampleAddress2"
                                name="Sub-Category"
                                placeholder="Insert Sub-Category"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Brand">
                                       Brand
                                    </Label>
                                    <Input
                                        id="exampleCity"
                                        name="Brand"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="Unit">
                                        Unit
                                    </Label>
                                    <Input
                                        id="exampleState"
                                        name="Unit"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="Variant">
                                        Zip
                                    </Label>
                                    <Input
                                        id="exampleZip"
                                        name="Variant"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Stock">
                                        Stock
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="Stock"
                                        placeholder="Insert stock"
                                        type="stock"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Price">
                                        Price
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="Price"
                                        placeholder="Insert price"
                                        type="price"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                                id="exampleCheck"
                                name="check"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="exampleCheck"
                            >
                                Check me out
                            </Label>
                        </FormGroup>
                        <Button>
                            +Add Product
                        </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Insertar</Button>
                    <Button color="danger" onClick={() => this.ocultarModal()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

Example.propTypes = {
    className: PropTypes.string,
};

//export default Example;
export default function MyApp() {
    return (
        <div>
            <h1>Product list</h1>
            <MyButton />
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>
                            SL
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Code
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Sub-Category
                        </th>
                        <th>
                            Brand
                        </th>
                        <th>
                            Unit
                        </th>
                        <th>
                            Variant
                        </th>
                        <th>
                            Stock
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Action
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td> 
                        <td>
                            <UncontrolledDropdown group>
                                <Button color="primary">
                                    Action
                                </Button>
                                <DropdownToggle
                                    caret
                                    color="primary"
                                />
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Header
                                    </DropdownItem>
                                    <DropdownItem>
                                        Some Action
                                    </DropdownItem>
                                    <DropdownItem text>
                                        Dropdown Item Text
                                    </DropdownItem>
                                    <DropdownItem disabled>
                                        Action (disabled)
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Foo Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Bar Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Quo Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>    
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            <UncontrolledDropdown group>
                                <Button color="primary">
                                    Action
                                </Button>
                                <DropdownToggle
                                    caret
                                    color="primary"
                                />
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Header
                                    </DropdownItem>
                                    <DropdownItem>
                                        Some Action
                                    </DropdownItem>
                                    <DropdownItem text>
                                        Dropdown Item Text
                                    </DropdownItem>
                                    <DropdownItem disabled>
                                        Action (disabled)
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Foo Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Bar Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Quo Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            <UncontrolledDropdown group>
                                <Button color="primary">
                                    Action
                                </Button>
                                <DropdownToggle
                                    caret
                                    color="primary"
                                />
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Header
                                    </DropdownItem>
                                    <DropdownItem>
                                        Some Action
                                    </DropdownItem>
                                    <DropdownItem text>
                                        Dropdown Item Text
                                    </DropdownItem>
                                    <DropdownItem disabled>
                                        Action (disabled)
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Foo Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Bar Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Quo Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}