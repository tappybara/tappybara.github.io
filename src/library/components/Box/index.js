import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    padding: ${props => props.padding}
`

export const Box = ({ children, ...props }) => {

    return (
        <Container {...props}>
            {children}
        </Container>
    )
}