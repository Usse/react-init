
import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return <h3>Hello {this.props.name}</h3>;
  }
}

export default HelloMessage;
