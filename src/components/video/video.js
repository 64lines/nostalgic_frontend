import * as React from 'react'
import { BACKEND_SERVER_URL } from '../../constants/server'
import ItemCard from '../item-card/item-card'

function Video({ videoSource, title, description, year }) {
  return (
    <ItemCard title={title} description={description} year={year}>
      <video controls className='item-card__video'>
        <source src={`${BACKEND_SERVER_URL}${videoSource}`} type="video/mp4"/>
        <track src="" kind="captions" srclang="en" label="english_captions"></track>
        Your browser does not support the video tag.
      </video>
    </ItemCard>
  )
}

export default Video