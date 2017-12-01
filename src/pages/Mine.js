import React from 'react'

class Mine extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.params.id);
  }

  render() {
    return (
      <div>mine</div>
    )
  }

  componentDidMount() {
    console.log('Mine DidMount');
  }

  componentWillUnmount() {
    console.log('Mine will unmount');
  }

  routerWillLeave(nextLocation) {
    console.log(0);
    return false
  }
}

export default Mine
