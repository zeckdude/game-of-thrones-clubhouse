import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import { fetchBooks } from '../actions';
import { parseIdFromUrl } from '../helpers';

const styles = {
  ul: {
    marginTop: '30px',
  },
  li: {
    marginBottom: '15px',
  },
};

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks = () => {
    const bookListItems = this.props.books.map((book) => {
      const id = parseIdFromUrl(book.url);
      const releaseYear = moment(book.released).format('YYYY');
      return (
        <li style={styles.li} key={id}>
          <strong><Link to={`/books/${id}`}>{book.name}</Link></strong><br />
          <small>{releaseYear}</small>
        </li>
      );
    });

    return (
      <ul style={styles.ul}>
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
