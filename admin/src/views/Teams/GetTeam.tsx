import React, { FormEvent, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Label, TextBox, useTitle } from '../../App';
import { blueHex } from '../../colors';
import { createTeam, getEventData, joinTeam } from '../../firebase/config';
import { BoxTitle, Buttons, Row, SignOutButton, StandardButton, Title, View } from '../Dashboard';
import { logout } from '../../firebase/login';

const Block = styled.form`
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 36px 28px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
	border-radius: 10px; 
	margin: 5px 20px 0 0;
`;

export const Pill = styled.span`
	padding: 6px 8px;
	color: #fff;
	border-radius: 20px;
	font-size: 12px;
	margin: auto 16px;
	font-weight: 700;
`;


const GetTeam = () => {
	let params = useParams();

	let eventCode = params.eventCode;

	// check for valid log in
	let authToken = sessionStorage.getItem('Auth Token');
	let userId = sessionStorage.getItem('userId');

	let uid = userId ? userId : "";

	const [eventName, setEventName] = useState("Default");
	const [color, setColor] = useState(blueHex)

	async function fetchEventData() {
		if (eventCode) {
			let data = await getEventData(eventCode);

			setEventName(data.name);

			if (data.color)
				setColor(data.color);
		}
		else
			setEventName("Invalid")
	}

	useEffect(() => {
		fetchEventData();
	}, [eventCode])

	useTitle(eventName + " team");

	if (!authToken) {
		return (<Navigate to="/sign-in" />)
	}

	const blocks = [
		{
			title: "Join team",
			onSubmit: async (event: FormEvent) => {
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
					if (data.teamId === '') throw("Please enter Team ID")
					if (data.pin === '') throw("Please enter PIN")
					if (data.pin.length !== 4) throw("PIN is to be 4 digits long")

					if (eventCode) {
						if (await joinTeam(uid, data.teamId, data.pin, eventCode)) {
							alert("You have joined team " + data.teamId)
							window.location.href = '/'
						} 
					}

				}
				catch (error) {
					// @ts-ignore
					alert("Error while joining team: " + error);
				}
			},
			fields: [
				{id: 'teamId', type: 'string', label: 'Team ID', placeholder: '6 letters', length: 6, width: 70},
				{id: 'pin', type: 'number', label: 'PIN', placeholder: '4 digits', length: 4, width: 50},
			],
			callToAction: "Join"
		},
		{
			title: "Create team",
			onSubmit: async (event: FormEvent) => {
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
					if (data.teamName === '') throw("Please enter Team Name")
					if (data.createPin === '') throw("Please enter PIN")
					if (data.confirmPin === '') throw("Please re-enter PIN")
					if (data.createPin.length !== 4) throw("PIN is to be 4 digits long")
					if (data.createPin !== data.confirmPin) throw("PINs do not match")

					if (eventCode) {
						if (await createTeam(uid, data.teamName, data.createPin, eventCode)) {
							alert("You have created a team " + data.teamName)
							window.location.href = '/'
						} 
					}

				} catch (error) {
					// @ts-ignore
					alert("Error while creating team: " + error);
				}
			},
			fields: [
					{id: 'teamName', type: 'text', label: 'Team Name', placeholder: 'Your team name', width: 150},
					{id: 'createPin', type: 'number', label: 'PIN', placeholder: '4-digits', length: 4, width: 50},
					{id: 'confirmPin', type: 'number', label: 'Retype PIN', placeholder: '4-digits', length: 4, width: 50},
			],
			callToAction: "Create"
		}
	]

    if (eventCode)
        return (
        <View>
            <Buttons>
                {/* <StandardButton style={{background: color}}>Account</StandardButton> */}
                <SignOutButton style={{color: color}} onClick={logout}>Sign out</SignOutButton>
            </Buttons>
            <Row><Title style={{color: color}}>Get a team</Title><Pill style={{background: color}}>{eventName}</Pill></Row>
            <Row>
                {blocks.map((block) => {
                return <Block onSubmit={block.onSubmit}>
                    <BoxTitle>{block.title}</BoxTitle>
                    <Row>
                        {block.fields.map((field) => {
                            return (<Field style={{ marginLeft: 0}}>
                                <Label style={{textAlign: 'left'}}>{field.label}</Label>
                                <TextBox 
                                    style={{borderColor: color, width: field.width}} 
                                    id={field.id} 
                                    type={field.type}
                                    maxLength={field.length}
                                    placeholder={field.placeholder}
                                />
                            </Field>)
                        })}
                    </Row>

                    <Row>
                        <StandardButton style={{
                            background: color, 
                            marginLeft: 0, 
                            marginTop: "18px"
                        }}>
                            {block.callToAction}
                        </StandardButton>
                    </Row>
                </Block>})}
            </Row>
        </View>)

    else {
        return (<>Invalid link</>)
    }
}

export default GetTeam;