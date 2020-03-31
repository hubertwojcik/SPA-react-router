import React, { useState } from "react";

const Form = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [isChecked, setIsChecked] = useState(false);

	const submitHandler = e => {
		e.preventDefault();
		setUserName("");
		setEmail("");
		setIsChecked(false);
	};

	return (
		<form className="form">
			<h2 className="form__heading">Contact</h2>
			<div className="form__group">
				<input
					type="text"
					className="form__input"
					placeholder="Your name"
					id="text"
					onChange={e => {
						setUserName(e.target.value);
					}}
					required
				/>
				<label htmlFor="text" className="form__label">
					Your full name
				</label>
			</div>
			<div className="form__group">
				<input
					type="email"
					className="form__input"
					placeholder="Your email"
					id="email"
					onChange={e => {
						setEmail(e.target.value);
					}}
					required
				/>
				<label htmlFor="email" className="form__label">
					Your email
				</label>
			</div>
			<div className="form__checkbox">
				<input
					type="checkbox"
					className="form__checkbox-input"
					id="checkbox"
					checked={isChecked}
					onChange={() => {
						setIsChecked(!isChecked);
					}}
					required
				/>
				<label htmlFor="checkbox" className="form__label-checkbox">
					I am sure
				</label>
			</div>

			<button type="submit" className="form__button" onSubmit={submitHandler}>
				Send
			</button>
		</form>
	);
};

export default Form;
