import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Footer from "./Footer";

import InputRadio from "../components/InputRadio";
import Form from "../components/Form";

import "../styles/Contact.scss";
const FormSection = () => {
	return (
		<PageWrapper>
			<div className="contact">
				<div className="contact__form">
					<Form />
					{/* <form className="form"> */}
					{/* <h2 className="form__heading">Contact</h2> */}
					{/*
					 */}
					{/* <textarea name="textarea"></textarea>
						<div className="form__radio-container">
							<InputRadio name="gender" type="radio" sex="Man" />
							<InputRadio name="gender" type="radio" sex="Woman" />
						</div>
					
					</form> */}
				</div>
				<Footer />
			</div>
		</PageWrapper>
	);
};

export default FormSection;
