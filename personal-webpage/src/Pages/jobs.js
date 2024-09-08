import JobContainer from "../Components/job-content";
import dabbl from "../Pics/dabbl.png";

function Jobs() {
    return (
        <div id="projId">
        <JobContainer
            pic={dabbl}
            title="Dabbl: Software Engineering Intern"
            content="Dabbl is a Ed-tech startup that aims to help students with college admissions. I work there as an ML intern, taking on tasks like RAG, prompt-engineering, recommendation systems, vector databases and much more. My main contributions include the current news backend and the RAG generation for college recommendations."
        />
        </div>
    );
}

export default Jobs;