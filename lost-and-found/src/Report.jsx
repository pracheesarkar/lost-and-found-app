import { useState } from 'react'
import './index.css'
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore';

export function Report(){
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addDoc(collection(db, "reports"),{
            description: description,
            location: location,
            date: date,
        })
        .then(() => {
            alert("Submitted");
        })
        .catch((error) =>{
            alert(error.message);
        })

        setDescription("");
        setLocation("");
        setDate("");

    }

    return(
        <div class="container1">
            <h1>Report <span id="itemType">Item</span></h1>

            <form className="options" onSubmit={handleSubmit} id="reportForm">
                
                <label>Description:</label>
                <textarea
                    name="decription"
                    id="description" 
                    value={description} 
                    placeholder='description'
                    required
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>

                <label>Location:</label>
                <input 
                    name="location"
                    id="location" 
                    value={location}
                    required
                    placeholder='location'
                    onChange={(e) => setLocation(e.target.value)}
                />

                <label>Date:</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date"
                    value={date}
                    placeholder='date' 
                    required
                    onChange={(e) => setDate(e.target.value)}
                    ></input>

                <button type="submit">Submit Report</button>
            </form>
        </div>
    )
    
    
}

