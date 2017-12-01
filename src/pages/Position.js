import React, {Component} from 'react'

class Position extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props.location.query.name);
  }
  render(){
    return (
      <div>
        <div>position</div>
        <div>{this.props.children}</div>
      </div>
    )
  }

  componentDidMount() {
    console.log('Position DidMount');
  }

  componentWillUnmount() {
    console.log('Position will unmount');
  }
}

export default Position
