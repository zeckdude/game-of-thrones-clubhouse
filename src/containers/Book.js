import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { fetchBook, setBreadcrumbs } from '../actions';

class Book extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentDidUpdate() {
    this.props.setBreadcrumbs(['/', 'Books', this.props.book.name]);
  }

  /**
   * Render out details of book
   * @return {ReactElement|boolean} - Markup of book details
   */
  renderBook = () => {
    if (this.props.book) {
      const {
        authors, isbn, mediaType, numberOfPages, publisher, released,
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

export default connect(mapStateToProps, { fetchBook, setBreadcrumbs })(Book);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  fetchBook: PropTypes.func.isRequired,
  setBreadcrumbs: PropTypes.func.isRequired,
};
