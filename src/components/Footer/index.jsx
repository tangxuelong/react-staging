import React, { Component } from 'react'
import './index.css'
import { Form, Button } from "react-bootstrap";

export default class index extends Component {

    handleCheckAll = (event)=>{
        this.props.checkAllTodo(event.target.checked) 
    }

    handleClearDone = ()=>{
        this.props.clearAllDone()
    }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,todo)=>{
        if (todo.done) {
            return pre+1
        }
        return pre
    },0)
    const totalCount = todos.length
    return (
        <div className="footer">
            <div className="footer-left">
                <Form.Check.Input className="checkbox" type={'checkbox'} checked={doneCount == totalCount} onChange={this.handleCheckAll} />
                <Form.Check.Label>{`已完成 ${doneCount}/全部 ${totalCount}`}</Form.Check.Label>
            </div>
            <Button variant="danger" size="sm" onClick={this.handleClearDone}>清除已完成任务</Button>
            <a className="footer-icp" href='https://beian.mps.gov.cn/#/query/webSearch'>
                <img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" alt="" />
                <span>京ICP备2024078215号</span>
            </a>
        </div>
    )
  }
}