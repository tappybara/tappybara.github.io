import React from 'react'
import styled from 'styled-components'

import { Box } from '../../library/components'

const LineBox = styled(Box)`
    background-color: ${props => props.color};
    width: ${props => `${props.percentage}%`};
    height: 9px;
    border-radius: 0px 5px 0px 5px;
`

export const Line = ({ color, percentage }) => {
    return <LineBox color={color} percentage={percentage} />
}