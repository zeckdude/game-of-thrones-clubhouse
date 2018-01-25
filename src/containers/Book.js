import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { fetchBook } from '../actions';

class Book extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  renderBook = () => {
    console.log(this.props);

    if (this.props.book) {
      const {
        authors, isbn, mediaType, numberOfPages, povCharacters, publisher, released,
      } = this.props.book;

      return (
        <div>
          <h2>{this.props.book.name}</h2>
          <table>
            <tbody>
              <tr><th>Author(s)</th><td><ul>{authors.map(author => <li key={author}>{author}</li>)}</ul></td></tr>
              <tr><th>Release Date</th><td>{moment(released).format('MM-DD-YYYY')}</td></tr>
              <tr><th>Number of Pages</th><td>{numberOfPages}</td></tr>
              <tr><th>Book Type</th><td>{mediaType}</td></tr>
              <tr><th>ISBN</th><td>{isbn}</td></tr>
              <tr><th>Publisher</th><td>{publisher}</td></tr>
              <tr><th>Featured Characters</th><td>Placeholder</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    return false;
  }

  render() {
    return (
      <section>
        {this.renderBook()}
      </section>
    );
  }
}

/**
 * mapStateToProps which gives the component access to the redux store
 * @return {object} - Mapping of state properties (in the redux store) to prop properties that will be available within the component
 */
const mapStateToProps = (state, ownProps) => ({
  book: state.books[ownProps.match.params.bookId],
});

export default connect(mapStateToProps, { fetchBook })(Book);
