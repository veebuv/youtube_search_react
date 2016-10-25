import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChange } from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  render() {
    const { message, dispatch } = this.props;
    return (
      <div>
        {message}
        <button onClick={() => dispatch(textChange('Hello'))}></button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.AppReducer.message,
  };
}

export default connect(mapStateToProps)(App);
