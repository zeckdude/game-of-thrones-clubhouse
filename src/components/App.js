import React, { Component } from 'react';
import Home from './Home';
import PropTypes from 'prop-types';

class App extends Component {
  something() {
    return false;
  }

  render() {
    return (
      <div className="page-container">
        <header>
          <h1>Game of Thrones Clubhouse</h1>
          <nav>
            <ul>
              <li className="active"><div className="icon royalty-016-papyrus" />Books</li>
              <li><div className="icon royalty-033-knight" />Characters</li>
              <li><div className="icon royalty-030-blazon" />Houses</li>
            </ul>
          </nav>
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
            <Home />
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
