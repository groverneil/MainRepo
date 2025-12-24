import ExpBox from "../Components/exp-content"
import ZyraLogo from "../Pics/zyra-logo.png"
import DabblLogo from "../Pics/dabbl_logo.webp"
import TacsVideo from "../Pics/t2m_mp4.mp4"

function Experience() {
    return (
        <div id="expId">
            <ExpBox
                title="AI Engineer"
                organization="Zyra AI"
                dates="Dec 2024 – Present"
                content="Building full-stack agentic AI applications with multi-agent workflows and document artifact management. Designing and deploying AI chatbots that achieve 95% accuracy on explainability metrics. Automating data ingestion pipelines using LangChain and custom tooling, while implementing scalable RAG workflows with AstraDB and Elasticsearch achieving 10x speedups in LLM tool calls and 3x faster data processing through optimized database schemas and multithreaded scraping."
                media={ZyraLogo}
                mediaType="image"
            />

            <ExpBox
                title="Research Assistant"
                organization="TACS Lab, UCSC"
                dates="Apr 2025 – Present"
                content="Building diffusion models and U-Net architectures to upscale ERA5 weather data into high-resolution HRRR forecasts. Training models on the DERECHO HPC cluster with distributed training, checkpointing, and gradient clipping. Collaborating with Rice University researchers on Variational Auto-Encoders to simulate battery leaching efficiency through real-time activation maps, optimizing code to run 50+ configurations in under a minute."
                media={TacsVideo}
                mediaType="video"
            />

            <ExpBox
                title="Machine Learning Intern"
                organization="dabbL"
                dates="Sept 2023 – Dec 2024"
                content="Developed ML pipelines using Retrieval-Augmented Generation with ChromaDB, PGVector, and Llama 3. Designed a voice-based chat agent for college essay review using OpenAI Whisper and GTTS. Engineered a scalable FastAPI/PostgreSQL backend on EC2, automating daily ingestion of 30+ college admission news items via Google SerpAPI and cron jobs. Integrated MLOps workflows for deployment and automated testing with GitHub Actions and Pytest."
                media={DabblLogo}
                mediaType="image"
            />
        </div>
    )
}

export default Experience

