import React from "react";

export const Content = () => {
	const handleNameChange = () => {
		const names = ["bob", "kevin", "dave"];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};

	const handleClick = () => {
		console.log("clicked");
	};
	const handleClick2 = (name) => {
		console.log(`${name} clicked`);
	};
	const handleClick3 = (e) => {
		console.log(e.target.innerText);
	};

	return (
		<main>
			<p onDoubleClick={handleClick}> Hello {handleNameChange()}</p>

			<button onClick={handleClick}>click here</button>
			<button onClick={() => handleClick2("bob")}>click here</button>
			<button onClick={(e) => handleClick3(e)}>click here</button>
		</main>
	);
};

export default Content;
