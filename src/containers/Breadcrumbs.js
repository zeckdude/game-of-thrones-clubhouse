import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';

class Breadcrumbs extends Component {
  renderAdditionalBreadcrumbs() {
    const url = this.props.location.pathname;
    if (url !== '/') {
      const breadcrumbs = url.substring(1).split('/');
      return breadcrumbs.reduce((builtJsx, breadcrumb, index, array) => {
        if (index > 0) {
          // Detail Title
          return (
            <span>
              {builtJsx}
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-link">{Number(breadcrumb)}</span>
            </span>
          );
        }

        // Section Title
        const formattedSectionTitle = breadcrumb[0].toUpperCase() + breadcrumb.substring(1);
        return (
          <span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">
              { array.length > 1 ? <Link to={`/${breadcrumb}`}>{formattedSectionTitle}</Link> : formattedSectionTitle }
            </span>
          </span>
        );
      }, '');
    }

    return false;
  }

  render() {
    return (
      <div className="breadcrumbs">
        <span className="breadcrumb-link">
          { this.props.location.pathname === '/' ? 'Home' : <Link to="/">Home</Link> }
        </span>
        {this.renderAdditionalBreadcrumbs()}
      </div>
    );
  }
}

/**
 * mapStateToProps which gives the component access to the redux store
 * @return {object} - Mapping of state properties (in the redux store) to prop properties that will be available within the component
 */
const mapStateToProps = state => ({
  books: state.books,
  characters: state.characters,
  houses: state.houses,
});

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Breadcrumbs);
