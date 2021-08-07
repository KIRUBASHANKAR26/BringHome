import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
