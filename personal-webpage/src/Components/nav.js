//This is the maon navigation for the website.

function NavigationBar () {

    return (

        <div className="navig">
            <ul>
                <li><a href="#scrl1">About</a></li>
                <li><a href="#projId">Projects</a></li>
                <li><a href="#end">Contact Me</a></li>

                {/* These link tags make sense once we look at App.js.
                That file defines the string that is used in the 'to' attributes. */}
            </ul>
        </div>
    );
}

export default NavigationBar;



