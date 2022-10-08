import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTitle } from "../../App";
import { greenHex, lightGreenHex, redHex } from "../../colors";
import UserDetails from "../../dataTypes/UserDetails";
import { getCTFUsersData, getUserName, getUsersByTask } from "../../firebase/config";

import Menu from "./components/Menu";
import { Page, Title, Text } from "./Summary";

const LeaderboardView = styled.div`
    background: #fff;
    max-width: 100%;
    margin: 5px auto;
    overflow-x: scroll;
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const LeaderboardTable = styled.table`
    margin: 0;
    padding: 0;
    min-width: 1000px;
    border-collapse: collapse;
    position: relative;
`;

let rowStyle = `
    // display: flex;
    // padding: 10px;
`

const LeaderboardItem = styled.tr`
    ${rowStyle}
`; 

const LeaderboardTop = styled.tr`
    ${rowStyle}
    color: ${greenHex};
    border-bottom: 0.5px solid;
    position: sticky;
    top: 0;
    background: #fff;
`; 

const LeaderboardHeader = styled.th`
    padding: 20px;
    font-weight: 700;
`; 

const LeaderboardCol = styled.td`
    padding: 20px 15px;
    border: none;
`; 

const LeaderboardProblemCol = styled.td`
    // display: flex;
    // flex-direction: column;
    padding: 10px;
    border: none;
`; 

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`; 

const LeaderboardProblemColTime = styled.span`
    font-size: 14px;
`; 

const LeaderboardProblemColTries = styled.span`
    font-size: 12px;
`; 

const returnResponses = (user: any) => {
    return user['responses'];
}

const problemNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const displayTimeString = (timeInt: number) => {
    if (timeInt !== 0) {
        let seconds = (timeInt % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });

        let totalMinutesInt = Math.floor(timeInt / 60);

        let minutesInt = totalMinutesInt % 60;
        
        let minutes = minutesInt.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });

        let hoursInt = Math.floor(totalMinutesInt / 60);

        let hours = hoursInt.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });

        return (hoursInt !== 0 ? hours + ":" + minutes + ":" + seconds : minutes + ":" + seconds)
    }

    return "00:00";
}

function createName(data: UserDetails) {
    return data.firstName.trim() + " " + data.lastName.trim();
}

const Leaderboard = () => {
    const [users, setUsers] = useState<any>();
    const [userNames, setUserNames] = useState<any>();

	let userId = localStorage.getItem('userId');

    async function getUsers() {
        let tempDoc = await getCTFUsersData();

        if (tempDoc) {
            setUsers(tempDoc);
        }
    }

    async function getUserNames() {
        let ctfUserDetails = await getUsersByTask("QfWZrQ1FcfuMWKnOeMld"); 
        let keys = Object.keys(ctfUserDetails);

        var dict: any = {};

        var addPair = function (myKey: string, myValue: string) {
            dict[myKey] = myValue;
        };
        
        keys.map((key) => {
            addPair(key.trim(), createName(ctfUserDetails[key]));
        })

        setUserNames(dict);
    }

    // call function
	useEffect(() => {
		getUsers();
	}, [])

    // call function
	useEffect(() => {
		getUserNames();
	}, [users])

    useTitle("Leaderboard | Capture the Flag");

    if (users) {
        let keys = Object.keys(users);
        let sortedUsers: any[] = [];
        
        keys.map((key) => {            
            let responses = returnResponses(users[key]);

            let time = 0;
            let score = 0;

            responses.map((response: any) => {
                let notMarked = !response.marked && response.marked === false;

                if (response.tries !== 0) {
                    let tempTries = response.tries

                    if (response.correct || notMarked)
                        tempTries -= 1
                    
                    time += tempTries * 30 * 60

                }

                time += response.time;

                if (response.correct) {
                    score += 1;
                }
            })

            if (time !== 0)
                sortedUsers.push({id: key, ...users[key], time: time, score: score});
        })

        sortedUsers.sort((a, b) => {
            if (a.time < b.time) {
              return -1;
            }
            if (a.time > b.time) {
              return 1;
            }
            return 0;
        });

        sortedUsers.sort((a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
        });

        return (<Page>
            <Menu current="leaderboard"/>
            <Title>Leaderboard</Title>
            <Text>A quick look at where you stand, compared to other participants.</Text>
            <LeaderboardView>
            <LeaderboardTable>
                <LeaderboardTop>
                    <LeaderboardHeader>#</LeaderboardHeader>
                    <LeaderboardHeader>Participant</LeaderboardHeader>
                    <LeaderboardHeader>Time</LeaderboardHeader>
                    {problemNumbers.map(problemNumber => {
                        return <LeaderboardHeader>P{problemNumber}</LeaderboardHeader>
                    })}
                    <LeaderboardHeader>Score</LeaderboardHeader>
                </LeaderboardTop>
                {sortedUsers.map((user, index) => {
                    let responses = returnResponses(user);

                    if (user.time !== 0)
                    return (<LeaderboardItem style={userId && userId === user.id ? {background: lightGreenHex} : {}}>
                        <LeaderboardCol>{index + 1}</LeaderboardCol>
                        <LeaderboardCol style={{textAlign: 'left'}}>{userNames ? userNames[user.id] : user.id}</LeaderboardCol>
                        <LeaderboardCol>{displayTimeString(user.time)}</LeaderboardCol>
                        {responses.map((response: any) => {
                            let notMarked = !response.marked && response.marked === false;
                            let color = response.correct ? greenHex : notMarked ? '' : redHex;
                            let time = 0;

                            if (response.tries !== 0) {
                                let timerOffset = response.tries

                                if (response.correct || notMarked)
                                    timerOffset -= 1

                                if (!(response.tries === 1 && response.correct))
                                    time += timerOffset * 30 * 60
                            }

                            time += response.time;

                            return (<LeaderboardProblemCol>
                                { response.time !== 0 ? <FlexColumn>
                                <LeaderboardProblemColTime style={{color: color}}>{displayTimeString(time)}</LeaderboardProblemColTime>
                                <LeaderboardProblemColTries>{response.tries} tr{response.tries !== 1 ? "ies" : "y"}</LeaderboardProblemColTries>
                                </FlexColumn>: null}
                            </LeaderboardProblemCol>);
                        })}
                        <LeaderboardCol>{user.score}</LeaderboardCol>
                    </LeaderboardItem>)
                })}
            </LeaderboardTable>
            </LeaderboardView>
        </Page>)
    } else { 
        return (<Page>
            <Menu current="leaderboard"/>
            <Title>Retrieving data...</Title>
        </Page>)
    }
}

export default Leaderboard;