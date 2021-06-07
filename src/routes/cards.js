import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Cards() {
  let [cards, setCards] = useState(null)
  let [cardJsx, setCardJsx] = useState(null)
  
  useEffect(() => {
      axios({
        url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
        method: "GET"
      })
      .then((res) => {
        setCards({cards: res.data})
      })
     .catch((error)=> {
        console.log(error);
     })
  }, []);

  useEffect(() => {
    if (cards === null || cards === undefined) {
      setCardJsx('Loading...')
    } else if (cards.length === 0) {
      setCardJsx("The cards are gone.")
    } else {
      console.log(cards)
      const cardList = cards.map(card => {
        return (
          <div key={card.id} className="game-card">
            <div>{card.name}</div>
            <div>{card.type}</div>
            <img alt={card.name} src={card.card_images.image_url}/>
            <div>{card.atk}</div>
            <div>{card.def}</div>
            <div>{card.level}</div>
            <div>{card.race}</div>
            <div>{card.attribute}</div>
          </div>
        )
      })
      setCardJsx(cardList)
    }
  }, [cards])

  return cardJsx ? (
    <div className='cards'>
      <h1>Cards</h1>
      <div>
        {cardJsx}
      </div>
    </div>
  ) : ( <h1>Cards</h1> )
}

export default Cards