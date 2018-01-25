import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { get as _get, isEmpty as _isEmpty, map as _map } from 'lodash';
import * as moment from 'moment';
import * as parseLinkHeader from 'parse-link-header';
import { fetchBooks, setBreadcrumbs } from '../actions';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationData: {},
      pageSize: 3,
    };
  }

  componentWillMount() {
    this.props.setBreadcrumbs(['/', 'Books']);
  }

  componentDidMount() {
    this.requestBooks();
  }

  /**
   * Make a request to fetch more books from the API
   * @param  {Number} [pageNumber=1]                 Which page number to fetch
   * @param  {Number} [pageSize=this.state.pageSize] How many records to show per page
   * @return void
   */
  requestBooks = (pageNumber = 1, pageSize = this.state.pageSize) => {
    this.props.fetchBooks({
      pageNumber,
      pageSize,
      callback: (paginationLink) => {
        this.setState({
          paginationData: parseLinkHeader(paginationLink),
        });
      },
    });
  }

  /**
   * Render list of books
   * @return {ReactElement} - Markup of book list
   */
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

  /**
   * Render the pagination for the results
   * @return {ReactElement|boolean} - Markup of pagination controls
   */
  renderPagination = () => {
    if (!_isEmpty(this.state.paginationData)) {
      const prevPageNumber = _get(this.state.paginationData, 'prev.page');
      const nextPageNumber = _get(this.state.paginationData, 'next.page');
      const lastPageNumber = _get(this.state.paginationData, 'last.page');
      return (
        <ul className="pagination">
          <li><button disabled={Number(nextPageNumber) === 2} onClick={() => { this.requestBooks(1); }}> &lt;&lt; </button></li>
          <li><button disabled={!prevPageNumber} onClick={() => { this.requestBooks(prevPageNumber); }}> &lt; </button></li>
          <li><button disabled={!nextPageNumber} onClick={() => { this.requestBooks(nextPageNumber); }}> &gt; </button></li>
          <li><button disabled={Number(prevPageNumber) === Number(lastPageNumber) - 1} onClick={() => { this.requestBooks(lastPageNumber); }}> &gt;&gt; </button></li>
        </ul>
      );
    }
    return false;
  }

  render() {
    return (
      <section>
        <h2>Books</h2>
        <p>Feast your eyes on all the George R.R. Martin fables in the Game of Thrones universe. Click a title to find out more information.</p>

        {this.renderBooks()}
        {this.renderPagination()}
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

export default connect(mapStateToProps, { fetchBooks, setBreadcrumbs })(Books);

Books.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  fetchBooks: PropTypes.func.isRequired,
  setBreadcrumbs: PropTypes.func.isRequired,
};
