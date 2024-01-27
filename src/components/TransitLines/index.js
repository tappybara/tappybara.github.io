import React from 'react'
import styled from 'styled-components'

import { Line } from '../line'

import { Box, FlexBox } from '../../library/components'


const Container = styled(FlexBox)`
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
`

const Text = styled.p`
    font-size: 14px;
    margin: 0;
    margin-top: -1px;
    font-family: Helvetica;
    letter-spacing: 0.1em;
`

const Contact = styled(Box)`
    flex-direction: row;
    gap: 25px;
    margin-bottom: 5px;
    img {
        width: 30px;
        height: 30px;
    }
`

export const TransitLines = () => {
    return (
        <Container>
            <FlexBox flexDirection="column" width="100%" alignItems="flex-end">
                <Contact display="flex">
                    <img src="/iconmonstr-github-4.png" />
                    <img src="/iconmonstr-linkedin-4.png" />
                    <img src="/iconmonstr-email-10.png" />
                </Contact>
                <FlexBox flexDirection="row" gap="10px" width="100%" justifyContent="flex-end" alignItems="center">
                    <Text></Text>
                    <Line color="#DCC9BB" percentage="35" />
                </FlexBox>
            </FlexBox>
            <Line color="#C4C6D3" percentage="65" />
        </Container>
    )
}