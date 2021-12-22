import * as React from 'react';
import {Form, Row, Col, FloatingLabel, Button, Table} from "react-bootstrap";

function CreateDocument({ props }) {
    const title =props
    const removeProduct =()=>{ //I should use id as parameter
        console.log('Delete product')
    }

    const addProduct = ()=>{
        console.log('Add product')
    }
    return (

        <main>
                <h2>Create { title }</h2>
                <hr/>
                <Row>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Invoice Number">
                            <Form.Control type="text"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Invoice Date">
                            <Form.Control type="date"/>
                        </FloatingLabel>
                    </Col>
                </Row><br/><br/>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Customer">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Customer Name">
                            <Form.Control type="text" placeholder="Readonly input here..." readOnly/>
                        </FloatingLabel>
                    </Col>
                </Row><br/><br/>
                <Row>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Products">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select Product</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Product Id">
                            <Form.Control type="text"  readOnly/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Product Name">
                            <Form.Control type="text" readOnly/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Qty.">
                            <Form.Control type="number" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Price">
                            <Form.Control type="number"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Total">
                            <Form.Control type="text"  readOnly/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <Button variant="outline-primary" type="button" onClick={addProduct}>Add</Button>
                    </Col>
                </Row>
                <hr/>
                <Table>
                    <thead>
                    <tr>
                        <td>Sr</td>
                        <td>ID</td>
                        <td>Product</td>
                        <td>U.Price</td>
                        <td>Qty.</td>
                        <td>Total</td>
                        <td>Options</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>236488</td>
                        <td>CBC Machine</td>
                        <td>75000</td>
                        <td>1</td>
                        <td>75000</td>
                        <td><i className="fas fa-trash-alt" onClick={removeProduct}></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>236489</td>
                        <td>CBC Reagent</td>
                        <td>5000</td>
                        <td>3</td>
                        <td>15000</td>
                        <td><i className="fas fa-trash-alt" onClick={removeProduct}></i></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>236457</td>
                        <td>Chemistry Machine</td>
                        <td>150000</td>
                        <td>1</td>
                        <td>150000</td>
                        <td><i className="fas fa-trash-alt" onClick={removeProduct}></i></td>
                    </tr>
                    <tr>
                        <td colSpan={4}></td>
                        <td><dd>Subtotal</dd></td>
                        <td><dt>240,000.00</dt></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={4}></td>
                        <td><dd>Tax</dd></td>
                        <td><dt>33,600.00</dt></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={4}></td>
                        <td><dd>Total</dd></td>
                        <td><dt>273,600.00</dt></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
                <dl>
                    <dt>Only Two Hundred Seventy Three Thousand and Six hundred Egyptian Pound</dt>
                </dl>
        </main>

    )
}

export default CreateDocument;