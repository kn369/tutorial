import React from "react"; // This is ES6 functionality. It is not specific to react.
import ReactDOM from "react-dom";
import "./index.css";

// setup variables
const firstBook = {
	img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
	author: "Amelia Hepworth",
	title: "I Love You to the Moon and Back",
};

const secondBook = {
	img: "https://m.media-amazon.com/images/I/81SeB1RxPIL._SY522_.jpg",
	title: "Conversations with God",
};
function BookList() {
	return (
		<section className="bookList">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
					magnam aliquid quae perspiciatis suscipit similique! Aliquid debitis,
					sint incidunt neque qui repudiandae deserunt minima ipsum ducimus non.
					Nesciunt adipisci totam molestias officiis excepturi deleniti
					molestiae assumenda quo, accusantium fugiat incidunt, eius sit aut
					neque! Nesciunt iure laborum aperiam veniam dolore!
				</p>
			</Book>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	);
}

const Book = (props) => {
	const { img, author, title, children } = props;
	return (
		<article className="book">
			<img src={img} alt="" width="200px" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{/* <p>{let x = 67}</p> // This is not allowed in JSX */}
			{children}
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));

// function Greeting() {
// 	return (
//       <div>
//          <Person />
//          <Message />
//       </div>
// 	);
// }

// const Person = () => {
//    return <h2>John Doe</h2>;
// }

// const Message = () => {
//    return <p>this is my message</p>;
// }
// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "Hello World")
// 	);
// };
