import React, {useEffect, useState} from "react";
import db from './db';

import Form from "react-bootstrap/Form";


function Addresses(){
    const [countries, setCountries] = useState([]);
    useEffect(() => (async () => setCountries(await db.Addresses.getAll()))(), [])

    return(
        <>
            <h1>Hello address</h1>
            <Form.Select aria-label="Default select example">
                <option></option>
                {
                    countries.map(
                        country => <option key={country.code} value={country.code} >
                            {country.code} - {country.code}
                        </option>
                    )
                }
            </Form.Select>
        </>
    )
}

export default Addresses