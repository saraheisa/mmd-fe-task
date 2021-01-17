import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
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
