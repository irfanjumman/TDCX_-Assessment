import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
