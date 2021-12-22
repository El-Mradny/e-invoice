import * as React from 'react';
import Button  from "react-bootstrap/Button";
import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import db from "./db";

function Invoices() {
    const editInvoice = ()=>{
        console.log('Edit Invoice')
    }

    const removeInvoice = ()=>{
        console.log('Remove Invoice')
    }

    const [invoices,setInvoices] = useState([])
    const [invoice, setInvoice] = useState({})
    // useEffect(() => (async () => setInvoices(await db.Invoices.getAll()))(), [])


    // console.log(invoices)


    return (

        <main>
            <h2>E-Invoices!</h2>
            <Button variant="link" href='/createInvoice' >Create Invoice</Button>

            <Table>
                <thead>
                <tr>
                    <th>Sr</th>
                    <th>Invoice No</th>
                    <th>Tax invoice No</th>
                    <th>Total value</th>
                    <th>Status</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>456</td>
                    <td>25656565323565</td>
                    <td>273,600</td>
                    <td>Approved</td>
                    <td>
                        <i className="fas fa-pencil-alt" onClick={editInvoice}></i> &nbsp;
                        <i className="fas fa-calendar-times" onClick={removeInvoice}></i>
                    </td>
                </tr>
                </tbody>
            </Table>
        </main>

    );
}

export default Invoices;