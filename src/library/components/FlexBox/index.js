import React from 'react'
import styled from 'styled-components'

import { Box } from '../Box'

const Container = styled(Box)`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
    gap: ${props => props.gap};
`

export const FlexBox = ({ children, ...props }) => {

    return (
        <Container {...props}>
            {children}
        </Container>
    )
}