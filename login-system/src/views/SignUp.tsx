import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Bottom, Box, Description, Field, HalfField, Label, linkStyle, Submit, TextBox } from '../App';
import { firebaseSignUp } from '../firebase/config';

const fields = [
	{id: 'firstName', type: 'text', label: 'First Name', placeholder: 'John', half: true},
	{id: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Doe', half: true},
	{id: 'email', type: 'email', label: 'Email*', placeholder: 'john.doe@example.com', desc: "Email will be the main mode of communication"},
	{id: 'password', type: 'password', placeholder: 'Your password', label: 'Password*', desc: "Password must be at least 8 characters"},
	{id: 'passwordConf', type: 'password', placeholder: 'Re-enter password', label: 'Confirm Password*', desc: "Re-enter the password"},
]

const SignUp = () => {
	const signUp = async (event: FormEvent) => {
		event.preventDefault();

		// @ts-ignore
		const elementsArray = [...event.target.elements];

		const data = elementsArray.reduce((acc, element) => {
			if (element.id) {
				acc[element.id] = element.value;
			}

			return acc;
		}, {});

		try {
			if (data.email === '') throw("Please enter an email")
			if (data.firstName === '') throw("Please enter a first name")
			if (data.lastName === '') throw("Please enter a last name")
			if (data.password === '') throw("Please enter a password")
			if (data.passwordConf === '') throw("Please confirm your password")
			if (data.password.length < 8) throw("Your password should be at least 8 characters long")
			if (data.password !== data.passwordConf) throw("Passwords do not match")
				
			if (await firebaseSignUp(data.firstName, data.lastName, data.email, data.password)) {
				console.log("Sign up successful.");
				window.location.href = '/dashboard';
			} else {
				console.log("Sign up failed.");
			}
		}
		catch (error) {
			// @ts-ignore
			alert(error);
		}

}
	return (
		<Box onSubmit={signUp}>
			{fields.map(field => {
				return (<Field>
					<Label>{field.label}</Label>
					<TextBox id={field.id} placeholder={field.placeholder} type={field.type} />
					{field.desc ? <Description>{field.desc}</Description> : null}
				</Field>)
			})}
			<Bottom>
				<Link style={linkStyle} to='/'>Have an account?</Link>
				<Submit>Sign up</Submit>
			</Bottom>
		</Box>
	)
}

export default SignUp;