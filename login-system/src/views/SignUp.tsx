import React from 'react';
import { Link } from 'react-router-dom';
import { Bottom, Box, Description, Field, Label, linkStyle, Submit, TextBox } from '../App';

const fields = [
	{id: 'firstName', label: 'First Name', placeholder: 'John'},
	{id: 'lastName', label: 'Last Name', placeholder: 'Doe'},
	{id: 'email', label: 'Email*', desc: "Email will be the main mode of communication"},
	{id: 'password', label: 'Password*', desc: "Password must be at least 8 characters"},
	{id: 'confirmPassword', label: 'Confirm Password*', desc: "Re-enter the password"},
]

const SignUp = () => {
	return (
		<Box>
			{fields.map(field => {
				return (<Field>
					<Label>{field.label}</Label>
					{field.placeholder ? <TextBox id={field.id} placeholder={field.placeholder} /> : <TextBox id={field.id} />}
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