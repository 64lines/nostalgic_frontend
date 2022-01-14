import * as React from 'react'
import Card from 'react-bootstrap/Card'
import { BACKEND_SERVER_URL } from '../../constants/server'
import ItemCard from '../item-card/item-card'

function Image({ imageSource, title, description, thumbnail, year }) {
  const openPhoto = () => {
    window.open(`${BACKEND_SERVER_URL}${imageSource}`);
  }

  return (
    <ItemCard title={title} description={description} year={year} hasButton={true} buttonEvent={openPhoto}>
      <Card.Img variant="top" src={`${BACKEND_SERVER_URL}${thumbnail}`} />
    </ItemCard>
  )
}

export default Image