import * as React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import './item-card.scss'

function ItemCard({ children, title, description, year, hasButton, buttonEvent }) {
  return (
    <Card className="item-card">
      <Card.Header>{ title }</Card.Header>
      { children }
      <Card.Body>
        <Card.Text className='item-card__description'>
          { description }
        </Card.Text>
        <Card.Text className='item-card__year'>
          { year ? (<><b>Year: </b><Badge bg="warning" text="dark">{year}</Badge></>) : (<></>) }
        </Card.Text>
        {hasButton ? (<Button variant="primary" onClick={buttonEvent}>See full size image</Button>) : (<></>) }
      </Card.Body>
    </Card>
  )
}

export default ItemCard