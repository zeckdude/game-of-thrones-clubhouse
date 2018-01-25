import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Breadcrumbs from '../containers/Breadcrumbs';
import Home from './Home';
import Book from '../containers/Book';
import Books from '../containers/Books';
import Characters from '../containers/Characters';
import Houses from '../containers/Houses';

export default () => (
  <div className="page-container">
    <header>
      <h1><Link to="/">Game of Thrones Clubhouse</Link></h1>
      <Navigation />
    </header>
    <main>
      <Breadcrumbs />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books/:bookId" component={Book} />
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
