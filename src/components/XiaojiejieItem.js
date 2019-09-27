import React, { Component } from 'react'

export default class XiaojiejieItem extends Component {
  constructor (...args) {
    super(...args)

    this.handleItem = this.handleItem.bind(this)
  }

  handleItem () {
    this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <div>
        <li onClick={this.handleItem}>
          {this.props.content}
        </li>
      </div>
    )
  }

  
}
