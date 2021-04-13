import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Sidebar/Sidebar.js'
import Home from './routes/landingPage.js'
import Deck from './routes/deck.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/decks' exact component={Deck} />
        </Switch>
    </Router>
    </>
  )
}

export default App;
