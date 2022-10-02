import React, { useEffect, useState } from 'react';

import { Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { useTitle } from '../../App';
import { greenHex, redHex } from '../../colors';
import { getCTFUserResponses } from '../../firebase/config';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
`;

const Title = styled.h1`
    color: ${greenHex};
`;

const Problems = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const Problem = styled.div`
    padding: 6px 24px 10px 24px;
    border: solid 1px;
    margin: 10px;
    border-radius: 5px;
    width: calc(50% - 70px);
`;

const ProblemTitle = styled.h2`
    text-align: left;
`;

const ProblemText = styled.p`
    color: #424243;
    text-align: left;
`;


const Summary = () => {
	let authToken = localStorage.getItem('authToken');
	let userId = localStorage.getItem('userId');

	useTitle("Summary - Capture the Flag"); 

    const [problems, setProblems] = useState<{correct: boolean, marked?: boolean, time: number, tries: number}[]>([])

    async function getProblems() {
        if (userId) {
            let tempDoc = await getCTFUserResponses(userId);

            if (tempDoc) {
                setProblems(tempDoc);
            }
        } 
    }

    // call function
	useEffect(() => {
		getProblems();
	}, [])

    if (!userId) {
		return (<Navigate to={"/sign-in?next=" + window.location.href + ""} />)
    }
    
    return (
        <Page>
            <Title>Summary</Title>
            <Problems>
            {problems ? problems.map((problem, index) => {
                let color = problem.tries != 0 ? problem.correct ? greenHex : redHex : "#424243";
                // let color = problem.correct ? greenHex : redHex;
                return <Problem style={{color: color}}>
                    <Link to={`problem/${index}`} style={{color: color, textDecoration: "none"}}>
                    <ProblemTitle>Problem {index}</ProblemTitle>
                    <ProblemText>{problem.tries != 0 ? `${problem.tries} tr${problem.tries === 1 ? "y": "ies"} - ${problem.time} seconds` : "Not attempted"}</ProblemText>
                    </Link>
                </Problem>
            }) : <>Nothing found</>}
            </Problems>
        </Page>
    )
}

export default Summary;