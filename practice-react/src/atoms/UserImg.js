import React from 'react'
import styled from 'styled-components'

function UserImg(props) {
  console.log(props.radius)
  return (
    <Image
      src={props.src}
      height={props.height}
      width={props.width}
      radius={props.radius}
    />
  )
}

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  margin-right: 20px;
`

export default UserImg
