import React from "react"; // This is ES6 functionality. It is not specific to react.
import ReactDOM from "react-dom";
import "./index.css";

// setup variables
const books = [
	{
		id: 1,
		img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
		author: "Amelia Hepworth",
		title: "I Love You to the Moon and Back",
	},
	{
		id: 2,
		img: "https://m.media-amazon.com/images/I/81SeB1RxPIL._SY522_.jpg",
		author: "Neale Donald Walsch",
		title: "Conversations with God",
	},
	{
		id: 3,
		img: "https://m.media-amazon.com/images/I/51jqSNUjV6L._SY445_SX342_.jpg",
		author: "Dale Carnegie",
		title: "The quick and easy way to effective speaking",
	}
];
const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
	return <h1>{name}</h1>
})
function BookList() {
	return (
		<section className="bookList">
			{books.map((book) => {
				return (
					<Book {...book} key={book.id} />
				)
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, author, title } = props;
	return (
		<article className="book">
			<img src={img} alt="" width="200px" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{/* <p>{let x = 67}</p> // This is not allowed in JSX */}
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
