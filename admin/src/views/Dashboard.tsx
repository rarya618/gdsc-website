import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { addToList, useTitle } from '../App';

import { redHex } from '../colors';
import Hotspot from '../dataTypes/Hotspot';
import Team from '../dataTypes/Team';
import UserDetails from '../dataTypes/UserDetails';
import { checkIfUserOwnsTeam, getHotspot, getHotspots, getTeamsByUser, getUser, updateHotspotsInUser, updateUsersInHotspot } from '../firebase/config';
import { buttonStyle } from '../objectStyles';
import { Pill } from './Teams/GetTeam';
import { logout } from '../firebase/login';

export const Buttons = styled.div`
	position: fixed;
	top: 25px;
	right: 30px;
`;

const getColor = (id: string) => {
	if (id === "gameJam") {
		return "#EA4335"
	}

	return redHex;
}

const getText = (id: string) => {
	if (id === "gameJam") {
		return "Game Jam"
	}

	return id;
}

export const StandardButton = styled.button`
	${buttonStyle}
	color: #fff;
`;

export const SignOutButton = styled.button`
	${buttonStyle}
	color: ${redHex};
	background: #fff;
`;

export const Title = styled.h1`
	color: ${redHex};
	text-align: left;
`;

export const View = styled.div`
	display: flex;
	flex-direction: column;
	margin: 50px 30px;
	width: 100%;
`;

export const Row = styled.div`
    display: flex;
`;


const Box = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 40px 30px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
	border-radius: 10px; 
	margin: 0 30px 30px 0;
`;

export const BoxTitle = styled.h2`
	color: #545454;
	text-align: left;
	margin: 0 0 10px 0;
	font-weight: 400;
`;

const Text = styled.p`
	margin: 20px 0 10px 0;
`;

const TaskPane = styled.div`
	display: flex;
	flex-direction: row;
`;

const TaskBox = styled.div`
	padding: 26px 22px;
	margin: 10px 10px 0 0;
	border: solid 1px;
	border-radius: 5px;
`;

const TaskTitle = styled.h2`
	margin: 0 30px 0 0;
	text-align: left;
`;

const joinHotspot = async (hotspotId: string, uid: string) => {
	let user = await getUser(uid);
	let hotspot = await getHotspot(hotspotId);

	let newHotspots = addToList(user.hotspots, hotspotId);
	let newUsers = addToList(hotspot.users, uid);

	await updateHotspotsInUser(uid, newHotspots)
	.catch((err) => {
		alert(err.message);
	})

	await updateUsersInHotspot(hotspotId, newUsers)
	.catch((err) => {
		alert(err.message);
	})

	window.location.reload();
}

const Dashboard = () => {
	const [user, setUser] = useState<UserDetails>();
	const [hotspots, setHotspots] = useState<Hotspot[]>([]);
	const [teams, setTeams] = useState<Team[]>([]);

	useTitle("Dashboard");

	// check for valid log in
	let authToken = localStorage.getItem('Auth Token');
	let userId = localStorage.getItem('userId');

	let uid = userId ? userId : "";

	async function getUserData() {
		if (userId) {
			let tempDoc = await getUser(uid);

			if (tempDoc) {
				setUser(tempDoc);
				await fetchHotspots();
				await fetchTeams();
			}
		} 
	}

	async function fetchHotspots() {
		let tempDoc = await getHotspots();

		if (tempDoc) {
			setHotspots(tempDoc);
		}
	}

	async function fetchTeams() {
		let tempDoc = await getTeamsByUser(uid);

		if (tempDoc) {
			setTeams(tempDoc);
		}
	}

	// call function
	useEffect(() => {
		getUserData();
	}, [uid])

	if (!authToken) {
		return (<Navigate to="/sign-in" />)
	}
	
	if (user)
		return (
			<View>
				<Buttons>
					{/* <StandardButton style={{background: blueHex}}>Account</StandardButton> */}
					<SignOutButton onClick={logout}>Sign out</SignOutButton>
				</Buttons>
				<Title>Welcome, {user.firstName}!</Title>
				<Row>
					<Box>
						<BoxTitle>My teams</BoxTitle>
						{teams.length != 0 ? 
						<TaskPane>
							{teams.map(team => {
								let color = getColor(team.type);
								return <TaskBox style={{borderColor: color, position: "relative"}}>
									<TaskTitle style={{color: color}}>{team.name}</TaskTitle>
									<Text style={{textAlign: 'left'}}>Team ID: {team.id}</Text>
									<Text style={{textAlign: 'left'}}>PIN: {team.pin}</Text>
									<Pill style={{
										textAlign: 'left', 
										background: color, 
										position: "absolute",
										bottom: 20,
										right: 0
									}}>{getText(team.type)}</Pill>
									<Text style={{fontSize: 14, textAlign: 'left', margin: "39px 0 0 0"}}>{team.members.length} member{team.members.length != 1 ? "s" : ""}</Text>
								</TaskBox>
							})}
						</TaskPane> : 
						<Text>None for now</Text>}
					</Box>

					<Box>
						<BoxTitle>Hotspots</BoxTitle>
						{hotspots.length != 0 ? 
						<TaskPane>
							{hotspots.map(hotspot => {
								let color = hotspot.color ? hotspot.color : redHex;
								return <TaskBox style={{borderColor: color}}>
									<TaskTitle style={{color: color}}>{hotspot.name}</TaskTitle>
									<Text style={{textAlign: 'left'}}>{hotspot.description}</Text>
										{!user.hotspots.includes(hotspot.id) ? <StandardButton style={{
											background: color, 
											float: 'left', 
											marginLeft: 0, 
											marginTop: '18px'
										}}
										onClick={async () => {
											await joinHotspot(hotspot.id, uid);
										}}>
										{hotspot.callToAction}
									</StandardButton> : hotspot.postEnrolment ? 
										<StandardButton style={{
											background: '#fff',
											color: color, 
											float: 'left', 
											marginLeft: 0, 
											marginTop: '18px'
										}}
										onClick={async () => {
											// @ts-ignore
											window.location.href = hotspot.postEnrolment.link ? hotspot.postEnrolment.link : '/';
										}}
										>
											{hotspot.postEnrolment.display}
										</StandardButton> :
										null}
								</TaskBox>
							})}
						</TaskPane> : 
						<Text>No hotspots available</Text>}
					</Box>
				</Row>
			</View>
		)
	else 
		return (
			<View>
				<Title>Retrieving user...</Title>
			</View>
		)
	
}

export default Dashboard;