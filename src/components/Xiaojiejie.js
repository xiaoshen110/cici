import React, {Component,Fragment} from 'react'
import '../style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      inputValue: 'js',
      list: ['php', 'python']
    }

    this.deleteItem = this.deleteItem.bind(this)

    
  }

  inputChange(e){
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
    
  }

  deleteItem(index){
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  render () {
    return (
      <Fragment>
          {/* 注释写法 */}
          <label htmlFor="jspang">服务</label>  <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addList.bind(this)}>添加</button>
          {
            this.state.list.map((item,index)=>{
              return (
                <XiaojiejieItem 
                key={index+item}
                content={item}
                index={index}
                deleteItem={this.deleteItem}
                ></XiaojiejieItem>
                
              )
            })
          }
          
      </Fragment>
      
    )
  }
}

export default Xiaojiejie

/*
                
<li 
key={index} 
onClick={this.deleteItem.bind(this, index)}
dangerouslySetInnerHTML={{__html: item}}
>
</li>

*/