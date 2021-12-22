import React from "react";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";

export default function Setting(){
    return(
        <main>
            <h4>Setting</h4>
            <h6>Payment</h6>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="bankName">
                            <Form.Label>Bank Name</Form.Label>
                            <Form.Control type="text" placeholder="QNB" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="bankAddress">
                            <Form.Label>Bank Address</Form.Label>
                            <Form.Control type="text" placeholder="Tanta" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="bankAccountNo">
                            <Form.Label>Bank Account No</Form.Label>
                            <Form.Control type="text" placeholder="953488-541" />
                        </Form.Group>
                    </Col>
                </Row>



                <h5>Address</h5>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="bankAccountIBAN">
                            <Form.Label>Bank Account IBAN</Form.Label>
                            <Form.Control type="text" placeholder="AL47 2121 1009 0000 0002 3569 8741" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="swiftCode">
                            <Form.Label>Swift Code</Form.Label>
                            <Form.Control type="text" placeholder="AL47 2121" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <FloatingLabel controlId="terms" label="Terms" className="mb-3">
                        <Form.Control as="textarea" placeholder="any terms" />
                    </FloatingLabel>
                </Row>

                <Button variant="outline-secondary" type="submit">
                    Save
                </Button>
            </Form>
        </main>
    )
}