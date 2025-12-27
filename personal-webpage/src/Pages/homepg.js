import ContentBox from "../Components/content-b";
import ME from '../Pics/NEIL-PIC.png';
import SkillsSlideshow from "../Components/skillsSlideshow";


function AboutPage(){

    return (

        <div>
            <ContentBox
                pic={ME}
                title="About Me"
                content="Neil Grover   M.Sc. Computer Science student at UC San Diego (B.Sc. from UC Santa Cruz, Applied Math Minor). Experienced in AI engineering, machine learning, and full-stack development. Passionate about building scalable AI systems, cloud infrastructure, and impactful software solutions."
                isPersonal={true}
            />
            <SkillsSlideshow />
        </div>
    );
}

export default AboutPage;