import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        <Switch>
          <Route
            exact
            path="/"
            component={ProductsList}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
