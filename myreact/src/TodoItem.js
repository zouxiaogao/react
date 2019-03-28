import React,{Component} from 'react';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }


    handleDelete(){
        const {deleteItem,index} =this.props;
        deleteItem(index);
    }


    //父组件通过属性的方式向子组件传递参数
    //子组件通过props的形式接收到父组件传递过来的参数
    //子组件如果想和父组件通信  通过父类传递的方法
    render(){
        const {content} =this.props;
        return (
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem;