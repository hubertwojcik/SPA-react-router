import React from "react";

const InputRadio = props => {
	return (
		<div className="form__radio-group">
			<input
				type={props.type}
				name={props.name}
				className="form__radio-input"
			/>
			<label htmlFor={props.name} className="form__radio-label">
				{/* <span className="form__radio-button"></span> */}
				{props.sex}
			</label>
		</div>
	);
};

export default InputRadio;
