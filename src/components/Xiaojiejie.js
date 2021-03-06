import React, {Component,Fragment} from 'react'
import '../style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      inputValue: 'js',
      list: []
    }

    this.deleteItem = this.deleteItem.bind(this)

    
    
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
    
  }

  componentDidMount(){
    axios.get('http://rap2api.taobao.org/app/mock/data/1325668')
    .then((res)=>{
      console.log(res)
      if (res.status === 200) {
        
        this.setState({
          list: res.data.lists
        })
      }
    })
    .catch((err)=>{
      console.log('err', err)
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
          <label htmlFor="jspang">服务</label>  <input id="jspang" className="input" ref={(input)=>this.input=input} value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addList.bind(this)}>添加</button>
          <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
              return (
                <CSSTransition
                  timeout={1000}
                  appear={true}
                  unmountOnExit
                  classNames="boss-text"
                  key={index+item}
                >
                  <XiaojiejieItem
                  
                  key={index+item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem}
                  ></XiaojiejieItem>
                </CSSTransition>
              )
            })
          }
          </TransitionGroup>
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