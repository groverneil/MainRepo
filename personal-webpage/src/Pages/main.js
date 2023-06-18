import HomePage from "./homepg";
import About from "./about";
import Projects from "./projects";
import NavigationBar from "../Components/nav";
import Scroll1 from "../Pics/scroll_1.png"
import Scroll2 from "../Pics/scrol_2.png"


function Main() {

    return (

        <div>
            <NavigationBar/>
            <div>
                <img src={Scroll1} alt = "Scroll1" id = "scrl1"/>
                <div className="twi_1">About Me</div>
            </div>
            <HomePage/>
            <div>
                <img src={Scroll2} alt = "Scroll2" id = "scrl1"/>
                <div className="twi_2">Projects</div>
            </div>
            <Projects/>
            <About/>
        </div>
    )
}


export default Main