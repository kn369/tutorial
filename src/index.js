import React from "react"; // This is ES6 functionality. It is not specific to react.
import ReactDOM from "react-dom";
import "./index.css";

import { books } from "./books.js";
import Book from "./Book";
import { greeting } from "./testing/testing";

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
	return <h1>{name}</h1>
})
function BookList() {
	console.log(greeting);
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
