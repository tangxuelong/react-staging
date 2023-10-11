import React, { Component } from 'react'
import './index.css'
import Item from "../Item"

export default class index extends Component {
  handleSubmit = (event) => {
  };
  render() {
    const {todos} = this.props
    return (
        <div className="listGroup">
            {
                todos.map((todo)=>{
                    return <Item todo={todo} key={todo.id} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />
                })
            }
            
        </div>
    )
  }
}