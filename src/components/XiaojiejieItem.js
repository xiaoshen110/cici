import React, { Component } from 'react'
import PropTypes from 'prop-types' 

 class XiaojiejieItem extends Component {
  constructor (...args) {
    super(...args)

    this.handleItem = this.handleItem.bind(this)
  }
  
  // 子组件性能优化
  shouldComponentUpdate(nextProps, nextState){
    // 当组件内容和传递进来的组件属性值不一致时更新render渲染
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  handleItem () {
    this.props.deleteItem(this.props.index)
  }

  render() {
    console.log('child-render')
    return (
      <li onClick={this.handleItem}>
        {this.props.avname}做{this.props.content}
      </li>
    )
  }

  
}

// 校验传递的值 Proptypes
XiaojiejieItem.propTypes = {
  // isRequired 必填， string,number,func校验字段类型
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
  avname: PropTypes.string
}
XiaojiejieItem.defaultProps = {
  avname: '玛丽'
}

export default XiaojiejieItem