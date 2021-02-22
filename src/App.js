import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Shop from './pages/Shop/Shop'
import SingleProduct from './components/SingleProduct/SingleProduct'
import './App.scss';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
