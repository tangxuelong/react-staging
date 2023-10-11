import React, { Component } from 'react'
import './index.css'
import { Form, Button } from "react-bootstrap";

export default class index extends Component {
  state = {
    mouse: false
  }
  handleMouse = (flag) => {
    return ()=>{
        this.setState({
            mouse: flag
        })
    }
  };

  handleChecked = (todo) =>{
    return (event)=>{
        const newTodo = {...todo, done: event.target.checked}
        this.props.updateTodo(newTodo)
    }
  }

  handleDelete = (todo)=>{
    return ()=>{
        this.props.deleteTodo(todo)
    }
  }
  render() {
    const {todo} = this.props
    const {mouse} = this.state
    return (
        <div style={{backgroundColor: mouse ? 'yellow': 'white'}} className="listGroupItem" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <Form.Check type={'checkbox'} id={`check-api-${'checkbox'}`}>
                <Form.Check.Input checked={todo.done} type={'checkbox'} onChange={this.handleChecked(todo)} />
                <Form.Check.Label>{todo.name}</Form.Check.Label>
            </Form.Check>
            <Button onClick={this.handleDelete(todo)} variant="danger" size="sm" style={{display: mouse? 'block' : 'none'}}>删除</Button>
        </div>
    )
  }
}