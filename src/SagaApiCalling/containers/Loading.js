import React from 'react';
import { connect } from 'react-redux'
import img from '../../loading_spinner.gif'

let Laoading = (props) => (
    props.loading?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt="loading"/>
      <h1>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

 var Load = connect(
  mapStateToProps,
  null
)(Laoading)


export default Load;

