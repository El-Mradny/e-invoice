import React from "react";
import {Form, Button, FloatingLabel, Row, Col} from "react-bootstrap";
function CreateIssuerReceiver({ props }){
    console.log('CreateIssuerReceiver',props)
    return(
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Registration Name*</Form.Label>
                            <Form.Control type="text" placeholder="Egypt Technology" />
                            {/*<Form.Text className="text-muted">*/}
                            {/*    Registration Name. الاسم التجاري*/}
                            {/*</Form.Text>*/}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Registration Number*</Form.Label>
                            <Form.Control type="text" placeholder="10201020102" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label>Company Type*</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="B">Business</option>
                                <option value="P">Personal</option>
                                <option value="F">Future Use</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>



                <h5>Address</h5>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="branchId">
                            <Form.Label>Branch Id*</Form.Label>
                            <Form.Control type="text" placeholder="2535" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country*</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="B">Business</option>
                                <option value="P">Personal</option>
                                <option value="F">Future Use</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="governate">
                            <Form.Label>Governate*</Form.Label>
                            <Form.Control type="text" placeholder="Giza" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="regionCity">
                            <Form.Label>Region City*</Form.Label>
                            <Form.Control type="text" placeholder="Dokki || Sheikh Zayed" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="street">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" placeholder="26 July Street" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="buildingNumber">
                            <Form.Label>Building Number</Form.Label>
                            <Form.Control type="text" placeholder="86" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" placeholder="31111" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="floor">
                            <Form.Label>Floor</Form.Label>
                            <Form.Control type="text" placeholder="2" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="room">
                            <Form.Label>Flat No.</Form.Label>
                            <Form.Control type="text" placeholder="26" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <FloatingLabel controlId="landmark" label="Landmark" className="mb-3">
                        <Form.Control type="text" placeholder="Example: Beside MegaMart" />
                    </FloatingLabel>
                </Row>

                <Row>
                    <FloatingLabel controlId="additionalInformation" label="Additional Information - optional" className="mb-3">
                        <Form.Control as="textarea" placeholder="Example: any additional information to the address" />
                    </FloatingLabel>
                </Row>

                <Button variant="outline-secondary" type="submit">
                    Save
                </Button>
            </Form>
        </>
    )
}

export default CreateIssuerReceiver;