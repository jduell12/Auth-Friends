import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

//components
import Login from './components/Login';
import Friends from './components/Friends';
import Edit from './components/EditFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const logout = () => {
    localStorage.clear();
  }

  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/login" onClick={logout}>Logout</Link>
        <Link to="/protected">Friends</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <PrivateRoute exact path="/edit" component={Edit} />
        {/* <PrivateRoute exact path="/protected/delete" component={} /> */}
        <Route path="/login" component={Login}/>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
