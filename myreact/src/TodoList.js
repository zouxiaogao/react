import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';

//定义一个react组件
class TodoList extends Component {
    //构造函数
    constructor(props){
      super(props);
      this.state= {
        list : [],
          inputValue: ''
      }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleBtnClick(){
        this.setState({
            //...this.state.list : 代表list已有的内容
           list : [...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    handleInputChange(e){
      //console.log(e.target.value);
        this.setState({
            inputValue :e.target.value
        })
    }



    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list :list
        })
        console.log(index);
    }

    getTodoItems(){
        return(
            this.state.list.map((item,index)=>{
                // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
                return (
                    <TodoItem
                        deleteItem={this.handleDelete}
                        key={index}
                        content={item}
                        index={index}/>
                );
            })
        );
    }

  //渲染
  render() {
    //jsx语法
      //bind(this) : this代表全局  bind的目的是把属于标签this的绑定为全局
    return (
      <Fragment>
          <div>
              <input value={this.state.inputValue} onChange={this.handleInputChange}/>
              <button className='red-btn' onClick={this.handleBtnClick}>add</button>
          </div>
          <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

//导出 外部js才能使用
export default TodoList;
