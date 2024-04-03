// Filename - ContactUs.jsx
import React from "react";

const ContactUs = () => {
	return (
		<div>
			<h1>Contact Us Page</h1>
			<label for="email">Enter your email:&nbsp;&nbsp;</label>
			<input type="email" id="email" name="email"></input>
			<input type="submit"></input>
		</div>
	);
};

export default ContactUs;
