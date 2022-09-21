import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Description, Field, linkStyle, Label, TextBox, Bottom, Submit, ForgotPasswordContainer } from '../App';

const fields = [
	{id: 'email', label: 'Email*'},
	{id: 'password', label: 'Password*', desc: "Password must be at least 8 characters"},
]

const SignIn = () => {
	return (
		<Box>
			{fields.map(field => {
				return (<Field>
					<Label>{field.label}</Label>
					<TextBox id={field.id} />
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