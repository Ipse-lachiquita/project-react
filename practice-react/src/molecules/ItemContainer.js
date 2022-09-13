import React from 'react'
import styled from 'styled-components'
import ItemImg from '../atoms/ItemImg'
import ItemName from '../atoms/ItemName'
import qrImg from '../images/qrImg.png'
import contactsImg from '../images/contactsImg.png'
import idImg from '../images/idImg.png'
import mailImg from '../images/mailImg.png'

function ItemContainer() {
  return (
    <>
      <Row>
        <RowIcon>
          <ItemImg src={qrImg} />
          <ItemName itemName="QR Code" />
        </RowIcon>
        <RowIcon>
          <ItemImg src={contactsImg} />
          <ItemName itemName="Add by Contacts" />
        </RowIcon>
        <RowIcon>
          <ItemImg src={idImg} />
          <ItemName itemName="Add by ID" />
        </RowIcon>
        <RowIcon>
          <ItemImg src={mailImg} />
          <ItemName itemName="Invite" />
        </RowIcon>
      </Row>
    </>
  )
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const RowIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ItemContainer
