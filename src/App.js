import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Sidebar/Sidebar.js'
import Home from './routes/landingPage.js'
import Account from './routes/account.js'
import Decks from './routes/decks.js'
import Cards from './routes/cards.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account' exact component={Account} />
          <Route path='/decks' exact component={Decks} />
          <Route path='/cards' exact component={Cards} />
        </Switch>
    </Router>
    </>
  )
}

export default App;
