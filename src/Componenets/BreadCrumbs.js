import { Box, InputBase , styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
    background: #F6F6F6;
    & > div {
        margin: 10px;
    }
`

const BreadCrumbs = ({setCount , setText}) => {
  return (
    <Component  m={10}>
        <InputBase placeholder='Search Images' onChange={(e) => setText(e.target.value)} />
        <InputBase placeholder='Number of Images' type="number" onChange={(e) => setCount(e.target.value)} />
    </Component>
  )
}

export default BreadCrumbs;