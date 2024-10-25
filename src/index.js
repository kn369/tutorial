import React from "react"; // This is ES6 functionality. It is not specific to react.
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
	return (
		<section className="bookList">
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
         <img
            src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg"
            alt=""
            width="200px"
         />
         <h1>I love you to the moon</h1>
         <h4 style={{ color: "#617", fontSize: "0.75rem", marginTop: "0.25rem" }}>
            Amelia Hepworth
         </h4>
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
