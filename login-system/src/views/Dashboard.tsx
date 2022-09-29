import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTitle } from '../App';

import { blueHex } from '../colors';
import { UserFields } from '../dataTypes/User';
import { getUser, logout } from '../firebase/config';

const Buttons = styled.div`
	position: fixed;
	top: 25px;
	right: 30px;
`;

const buttonStyle = `
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 14px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	margin: 0 10px;
	cursor: pointer;
`;

const AccountButton = styled.button`
	${buttonStyle}
  background: ${blueHex};
  color: #fff;
`;

const SignOutButton = styled.button`
	${buttonStyle}
  color: ${blueHex};
  background: #fff;
`;

const Title = styled.h1`
	color: ${blueHex};
	text-align: left;
`;

const View = styled.div`
	display: flex;
	flex-direction: column;
	margin: 50px 30px;
	width: 100%;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 40px 30px;
	width: calc(100% - 60px);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
	border-radius: 10px; 
`;

const BoxTitle = styled.h2`
	color: #545454;
	text-align: left;
	margin: 0 0 10px 0;
	font-weight: 400;
`;

const Text = styled.p``;

const Dashboard = () => {
	const [user, setUser] = useState<UserFields>();
	useTitle("Dashboard");

	// check for valid log in
	let authToken = sessionStorage.getItem('Auth Token');
	let uid = sessionStorage.getItem('userId');

	async function getUserData() {
		if (uid) {
			// @ts-ignore
			let tempDoc: UserFields = await getUser(uid);

			if (tempDoc) {
				setUser(tempDoc);
			}
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
					{/* <AccountButton>Account</AccountButton> */}
					<SignOutButton onClick={logout}>Sign out</SignOutButton>
				</Buttons>
				<Title>Welcome, {user.firstName}!</Title>
				<Box>
					<BoxTitle>Upcoming tasks</BoxTitle>
					<Text>No tasks available</Text>
				</Box>
			</View>
		)
	else 
		return (
			<View>
				<Title>Searching for user...</Title>
			</View>
		)
	
}

export default Dashboard;