import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import './App.scss';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='*' component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
