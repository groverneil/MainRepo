import { Link } from "react-router-dom";

function NavigationBar () {

    return (

        <div className="navig">
            <ul>
                <li><Link to = "/" >Home</Link></li>
                <li><Link to = "/about" >Contact</Link></li>
                <li><Link to = "/proj" >Projects</Link></li>
            </ul>
        </div>
    );
}

export default NavigationBar;



