import React from 'react'
import styled from 'styled-components'

import { Box, FlexBox, Text } from '../../library/components'

import { Line } from '../line'

const Container = styled(Box)`
    height: 100%;
    border-color: #464A5F;
    border-style: solid;
    border-radius: 100px 0 0 0;
    border-width: 8px 0 0 8px;
    margin-left: 12px;
    position: relative;
    padding-bottom: 50px;
`

const Ball = styled.div`
    border-radius: 50%;
    border: 8px solid black;
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 170px;
    left: -21px;
`

const TextBox = styled(Box)`
    flex-direction: column;
    width: 700px;
    margin-top: 120px;
`

const Sign = ({ month }) => {
    const Circle = styled.div`
        border-radius: 50%;
        border: 10px solid red;
        width: 40px;
        height: 40px;
        background-color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    `




    return (
        <Circle>
            <FlexBox flexDirection="column" alignItems="center" gap="0px">
                <FlexBox flexDirection="row" alignItems="center">
                    <Text fontSize="10px" weight="700">Jan</Text>
                </FlexBox>
                <Text fontSize="20px" weight="700">21</Text>
            </FlexBox>
        </Circle>
    )
}

const About = () => {
    return (
        <>
            <Text fontSize="100px">
                about
            </Text>
            <Text fontSize="16px">
                {`
                    Hello! My name is Alex.
                    I am a software developer based in Vancouver, Canada.
                `}
            </Text>
        </>
    )
}

const Work = () => {

    return (
        <FlexBox flexDirection="column" gap="40px">
            <Text fontSize="100px">
                work
            </Text>

            <FlexBox flexDirection="column" gap="40px">
                <JobBox />
                <JobBox />
                <JobBox />
                <JobBox />
            </FlexBox>
        </FlexBox>

    )
}

const Projects = () => {

    return (
        <FlexBox flexDirection="column" gap="40px">
            <Text fontSize="100px">
                projects
            </Text>

            <Text fontSize="16px">
                under construction
            </Text>
        </FlexBox>

    )
}

const JobBox = () => {
    const VLine = styled.div`
        width: 2px;
        height: 100%; 
        background-color: black;
        margin-top: 4px;
        margin-bottom: 4px;
    `

    const Container = styled(FlexBox)`
        height: 120px; 
    `

    return (
        <Container>
            <FlexBox flexDirection="column" alignItems="center">
                <Text fontSize="16px" weight="700">
                    05/24
                </Text>
                <VLine />
                <Text fontSize="16px" weight="700">
                    06/24
                </Text>
            </FlexBox>
            <FlexBox alignItems="center">
                <Text fontSize="16px">
                    {`Full Stack Developer - Maths No Problem
                    Vancouver, Canada`}
                </Text>
            </FlexBox>
        </Container>
    )
}

export const Yellow = () => {
    return (
        <Container display="flex" justifyContent="center">
            <Ball />
            <TextBox display="flex" alignItems="flex-start">
                <About />
            </TextBox>
        </Container>
    )
}