import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Description, Field, linkStyle, Label, TextBox, Bottom, Submit, ForgotPasswordContainer, useTitle } from '../App';
import { firebaseSignIn } from '../firebase/config';

const fields = [
	{id: 'email', type: 'email', label: 'Email*', placeholder: 'john.doe@example.com'},
	{id: 'password', type: 'password', label: 'Password*', placeholder: 'Your password', desc: "Password must be at least 8 characters"},
]

const SignIn = () => {
	useTitle("Sign in");

	const signIn = async (event: FormEvent) => {
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
			if (data.password === '') throw("Please enter a password")
			if (data.password.length < 8) throw("Your password should be at least 8 characters long")
				
			if (await firebaseSignIn(data.email, data.password)) {
				console.log("Sign in successful.");
				window.location.href = "/";
			} else {
				alert("Sign in failed...");
			}
		}

		catch (error) {
			alert(error);
		}
	}
	return (
		<Box onSubmit={signIn}>
			{fields.map(field => {
				return (<Field>
					<Label>{field.label}</Label>
					<TextBox id={field.id} type={field.type} placeholder={field.placeholder} />
					{field.desc ? <Description>{field.desc}</Description> : null}
				</Field>)
			})}
			<ForgotPasswordContainer>
				<Link style={linkStyle} to='#'>Forgot password?</Link>
			</ForgotPasswordContainer>
			<Bottom>
				<Link style={linkStyle} to='/sign-up'>Create account</Link>
				<Submit>Sign in</Submit>
			</Bottom>
		</Box>
	)
}

export default SignIn;