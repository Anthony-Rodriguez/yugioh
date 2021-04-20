import React from 'react'


export default function Cards(cards) {
  return (
    <div className='cards'>
      <h1>Cards</h1>
      <div className={cards.type}></div>
    </div>
  )
}
