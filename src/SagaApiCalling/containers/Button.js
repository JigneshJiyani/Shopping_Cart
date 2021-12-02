import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions'

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '50px',
  borderRadius: '10px',
  display: 'block',
  margin: '20px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'lightgreen' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getNews}
      >Press to see News</button>
    );
  }

};

const mapDispatchToProps = {
  getNews: getNews,
};

var button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default button;