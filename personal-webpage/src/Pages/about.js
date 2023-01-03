import NavigationBar from "../Components/nav";
import SocialContact from "../Components/social-media-contacts";
import LinkedInPic from '../Pics/LinkedIn-icon.png'
import GmailLogo from '../Pics/Gmail-logo.png'
import HandshakeLogo from '../Pics/handshake-logo.png'
import DiscordLogo from '../Pics/Discord-logo.png'
import GitLogo from '../Pics/gitlogo.png'

function About(){

    return (

        // This contains all my social media contact informations.
        // We use a simple card based container to display the social media contacts.

        <div>
            <h1>Contact Information</h1>
            <NavigationBar/>
            <SocialContact pic = {GmailLogo} platform = "Gmail" pltname= "groverneil25" />
            <SocialContact pic = {LinkedInPic} platform = "LinkedIn" pltname = "Neil Grover"/>
            <SocialContact pic = {HandshakeLogo} platform = "Handshake" pltname = "Neil Grover"/>
            <SocialContact pic = {DiscordLogo} platform = "Discord" pltname = "ElvisJohn9"/>
            <SocialContact pic = {GitLogo} platform = "Github" pltname = "groverneil"/>
        </div>
    );
}

export default About;