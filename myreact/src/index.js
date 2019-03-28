//引入react库
import React from 'react';
//react-dom库 ：可以把组件渲染到dom的一个结点上
import ReactDOM from 'react-dom';
//大写字母开头都是组件
import TodoList from './TodoList';
//导入css库
import './style.css';

//ReactDom 把App组件渲染到html 的‘root’标签里面
ReactDOM.render(<TodoList />, document.getElementById('root'));
