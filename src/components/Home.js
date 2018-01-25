import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBreadcrumbs } from '../actions';

const styles = {
  imgContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    maxWidth: '100%',
  },
};

class Home extends Component {
  componentWillMount() {
    this.props.setBreadcrumbs(['/']);
  }

  render() {
    return (
      <section style={styles.section}>
        <h2>Mathchomaroon akka idde <span>(Hello and Welcome in Dothraki)</span></h2>
        <p>Thank you for visiting the one-stop shop for all things Game of Thrones. We have archives for all books, characters, and houses featured in the Game of Thrones universe. Click any of the links above to begin your quest for GOT knowledge.</p>
        <div style={styles.imgContainer}>
          <img
            style={styles.img} src="img/wolf@2x.png" alt="Direwolf"
            width="280"
          />
        </div>
      </section>
    );
  }
}

export default connect(null, { setBreadcrumbs })(Home);
