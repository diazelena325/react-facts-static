import React from "react";

export default function Main(props) {
	return (
		<main className={props.darkMode ? "dark" : ""}>
			<div className="pad_left">
				<h1 className="main--title">Fun facts about Elena</h1>
				<ul className="main--facts">
					<li>
						Multilingual: Fluent in English, Spanish, currently learning
						Japanese and Korean.
					</li>
					<li>
						Agile Developer: Quick learner, adaptable to new technologies.
					</li>
					<li>Design Skills: Google UX certified, skilled in Figma.</li>
					<li>Tech Stack: React, Javascript, HTML, CSS</li>
					<li>
						Diverse Interests: Inline skating, photography, digital art, Korean
						& Japanese culture and media.
					</li>
				</ul>
			</div>
		</main>
	);
}
