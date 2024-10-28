import { useState } from 'react'
import {GoogleLogin} from "@react-oauth/google"
import './index.css'

export function Report() {

    return(
        <div class="container1">
            <h1>Report <span id="itemType">Item</span></h1>

            <form class="options" action="/report" method="POST" enctype="multipart/form-data">
            <input type="hidden" id="type" name="type" value=""/>
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea>

            <label for="location">Location:</label>
            <input type="text" id="location" name="location" required/>

            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required></input>

            <label for="time">Time:</label>
            <input type="time" id="time" name="time" required/>

            <label for="tags">Tags:</label>
            <div id="tags">
                <input type="checkbox" name="tags" value="Electronics"/> Electronics
                <input type="checkbox" name="tags" value="Clothing"/> Clothing
                <input type="checkbox" name="tags" value="Accessories"/> Accessories
                <input type="checkbox" name="tags" value="Books"/> Books
                <input type="checkbox" name="tags" value="Personal Items"/> Personal Items
            </div>

            <label for="image">Image (optional):</label>
            <input type="file" id="image" name="image" accept="image/*"/>

            <button type="submit">Submit Report</button>
            </form>
        </div>
    )
    
    
}

