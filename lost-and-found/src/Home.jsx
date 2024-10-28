import { useState } from 'react'
import {GoogleLogin} from "@react-oauth/google"
import './index.css'

export function Home() {

    return(
        <div class="container1">
            <h1>Welcome to the Campus Lost and Found</h1>
            <p>Please select an option:</p>
            
            <div class="options">
                <a href="/#/report">Report Lost Item</a>
            </div>
            <div class="options">
            <a  href="/report?type=found">Report Found Item</a>
            </div>
            <div class="options">
                <a  href="/items">View All Items</a>
            </div>
            
    </div>
    
        
    )
}


