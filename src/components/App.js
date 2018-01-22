import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class App extends Component {
  something() {
    return false;
  }

  render() {
    return (
      <div>
        <header>
          <h1>Game of Thronesamania</h1>
          <nav>
            <ul>
              <li>Books</li>
              <li>Characters</li>
              <li>Houses</li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="breadcrumb">
            <span className="breadcrumb-link">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">Houses</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">House Targaryan</span>
          </div>
          <div className="content">
            Content
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
