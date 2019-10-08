import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      isShow: true
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow () {
    this.setState({
      isShow: !this.state.isShow
    })
  }



  render () {
    return (
      <div>
        <CSSTransition 
          classNames="boss-text"
          in={this.state.isShow}
          timeout={2000}
          unmountOnExit
        >
        <div className={this.state.isShow?'show':'hide'}>Boos - 孙悟空</div>
        
        </CSSTransition>
        <button onClick={this.toggleShow}>召唤</button>
      </div>
    )
  }
}

export default Boss