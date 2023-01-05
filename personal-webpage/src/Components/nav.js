import { Link } from "react-router-dom";

//This is the maon navigation for the website.

function NavigationBar () {

    return (

        <div className="navig">
            <ul>
                <li><Link to = "/" >Home</Link></li>
                <li><Link to = "/about" >Contact</Link></li>
                <li><Link to = "/proj" >Projects</Link></li>

                {/* These link tags make sense once we look at App.js.
                That file defines the string that is used in the 'to' attributes. */}
            </ul>
        </div>
    );
}

export default NavigationBar;



