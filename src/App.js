import React, {Component} from 'react';
import {Switch, Route, withRouter, BrowserRouter} from 'react-router-dom';
import NavigationBar from './NavigationBar.js';
import Homepage from './Homepage.js';
import SignUp from './SignUp.js';

class App extends Component {
  
  render() { 
    return (
      <div>
        <BrowserRouter history={withRouter}>
          <Switch>

            <Route exact={true} path='/' render={(props) =>{
              return(
                  <div>
                    <NavigationBar {...props} activePage={[1, 0, 0]} />
                    <Homepage {...props}/>
                  </div>
              )}}>
            </Route>

            <Route exact={true} path='/signup' render={(props) =>{
              return(
                  <div>
                    <NavigationBar {...props} activePage={[0, 1, 0]} />
                    <SignUp {...props}/>
                  </div>
              )}}>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
