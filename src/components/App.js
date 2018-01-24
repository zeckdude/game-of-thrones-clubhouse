import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Home from './Home';
import Books from './Books';
import Characters from './Characters';
import Houses from './Houses';

class App extends Component {
  something() {
    return false;
  }

  render() {
    return (
      <div className="page-container">
        <header>
          <h1><Link to="/">Game of Thrones Clubhouse</Link></h1>
          <Navigation />
        </header>
        <main>
          <div className="breadcrumbs">
            <span className="breadcrumb-link">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">Houses</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">House Targaryan</span>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/books" component={Books} />
              <Route path="/characters" component={Characters} />
              <Route path="/houses" component={Houses} />
            </Switch>
          </div>
        </main>
        <footer>
          Created by a man &copy; 2018
        </footer>
      </div>
    );
  }
}

export default App;
