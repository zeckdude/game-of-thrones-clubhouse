import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import * as moment from 'moment';
import { fetchCharacters, setBreadcrumbs } from '../actions';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationLink: '',
    };
  }

  componentWillMount() {
    this.props.setBreadcrumbs(['/', 'Characters']);
  }

  componentDidMount() {
    this.props.fetchCharacters((paginationLink) => {
      this.setState({
        paginationLink,
      });
    });
  }

  renderCharacters = () => false

  render() {
    return (
      <section>
        <h2>Characters</h2>
        <p>Game of Thrones wouldn't be the same without the rich, detailed, and likeable characters that it offers. That's why we're so mad/happy when characters are eliminated. Click on a name to find out more information.</p>

        { this.renderCharacters() }

        <em>(All the characters are currently on vacation as this area is under construction. Feel free to view any books though.)</em>
      </section>
    );
  }
}

/**
 * mapStateToProps which gives the component access to the redux store
 * @return {object} - Mapping of state properties (in the redux store) to prop properties that will be available within the component
 */
const mapStateToProps = state => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { fetchCharacters, setBreadcrumbs })(Characters);
