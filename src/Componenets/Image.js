import { Card  , styled} from '@mui/material'
import React from 'react'

const StyledImage = styled('img')({
    height: 300,
    width: '100%',
    objectFit: 'cover'
}
)

const Image = ({image}) => {

  return (
    <>
        <Card>
            <StyledImage src={image.largeImageURL} alt="image" />
        </Card>
    </>
  )
}

export default Image