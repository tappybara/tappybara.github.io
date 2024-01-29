import React from 'react'
import styled from 'styled-components'

import { FlexBox, Text } from '../../library/components'

const HeaderContainer = styled(FlexBox)`
    width: 100%;
    color: white;
    margin-top: 50px;

`
const NameContainer = styled.div`
    margin-left: 40px;
`

const WideText = styled(Text)`
    letter-spacing: 0.2em;
`

export const Header = () => {

    return (
        <HeaderContainer direction="row" justifyContent="flex-start" alignItems="center">
            <NameContainer>
                <WideText>alex hsieh</WideText>
            </NameContainer>
        </HeaderContainer>
    )
}