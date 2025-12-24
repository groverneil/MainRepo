import React, { useState, useEffect, useRef } from "react";
import "./skillsSlideshow.css"; // Create this CSS file for styling

const skillsData = [
	{
		category: "Languages",
		items: ["Python", "C/C++", "ReactJS", "TypeScript", "SQL"],
	},
	{
		category: "ML/AI",
		items: [
			"PyTorch",
			"scikit-learn",
			"LangChain",
			"NLTK",
			"Pandas",
			"NumPy",
			"NLP",
			"OpenCV",
			"CUDA",
			"MPI",
			"GenAI",
			"RAG",
			"AI Agents",
			"LLMs",
		],
	},
	{
		category: "Web",
		items: [
			"FastAPI",
			"Flask",
			"Node.js",
			"Express",
			"ReactJS",
			"RESTful APIs",
			"HTML/CSS",
		],
	},
	{
		category: "Cloud/Tools",
		items: [
			"AWS",
			"AstraDB",
			"ChromaDB",
			"Elasticsearch",
			"Redis",
			"Docker",
			"Git",
			"Jira",
			"Bitbucket",
			"MLOps",
			"CI/CD",
		],
	},
];

function SkillsSlideshow() {
	const [index, setIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);
	const timeoutRef = useRef(null);
	const fadeTimeoutRef = useRef(null);
	const isFadingRef = useRef(false);

	const changeSlide = (newIndexFn) => {
		if (isFadingRef.current) return; // Prevent rapid clicks during animation
		isFadingRef.current = true;
		setIsFading(true);
		fadeTimeoutRef.current = setTimeout(() => {
			setIndex(newIndexFn);
			setIsFading(false);
			isFadingRef.current = false;
		}, 300); // Match CSS transition duration
	};

	const nextSlide = () => changeSlide((prev) => (prev + 1) % skillsData.length);
	const prevSlide = () => changeSlide((prev) => (prev - 1 + skillsData.length) % skillsData.length);

	useEffect(() => {
		timeoutRef.current = setTimeout(nextSlide, 3500);
		return () => {
			clearTimeout(timeoutRef.current);
			clearTimeout(fadeTimeoutRef.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return (
		<div className="skills-slideshow">
			<div className={`skills-content${isFading ? " fading" : ""}`}>
				<div className="skills-header">
					<button className="arrow" onClick={prevSlide}>
						&#8592;
					</button>
					<span className="category-title">{skillsData[index].category}</span>
					<button className="arrow" onClick={nextSlide}>
						&#8594;
					</button>
				</div>
				<ul className="skills-list">
					{customOrderSkills(skillsData[index].items).map((skill, i) =>
						skill ? <li key={i}>{skill}</li> : <li key={i} style={{visibility: "hidden"}}>&nbsp;</li>
					)}
				</ul>
			</div>
			<div className="skills-tabs">
				{skillsData.map((cat, i) => (
					<span
						key={cat.category}
						className={`tab-dot${i === index ? " active" : ""}`}
						onClick={() => changeSlide(() => i)}
					/>
				))}
			</div>
		</div>
	);
}

function customOrderSkills(skills, columns = 5) {
	const colOrder = [1, 3, 2, 0, 4]; // 2->4->3->1->5 (0-based)
	let result = [];
	let idx = 0;
	while (idx < skills.length) {
		const rowItems = skills.slice(idx, idx + columns);
		let row = Array(columns).fill("");
		if (rowItems.length === 1) {
			row[2] = rowItems[0]; // Place single item in the center
		} else {
			for (let i = 0; i < rowItems.length; i++) {
				row[colOrder[i]] = rowItems[i];
			}
		}
		result.push(...row);
		idx += columns;
	}
	return result;
}

export default SkillsSlideshow;