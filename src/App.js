import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
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
