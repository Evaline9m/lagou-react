import React from 'react'
class Search extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.location.query.name);
    this.handleGotoPosition = this.handleGotoPosition.bind(this)
  }

  handleGotoPosition() {
    this.props.router.push('/position?name=aab')
  }

  render() {
    return (
      <div><button onClick={this.handleGotoPosition}></button></div>
    )
  }
}

export default Search
