import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBreadcrumbs } from '../actions';

class Houses extends Component {
  componentWillMount() {
    this.props.setBreadcrumbs(['/', 'Houses']);
  }

  render() {
    return (
      <section>
        <h2>Houses</h2>
        <p>Just when you think you have a firm grasp on the Game of Thrones landscape and how it all fits together, you discover a whole slew of new lands, along with the houses that occupy them. We will try to minimize some of that confusion. Click on a house name to find out more information.</p>

        <em>(All the houses are currently dealing with family issues. Feel free to view any books though.)</em>
      </section>
    );
  }
}

export default connect(null, { setBreadcrumbs })(Houses);

Houses.propTypes = {
  setBreadcrumbs: PropTypes.func.isRequired,
};
