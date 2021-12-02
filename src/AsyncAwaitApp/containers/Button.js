import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

let Button = ({ getPosts, channel }) => (
  <button
    onClick={() => { getPosts(channel) }}
    className="btn btn-primary" >
    Get top news
  </button>
);

const mapStateToProps = (state) => ({
  channel: state.channel
})

const mapDispatchToProps = {
  getPosts: fetchPosts
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;