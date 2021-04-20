import './App.css';
import axios from 'axios'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Sidebar/Sidebar.js'
import Home from './routes/landingPage.js'
import Account from './routes/account.js'
import Decks from './routes/decks.js'
import Cards from './routes/cards.js'

function App() {
  const [cards, setCards] = useState()
  axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then((response) => {
      console.log(response);
      setCards({cards: response.data})
    })
   .catch((error)=>{
      console.log(error);
   });
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account' exact component={Account} />
          <Route path='/decks' exact component={Decks} />
          <Route path='/cards' exact component={Cards} cards={cards}/>
        </Switch>
    </Router>
    </>
  )
}

export default App;
