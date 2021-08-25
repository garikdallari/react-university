import React from 'react'
import { Description } from './Info.styles'
import Paper from '../Paper/Paper'
import Card from '../Card/Card'

export default function Info() {
    return (
        <Description>
            <Paper gap="24">
               <Card/>
            </Paper>
        </Description>
    )
}
