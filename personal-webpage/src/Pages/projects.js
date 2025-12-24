import ProjectContainer from "../Components/proj-content"
import ScrapPic from '../Pics/Screenshot 2022-12-22 at 6.05.22 PM.png'
import RuneEffPic from '../Pics/rune-eff-img.jpg'
import ReviewRavenPic from '../Pics/birbLogo.png'
import StudyBuddyPic from '../Pics/appIcon.png'

function Projects(){

    return (

        <div id = "projId">
            <ProjectContainer
              pic={ReviewRavenPic}
              title="Review Raven: CruzHacks 2025"
              content="A review analysis platform that aggregates reviews from Google Maps, Facebook, and more, providing actionable sentiment analysis for small businesses. Secured 2nd Place in the Justice category at CruzHacks 2025. Built robust web scrapers in Python (Selenium) and a Node.js/Express backend; integrated AI-powered review aggregation using GPT-4o and Langflow. Used NRC Emotion Lexicon for advanced sentiment analysis."
              link="https://devpost.com/software/review-raven"
            />

            <ProjectContainer
              pic={StudyBuddyPic}
              title="Study Buddy: CruzHacks 2024"
              content="A mobile app for students to find, share, and book real-time study spaces and group sessions on campus, using Google Maps API for live location data. Designed and implemented the front-end in React Native and the backend with ExpressDB, containerized and deployed on Google Cloud Run. Enabled users to add new study spots, register for sessions, and collaborate with peers."
              link="https://devpost.com/software/studybuddy-vmk5xi"
            />
            <ProjectContainer
              pic={ScrapPic}
              title="Webscrapping Project: Internships"
              content="This is a webscrapping task that navigates to indeed.com and scrapes python interships programs. The source code is written in python based on the scraping libraries Beautiful soup and Selenium. The collected data is handled using the Pandas library and is dumped to a csv file for data collection. The task is automated to run daily using Cron tasks (MacOS). The picture on the right shows the sample output of the program."
              link="https://github.com/groverneil"
            />
            <ProjectContainer
              pic={RuneEffPic}
              title="Summoners War: Rune Optimizer"
              content="Summoners war is a game that is largely played and won by having better stats in your ally monsters. These stats are mainly attributed to the runes that can be equipted on the monster. Thus, the optimal strategy is to choose the most stat efficient runes to equipt on your monsters. To help players better their rune quality, my friend Ishaan and I are currently working on a rune stat efficiency calculator that returns the relative efficiency of a rune. The program backend would be written using Python and the front end would be written using ReactJS."
              link="https://github.com/groverneil"
            />
        </div>
    )

}

export default Projects