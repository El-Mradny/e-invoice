import React from "react";
import CreateIssuerReceiver from "./components/CreateIssuerReceiver";
function Profile(){
    return(
        <main>
            <h4>Welcome to my Profile</h4>
            <CreateIssuerReceiver props={'issuer'} />
        </main>
    )
}

export default Profile;