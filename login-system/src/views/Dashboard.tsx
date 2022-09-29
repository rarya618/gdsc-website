import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { addToList, useTitle } from '../App';

import { blueHex } from '../colors';
import Task from '../dataTypes/Task';
import UserDetails from '../dataTypes/UserDetails';
import { getTask, getTasks, getUser, logout, updateTasksInUser, updateUsersInTask } from '../firebase/config';
import { buttonStyle } from '../objectStyles';

const Buttons = styled.div`
	position: fixed;
	top: 25px;
	right: 30px;
`;

const StandardButton = styled.button`
	${buttonStyle}
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

const Text = styled.p`
	margin: 20px 0 10px 0;
`;

const TaskPane = styled.div`
	display: flex;
	flex-direction: row;
`;

const TaskBox = styled.div`
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
	padding: 26px 22px;
	margin: 10px 10px 0 0;
	border-radius: 5px;
`;

const TaskTitle = styled.h2`
	margin: 0 30px 0 0;
	text-align: left;
`;

const enrollInTask = async (taskId: string, uid: string) => {
	let user = await getUser(uid);
  let task = await getTask(taskId);

	let newTasks = addToList(user.tasks, taskId);
	let newUsers = addToList(task.users, uid);

	await updateTasksInUser(uid, newTasks)
	.catch((err) => {
		alert(err.message);
	})

	await updateUsersInTask(taskId, newUsers)
	.catch((err) => {
		alert(err.message);
	})

	window.location.reload();
}

const Dashboard = () => {
	const [user, setUser] = useState<UserDetails>();
	const [tasks, setTasks] = useState<Task[]>([]);

	useTitle("Dashboard");

	// check for valid log in
	let authToken = sessionStorage.getItem('Auth Token');
	let userId = sessionStorage.getItem('userId');

	let uid = userId ? userId : "";

	async function getUserData() {
		if (userId) {
			let tempDoc = await getUser(uid);

			if (tempDoc) {
				setUser(tempDoc);
				await fetchTasks();
			}
		} 
	}

	async function fetchTasks() {
		let tempDoc = await getTasks();

		if (tempDoc) {
			setTasks(tempDoc);
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
				<Box>
					<BoxTitle>Upcoming tasks</BoxTitle>
					{tasks.length != 0 ? 
					<TaskPane>
						{tasks.map(task => {
							let color = task.color ? task.color : blueHex;
							return <TaskBox>
								<TaskTitle>{task.name}</TaskTitle>
								<Text style={{textAlign: 'left'}}>{task.description}</Text>
									{!user.tasks.includes(task.id) ? <StandardButton 
									style={{
										background: color, 
										float: 'left', 
										marginLeft: 0, 
										marginTop: '18px'
									}}
									onClick={async () => {
										await enrollInTask(task.id, uid)
									}}>
									{task.callToAction}
								</StandardButton> : null}
								<Text style={{fontSize: 14, textAlign: 'left', margin: "39px 0 0 0"}}>{task.users.length} participant{task.users.length != 1 ? "s" : ""}</Text>
							</TaskBox>
						})}
					</TaskPane> : 
					<Text>No tasks available</Text>}
				</Box>
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