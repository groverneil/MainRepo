import SocialContact from "../Components/social-media-contacts";
import LinkedInPic from '../Pics/LinkedIn-icon.png'
import GmailLogo from '../Pics/Gmail-logo.png'
import HandshakeLogo from '../Pics/handshake-logo.png'
import GitLogo from '../Pics/gitlogo.png'

function About(){

    return (

        // This contains all my social media contact informations.
        // We use a simple card based container to display the social media contacts.

        <div className="about_main" id="end">
            <SocialContact pic = {GmailLogo} platform = "Gmail" pltname= "groverneil25" link = "mailto:groverneil25@gmail.com"/>
            <SocialContact pic = {LinkedInPic} platform = "LinkedIn" pltname = "Neil Grover" link = "https://www.linkedin.com/in/neil-grover-29678119a"/>
            <SocialContact pic = {HandshakeLogo} platform = "Handshake" pltname = "Neil Grover" link = "https://app.joinhandshake.com/stu/users/33540151?ref=user-show-discover-students"/>
            <SocialContact pic = {GitLogo} platform = "Github" pltname = "groverneil" link = "https://github.com/groverneil"/>

            {/* All links open in new pages */}
        </div>
    );
}

export default About;