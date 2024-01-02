import React from 'react'
import styled from 'styled-components'

import { Box, Text} from '../../library/components'


const HeaderContainer = styled(Box)`
    padding: 10px;
    min-height: 25px;

`
const NameContainer = styled(Box)`
        flex-grow: 1;
    `

const NavigationContainer = styled(Box)`
        flex-grow: 1;
    `

export const Header = () => {

    // link the others
    return (
        <HeaderContainer display="flex" justifyContent="space-between" alignItems="center">
            <NameContainer display="flex" justifyContent="flex-start" alignItems="flex-end">
                <Text>alex hsieh</Text>
            </NameContainer>
            <NavigationContainer display="flex" justifyContent="space-between" alignItems="flex-end">
                <Text>home</Text>
                <Text>about</Text>
                <Text>work</Text>
                <Text>contact</Text>
            </NavigationContainer>
        </HeaderContainer>
    )
}