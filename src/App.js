import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PokemonList from './pages/PokemonList/PokemonList'
import PokemonDetail from './pages/PokemonList/PokemonDetail'
import Nav from './Nav'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/pokemon' exact component={PokemonList}/>
          <Route path='/pokemon/:name' exact component={PokemonDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>home</h1>
  </div>
)

export default App;
