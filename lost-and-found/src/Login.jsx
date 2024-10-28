import { useState } from 'react'
import {GoogleLogin} from "@react-oauth/google"
import './index.css'

export function Login() {

    return(
        <div class="container1">
            <h1>Welcome to the Campus Lost and Found</h1>
            <p> Please Login to begin searching</p>
            <div class ="google-btn">
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                }}
                onError={() => console.log("Login Failed")}
                buttonText="Login"/>
            </div>
            
        
    </div>
    
        
    )
}
