import React from "react";

const Input = props => {
	return (
		<div className="form__group">
			<input
				type={props.type}
				className="form__input"
				placeholder={props.placeholder}
				id={props.id}
				required
			/>
			<label htmlFor={props.id} className="form__label">
				{props.label}
			</label>
		</div>
	);
};

export default Input;
