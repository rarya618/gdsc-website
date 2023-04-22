import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Description, Field, linkStyle, Label, TextBox, Bottom, Submit, ForgotPasswordContainer, useTitle } from '../App';
import { googleSignIn } from '../firebase/config';

function useQuery() {
	return new URLSearchParams(window.location.search);
}

const GoogleSSO = () => {
	useTitle("Google SSO");
	let next = useQuery().get('next');

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
			
			if (await googleSignIn()) {
				console.log("Sign in successful.");
				if (next) {
					window.location.href = next;
				} else {
					window.location.href = "/";
				}
			} else {
				alert("Sign in failed...");
			}
		}

		catch (error) {
			alert(error);
		}
	}
	return (
		<Submit onSubmit={signIn}>Sign In with Google</Submit>
	)
}

export default GoogleSSO;