import HomePage from "./homepg";
import About from "./about";
import Projects from "./projects";
import Jobs from "./jobs";
import NavigationBar from "../Components/nav";
import Scroll1 from "../Pics/scroll_1.png"
import Scroll2 from "../Pics/scrol_2.png"
import Scroll3 from "../Pics/experience.jpeg"


function Main() {

    return (

        <div>
            <span id="scrl1"></span>
            <NavigationBar/>
            <div>
                <img src={Scroll1} alt = "Scroll1" id = "sec1"/>
                <div className="twi_1">About Me</div>
            </div>
            <HomePage/>
            <span id="scrl2"></span>
            <div id="projId">
                <img src={Scroll2} alt = "Scroll2" id = "sec2"/>
                <div className="twi_2">Projects</div>
            </div>
            <Projects/>
            <span id="scrl3"></span>
            <div id="jobs">
                <img src={Scroll3} alt = "Scroll3" id = "sec3"/>
                <div className="twi_3">Work Experience</div>
            </div>
            <Jobs/>
            <About/>
        </div>
    )
}


export default Main