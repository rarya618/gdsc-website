import React, { FormEvent, useEffect, useState } from 'react';

import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useTitle } from '../../App';
import { greenHex } from '../../colors';
import { getCTFQuestion, getCTFUserResponse, submitCTFResponse, getQuestionURLfromStorage } from '../../firebase/config';
import Menu from './components/Menu';
import { displayTimeString } from './Leaderboard';

const Problem = styled.div`
    margin: auto;
    background: #fff;
    box-shadow: 0 0 100px 10px rgba(0, 0, 0, 0.1);
    min-width: 520px;
    max-width: 60%;
    border-radius: 6px;
`;

const QuestionArea = styled.div`
    padding: 30px 30px 20px 30px;
    position: relative;
`;

const Title = styled.h1`
    text-align: left;
    margin: 0;
    margin-bottom: 18px;
    color: ${greenHex};
`;

const Text = styled.p`
    text-align: left;
    line-height: 2;
    margin: 0;
    margin-bottom: 12px;
`;

const Answer = styled.form`
    background: #EBF6EE;
    padding: 0 30px;
    display: flex;
`;

const AnswerInput = styled.input`
    border: none;
    text-align: left;
    background: transparent;
    padding: 24px 0;
    font-size: 16px;
    color: ${greenHex};
    width: 70%;
`;

let buttonStyle = `
    border: none;
    border-radius: 3px;
    font-size: 16px;
    margin: auto;
    padding: 10px 14px;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    ${buttonStyle}
    background: ${greenHex};
    color: #fff;
    margin-right: -10px;
`;

const Bottom = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 30px;
    display: flex;
`;

const BottomText = styled.p`
    text-align: left;
    margin: 0;
    margin-right: 20px;
`;

const Buttons = styled.div`
    position: fixed;
    right: 30px;
    bottom: 24px;
`;

const Button = styled.button`
    ${buttonStyle}
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    margin-left: 20px;
`;

const CenterText = styled.h1`
    margin: auto;
`;

const IndividualProblem = () => {
    let params = useParams();

	let authToken = localStorage.getItem('authToken');
	let userId = localStorage.getItem('userId');

    let problemIdFromQuery = params.problemId;

    let currentTimeStamp = Date.now();

    // Formatted as MM/DD/YYYY hh:mm:ss
    const fullExpiryTime = '10/09/2022 09:00:00';

    const [expiryDate, expiryTime] = fullExpiryTime.split(' ');

    const [month, day, year] = expiryDate.split('/');
    const [hours, minutes, seconds] = expiryTime.split(':');

    const expiryTimeObject = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

    const expiryTimeStamp = expiryTimeObject.getTime();

	useTitle("Problem " + problemIdFromQuery + " | Capture the Flag"); 

    const [problem, setProblem] = useState<any>();
    const [userResponse, setUserResponse] = useState<any>();

    const [fileUrl, setFileUrl] = useState("");

    async function getProblem() {
        if (userId) {
            let tempDoc = await getCTFQuestion(problemId);

            if (tempDoc) {
                setProblem(tempDoc);
                await getUrl(tempDoc.fileName);
                await getUserResponse();
            }
        } 
    }

    async function getUrl(fileName: string) {
        await getQuestionURLfromStorage(fileName).then(response => {
            if (response) setFileUrl(response)
        });
        
    }

    async function getUserResponse() {
        if (userId) {
            let tempDoc = await getCTFUserResponse(userId, problemId);

            if (tempDoc) {
                setUserResponse(tempDoc);
            }
        } 
    }

    // call function
	useEffect(() => {
		getProblem();
	}, [problemIdFromQuery])

    let time = 0;

    // increment time
    if (userResponse) {
        time += userResponse.time;

        const incrementTime = () => {
            time += 1;
        }

        setInterval( incrementTime, 1000);
    }

    async function sendResponse(event: FormEvent) {
        event.preventDefault();

		// @ts-ignore
		const elementsArray = [...event.target.elements];

		const data = elementsArray.reduce((acc, element) => {
			if (element.id) {
				acc[element.id] = element.value;
			}

			return acc;
		}, {});

        if (userId && problem && userResponse) {
            let response: any = {time, tries: userResponse.tries + 1};
            
            if (!problem.manual) {
                let correct = false;

                if (data.answer === problem.answer) {
                    correct = true;
				    alert("Your answer is correct!");
                }

                response = {...response, correct}
            } else {
                response = {...response, answer: data.answer, marked: false}
            }

            await submitCTFResponse(userId, problemId, response);
        } 

        window.location.reload();
    }

    if (!userId) {
		return (<Navigate to={"/sign-in?next=" + window.location.href + ""} />)
    }
    
    if (!problemIdFromQuery) {
        return (<Text>Invalid question</Text>);
    }

    let problemId = parseInt(problemIdFromQuery);

    return (
        <>
        <Menu />
        { (currentTimeStamp < expiryTimeStamp) ? <>
        <Problem>{problem ? <>
            <QuestionArea>
                <Title>Problem {problemId}</Title>
                <a href={fileUrl} target="blank"><Button style={{background: "#fff", color: greenHex, position: "absolute", right: 24, top: 26}}>Download</Button></a>
                <Text>{problem.question}</Text>
                <Text>{problem.note ? "Note: " + problem.note : ""}</Text>
            </QuestionArea>
            <Answer onSubmit={sendResponse}>
            {userResponse && !userResponse.correct ? <>
                <AnswerInput 
                id="answer"
                className="no-focus-outline" placeholder="Enter answer" />
                <SubmitButton>Submit</SubmitButton>
            </>: <Text>Loading...</Text>}

            </Answer>
        </> : 
            <QuestionArea>
                <Title>Loading...</Title>
            </QuestionArea>
        }</Problem> 
        <Bottom>
            {userResponse ? <>
                <BottomText>{userResponse.tries} tries</BottomText> 
                <BottomText>{displayTimeString(time)} + penalties</BottomText> 
                </> : "Loading data..."}
            <Buttons>
                {problemId != 1 ? <Button onClick={() => {window.location.href = '../problem/' + (problemId - 1)}} style={{ background: greenHex, color: '#fff'}}>Previous</Button> : null}
                {problemId != 8 ? <Button onClick={() => {window.location.href = '../problem/' + (problemId + 1)}} style={{ background: '#fff', color: greenHex}}>Next</Button> : null}
            </Buttons>
        </Bottom>
        </> : <CenterText>Competition is now closed.</CenterText>}
        </>
    )

}

export default IndividualProblem;