import React, { Component } from 'react'
import './index.css'
import { Form} from "react-bootstrap";
import { nanoid } from 'nanoid';

export default class index extends Component {
  handleKeyUp = (event) => {
    
    if (event.keyCode === 13) {
        console.log(event.target.value)
        if (event.target.value.trim()){
            return;
        }
        const todo = {id: nanoid(), name: event.target.value, done: false}
        this.props.addTodo(todo)
        event.target.value = ''
    }
  };
  render() {
    return (
        <Form.Control onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
    )
  }
}