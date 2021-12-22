import React from "react";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Clients(){
    const editClient = ()=>{
        console.log('Edit Invoice')
    }

    const removeClient = ()=>{
        console.log('Remove Invoice')
    }

    return(
        <main>
            <h4>Clients</h4>
            <Button variant="link" href='/createClient'>Create Client</Button>
            <Table>
                <thead>
                <tr>
                    <th>Sr</th>
                    <th>Client ID</th>
                    <th>Client Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>456545</td>
                    <td>Dell Company</td>
                    <td>Gharbia</td>
                    <td>Tanta</td>
                    <td>
                        <i className="fas fa-pencil-alt" onClick={editClient}></i> &nbsp;
                        <i className="fas fa-calendar-times" onClick={removeClient}></i>
                    </td>
                </tr>
                </tbody>
            </Table>
        </main>
    )
}

export default Clients;