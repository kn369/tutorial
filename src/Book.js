import React from "react";

const Book = (props) => {
	// attribute, eventHandler
	// onClick, onMouseOver
	const { img, author, title } = props;
	const clickHandler = (e) => {
		alert("Hello World");
	};
	const complexExample = (author) => {
		console.log(author);
	};
	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt="" width="200px" />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Reference Example
			</button>
			<button onClick={() => complexExample(author)}>Complex Example</button>
			{/* <p>{let x = 67}</p> // This is not allowed in JSX */}
		</article>
	);
};

export default Book;
