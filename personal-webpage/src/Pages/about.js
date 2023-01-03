import NavigationBar from "../Components/nav";
import SocialContact from "../Components/social-media-contacts";
import LinkedInPic from '../Pics/LinkedIn-icon.png'
import GmailLogo from '../Pics/Gmail-logo.png'
import HandshakeLogo from '../Pics/handshake-logo.png'
import DiscordLogo from '../Pics/Discord-logo.png'

function About(){

    return (

        <div>
            <h1>Contact Information</h1>
            <NavigationBar/>
            <SocialContact pic = {GmailLogo} platform = "Gmail" pltname= "groverneil25" />
            <SocialContact pic = {LinkedInPic} platform = "LinkedIn" pltname = "Neil Grover"/>
            <SocialContact pic = {HandshakeLogo} platform = "Handshake" pltname = "Neil Grover"/>
            <SocialContact pic = {DiscordLogo} platform = "Discord" pltname = "ElvisJohn9"/>
        </div>
    );
}

export default About;