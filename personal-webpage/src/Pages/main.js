import HomePage from "./homepg";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import NavigationBar from "../Components/nav";
import Scroll1 from "../Pics/scroll_1.png"
import Scroll2 from "../Pics/scrol_2.png"


function Main() {

    return (

        <div>
            <NavigationBar/>
            <div className="section-banner" id="scrl1">
                <img src={Scroll1} alt="Scroll1" className="scroll-target"/>
                <div className="section-title">About Me</div>
            </div>
            <HomePage/>
            <div className="section-banner" id="scrl2">
                <img src={Scroll2} alt="Scroll2" className="scroll-target"/>
                <div className="section-title">Experience</div>
            </div>
            <Experience/>
            <div className="section-banner" id="scrl3">
                <img src={Scroll1} alt="Scroll3" className="scroll-target"/>
                <div className="section-title">Projects</div>
            </div>
            <Projects/>
            <About/>
        </div>
    )
}


export default Main