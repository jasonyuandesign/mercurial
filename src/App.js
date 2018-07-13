import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Gallery from './Gallery.js';
// import About from './About.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Gallery} />
      </Switch>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
