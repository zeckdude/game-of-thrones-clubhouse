import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Breadcrumbs extends Component {
  /**
   * Render out any breadcrumbs after the Home breadcrumb
   * @return {ReactElement|boolean} - Markup of book list
   */
  renderAdditionalBreadcrumbs() {
    const { breadcrumbs } = this.props;
    if (breadcrumbs.length > 1) {
      return breadcrumbs.reduce((builtJsx, breadcrumb, index, array) => {
        if (index > 1) {
          // Detail Title
          return (
            <span>
              {builtJsx}
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-link">{breadcrumb}</span>
            </span>
          );
        }

        // Section Title
        const formattedSectionTitle = breadcrumb[0].toUpperCase() + breadcrumb.substring(1);
        return (
          <span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">
              { array.length > 2 ? <Link to={`/${breadcrumb}`}>{formattedSectionTitle}</Link> : formattedSectionTitle }
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
          { this.props.breadcrumbs.length === 1 ? 'Home' : <Link to="/">Home</Link> }
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
  breadcrumbs: state.breadcrumbs,
});

export default connect(mapStateToProps)(Breadcrumbs);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};
