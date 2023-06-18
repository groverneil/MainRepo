import ContentBox from "../Components/content-b";
import ME from '../Pics/NEIL-PIC.jpeg';
import ReactLogo from '../Pics/react-logo.png';
import porPic from '../Pics/pexels-vlada-karpovich-4452380.jpg';


function HomePage(){

    return (

        <div>
            <ContentBox pic = {ME} title = "About Me" content = "My name is Neil Grover, a second year college student at UCSC pusuing a bachelors in Computer Science with a minor in Applied Mathematics. I am looking for internship opportunities for undergraduate students for the summer 2023 time period. I hope to complete my degree by 2025 with a focus on AI and machine learning and plan to pusue a career in this field after I graduate." />
            <ContentBox pic = {porPic} title = "Purpose of the Site" content = "This site is dedicated to be my personal portfolio to organise and showcse some of my best work. It contains information about some projects that I have worked on (not neccessarily limited to the field of computer science). Please head to the Projects link above to see some of my work! You can also visit the Contact page to check out some of my other social media presence." />
            <ContentBox pic = {ReactLogo} title = "How this Site was Made" content = "This site was coded manually as a React JS project. The project started using the create-react-app command followed up by a clean up of all extra files. Then the project was then broken up into the following parts: the three pages, the components, the pictures, the main stylesheet and the main JS files. The site has features such as static routing would also contain some interactive features in the near future! Stay tuned for those."/>
        </div>
    );
}

export default HomePage;