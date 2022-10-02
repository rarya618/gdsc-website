import React from 'react';

import { useParams } from "react-router-dom";
import styled from "styled-components";

const Text = styled.p``;

const Problem = styled.div`
    
`;

const IndividualProblem = () => {
    let params = useParams();

    let problemId = params.problemId;

    if (problemId) {
        return (
            <>
            <Problem>
                <Text>Problem {problemId}</Text>
            </Problem>
            </>
        )
    }

    return (<><Text>Invalid question</Text></>)
}

export default IndividualProblem;