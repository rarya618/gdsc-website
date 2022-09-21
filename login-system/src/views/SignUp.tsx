import React from 'react';
import { Link } from 'react-router-dom';
import { Bottom, Box, Description, Field, Label, linkStyle, Submit, TextBox } from '../App';

const fields = [
	{id: 'firstName', type: 'text', label: 'First Name', placeholder: 'John'},
	{id: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Doe'},
	{id: 'email', type: 'email', label: 'Email*', placeholder: 'john.doe@example.com', desc: "Email will be the main mode of communication"},
	{id: 'password', type: 'password', placeholder: 'Your password', label: 'Password*', desc: "Password must be at least 8 characters"},
	{id: 'confirmPassword', type: 'password', placeholder: 'Re-enter password', label: 'Confirm Password*', desc: "Re-enter the password"},
]

const SignUp = () => {
	return (
		<Box>
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