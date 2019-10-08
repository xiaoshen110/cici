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

    console.log('生命周期第一阶段')
    
  }
  // 方式一：事件里传递事件对象的形式，获取值
  // inputChange(e){
  //   console.log(e.target.value)
  //   this.setState({
  //     inputValue: e.target.value
  //   })
  // }
  // 方式二：采取ref属性获取到dom对象的方式
  inputChange(){
    this.setState({
      inputValue: this.input.value
    })
  }

  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, ()=>{
      // setState 回调，类似于 Vue里的 $nextTick 
      // DOM更新后执行，虚拟DOM
    })
    
  }


  componentWillMount(){
    console.log('生命周期第二阶段，第一步')
  }

  componentDidMount(){
    console.log('生命周期第二阶段，第三步')
  }




  deleteItem(index){
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  render () {
    console.log('生命周期第二阶段，第二步')
    return (
      <Fragment>
          {/* 注释写法 */}
          <label htmlFor="jspang">服务</label>  <input id="jspang" className="input" ref={(input)=>this.input=input} value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
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