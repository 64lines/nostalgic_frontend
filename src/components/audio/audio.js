import * as React from 'react'
import { BACKEND_SERVER_URL } from '../../constants/server'
import ItemCard from '../item-card/item-card'
import './audio.scss'

function Audio({ audioSource, title, description, year }) {
  return (
    <ItemCard title={title} description={description} year={year}>
      <audio controls className='item-card__audio'>
        <source src={`${BACKEND_SERVER_URL}${audioSource}`} type="audio/mp3"/>
        <track src="" kind="captions" srclang="en" label="english_captions"></track>
        Your browser does not support the audio tag.
      </audio>
    </ItemCard>   
  )
}

export default Audio