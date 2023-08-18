import React, { FormEvent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Box, Description, Field, linkStyle, Label, TextBox, Bottom, Submit, ForgotPasswordContainer, useTitle } from '../../App';
import { Buttons, SignOutButton, StandardButton, View } from '../Dashboard';
import { logout } from '../../firebase/login';
import { createEvent } from '../../firebase/event';
import { redHex } from '../../colors';
import { getUserFirstName } from '../../firebase/config';


// create a date object from datetime input
const createDate = (dateString: string) => {
	let tempDate = dateString.split('-');
	let tempTime = tempDate[2].split('T');
	let tempHours = tempTime[1].split(':');

	let dateTime = {
		day: 0, month: 0, year: 0, 
		hours: 0, minutes: 0, seconds: 0 
	}

	dateTime.year = parseInt(tempDate[0]);
	dateTime.month = parseInt(tempDate[1]);
	dateTime.day = parseInt(tempTime[0]);
	dateTime.hours = parseInt(tempHours[0]);
	dateTime.minutes = parseInt(tempHours[1]);

	return dateTime;
}

const fields = [
	{id: 'name', type: 'text', label: "What's the event called?", placeholder: 'Name of the event'},
	{id: 'dateTime', type: 'datetime-local', label: "When's the event happening?", placeholder: 'Select a date', desc: "Pick a date and time"},
	{id: 'location', type: 'text', label: "Where's the event located?", placeholder: 'Location of the event'},
]

function useQuery() {
	return new URLSearchParams(window.location.search);
}

const AddEvent = () => {
	useTitle("Add Event");
	let next = useQuery().get('next');

	const [userName, setUserName] = useState("");

	// check for valid log in
	let authToken = localStorage.getItem('Auth Token');
	let userId = localStorage.getItem('userId');

	let uid = userId ? userId : "";

	getUserFirstName(uid).then((value) => {
		setUserName(value);
	})

	const addEvent = async (event: FormEvent) => {
		event.preventDefault();

		// @ts-ignore
		const elementsArray = [...event.target.elements];

		const data = elementsArray.reduce((acc, element) => {
			if (element.id) {
				if (element.id === 'dateTime') {
					acc[element.id] = createDate(element.value);
				} else {
					acc[element.id] = element.value;
				}
			}

			return acc;
		}, {});

		try {
			if (data.name === '') throw("Please enter a name")
			if (data.dateTime === '') throw("Please enter a date and time")
			if (data.location === '') throw("Please enter a location")
			
			console.log(data);

			if (await createEvent(data, uid)) {
				console.log("Added events successful.");
				if (next) {
					window.location.href = next;
				} else {
					window.location.href = "/";
				}
			} else {
				throw("Added events failed...");
			}
		}

		catch (error) {
			alert(error);
		}
	}

	if (!authToken) {
		return (<Navigate to="/sign-in?next=/event/add" />)
	}

	return (
		<View>
			<Buttons>
				<StandardButton onClick={() => {window.location.href = '/'}} style={{background: redHex}}>Hi, {userName}!</StandardButton>
				<SignOutButton onClick={logout}>Sign out</SignOutButton>
			</Buttons>
			<Box onSubmit={addEvent}>
				{fields.map(field => {
					return (<Field>
						<Label>{field.label}</Label>
						<TextBox id={field.id} type={field.type} placeholder={field.placeholder} />
						{field.desc ? <Description>{field.desc}</Description> : null}
					</Field>)
				})}
				<Bottom>
					<p></p>
					<Submit>Publish</Submit>
				</Bottom>
			</Box>
		</View>
	)
}

export default AddEvent;