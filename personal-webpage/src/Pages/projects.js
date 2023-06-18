import ProjectContainer from "../Components/proj-content"
import ScrapPic from '../Pics/Screenshot 2022-12-22 at 6.05.22 PM.png'
import RuneEffPic from '../Pics/rune-eff-img.jpg'

function Projects(){

    return (

        <div id = "projId">
            <ProjectContainer pic = {ScrapPic} title = "Webscrapping Project: Internships" content = "This is a webscrapping task that navigates to indeed.com and scrapes python interships programs. The source code is written in python based on the scraping libraries Beautiful soup and Selenium. The collected data is handled using the Pandas library and is dumped to a csv file for data collection. The task is automated to run daily using Cron tasks (MacOS). The picture on the right shows the sample output of the program. The entire project including the collected data can be found on Github portfolio."/>
            <ProjectContainer pic = {RuneEffPic} title = "Summoners War: Rune Optimizer" content = "Summoners war is a game that is largely played and won by having better stats in your ally monsters. These stats are mainly attributed to the runes that can be equipted on the monster. Thus, the optimal strategy is to choose the most stat efficient runes to equipt on your monsters. To help players better their rune quality, my friend Ishaan and I are currently working on a rune stat efficiency calculator that returns the relative efficiency of a rune. The program backend would be written using Python and the front end would be written using ReactJS." />
        </div>
    )

}

export default Projects