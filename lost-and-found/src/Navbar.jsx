import {Link} from 'react-router-dom'

export function Navbar(){
    return(
        <>
        <ul>
            <li>
            <Link to="/home">
                <button class="navbtn">Home</button>
            </Link>
            </li>
            <li>
            <Link to="/report">
                <button class="navbtn">Report</button>
            </Link>
            </li>
        </ul>
        </>
    )
}

