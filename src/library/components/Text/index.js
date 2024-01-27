import React from 'react'
import styled from 'styled-components'


const TextH1 = styled.h1`
    weight: ${props => props.weight || 400};
    font-size: ${props => props.fontSize || '12px'};
`

const TextH2 = styled.h2`
    weight: ${props => props.weight || 400};
    font-size: ${props => props.fontSize || '12px'};
`

const TextH3 = styled.h3`
    weight: ${props => props.weight || 400};
    font-size: ${props => props.fontSize || '12px'};
`

const TextP = styled.p`
    margin: 0;
    font-weight: ${props => props.weight || 400};
    font-size: ${props => props.fontSize || '12px'};
    white-space: pre-line;
`

export const Text = ({ children, ...props }) => {
    // h1, h2, h3, p 

    const { type, ...rest } = props

    if (type === 'h1') {
        return (<TextH1 {...rest}>{children}</TextH1>)
    }

    if (type === 'h2') {
        return (<TextH2 {...rest}>{children}</TextH2>)
    }

    if (type === 'h3') {
        return (<TextH3 {...rest}>{children}</TextH3>)
    }

    return (<TextP {...rest}>{children}</TextP>)
}