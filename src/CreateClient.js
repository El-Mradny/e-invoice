import React from "react";
import {Form, Button, FloatingLabel, Row, Col} from "react-bootstrap";
import CreateIssuerReceiver from "./components/CreateIssuerReceiver";
function CreateClient(){
    return(
        <main>
            <h4>Create new Client</h4>
            <CreateIssuerReceiver props={'receiver'} />
        </main>
    )
}
export default CreateClient;