import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import * as moment from 'moment';
import { fetchBooks } from '../actions';

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks = () => {
    const bookListItems = _map(this.props.books, (book) => {
      const releaseYear = moment(book.released).format('YYYY');
      const { id, name } = book;
      return (
        <li key={id}>
          <Link to={`/books/${id}`}>{name}</Link><br />
          <small>{releaseYear}</small>
        </li>
      );
    });

    return (
      <ul>
        {bookListItems}
      </ul>
    );
  }

  render() {
    return (
      <section>
        <h2>Books</h2>
        <p>Feast your eyes on all the George R.R. Martin fables in the Game of Thrones universe. Click a title to find out more information.</p>

        {this.renderBooks()}
      </section>
    );
  }
}

/**
 * mapStateToProps which gives the component access to the redux store
 * @return {object} - Mapping of state properties (in the redux store) to prop properties that will be available within the component
 */
const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, { fetchBooks })(Books);
