import * as React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap'



function Home() {

    return (
        <main>
            <h2>Welcome to Home page for E-Invoice Application!</h2>

            <br /><br />
            <Row>
                <Col>
                    <Card border="primary" >
                        <Card.Link href="/invoices">
                            <Card.Header >Header</Card.Header>

                            <Card.Body>
                                <Card.Title>INVOICES</Card.Title>
                                <Card.Text>
                                    Review all synchronized invoices with tax system.
                                </Card.Text>

                            </Card.Body>
                        </Card.Link>

                    </Card>
                </Col>
                <Col>
                    <Card border="primary" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Credit Notes</Card.Title>
                            <Card.Text>
                                Review all synchronized Credit Notes with tax system.
                            </Card.Text>
                            <Card.Link href="/createCreditNote">Create Credit Note</Card.Link>
                            <Card.Link href="/creditNotes">All Credit Notes</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Debit Notes</Card.Title>
                            <Card.Text>
                                Review all synchronized Credit Notes with tax system.
                            </Card.Text>
                            <Card.Link href="/createDebitNote">Create Debit Note</Card.Link>
                            <Card.Link href="/debitNotes">All Debit Notes</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </main>

    );
}

export default Home;