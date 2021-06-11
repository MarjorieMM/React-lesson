import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ title, onAdd, showAdd }) => {
	// const onClick = () => {
	// 	console.log("click");
	// };

	const location = useLocation();
	return (
		<header className="header">
			{/* <h1>Task Tracker</h1> */}
			<h1>{title}</h1>
			{/* <h1 style={{ color: "red", backgroundColor: "black" }}>{title}</h1> */}
			{/* <h1 style={headingStyle}>{title}</h1> */}
			{/* <h1>{props.title}</h1> */}
			{location.pathname === "/" && (
				<Button
					onClick={onAdd}
					color={showAdd ? "red" : "green"}
					text={showAdd ? "Close" : "Add"}
				/>
			)}
			{/* <Button color="blue" text="Hello" />
			<Button color="red" text="Hello" /> */}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	// required means that we have to pass a prop, doesn't work if there's a defaultProp
};

// CSS in js
// const headingStyle = {
// 	color: "red",
// 	backgroundColor: "black",
// };

export default Header;

// import React, { Component } from "react";

// export default class Header extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Task Tracker with class</h1>
// 			</div>
// 		);
// 	}
// }
