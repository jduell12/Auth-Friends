import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

//components
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        {/* <Link>Friends</Link> */}
      </nav>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
