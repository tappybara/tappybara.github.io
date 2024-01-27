import React from 'react'
import styled from 'styled-components'

import { FlexBox, Text } from '../../library/components'


const HeaderContainer = styled(FlexBox)`
    width: 100%;
    color: white;
    padding: 50px;
    border: 1px olid white;

`
const NameContainer = styled.div`
    padding-left: 40px;
`
const NavigationContainer = styled(FlexBox)`
    width: 20%;
    max-width: 550px;
    padding-right: 40px;
`

export const Header = () => {

    // link the others
    return (
        <HeaderContainer justifyContent="space-between" alignItems="center">
            <NameContainer>
                <Text>alex hsieh</Text>
            </NameContainer>
            <NavigationContainer justifyContent="space-between" alignItems="flex-end">
                <Text>about</Text>
                <Text>work</Text>
                <Text>projects</Text>
            </NavigationContainer>
        </HeaderContainer>
    )
}