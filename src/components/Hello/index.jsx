import React, { Component } from 'react'
import './index.css'
import { Container, Card, Form, ListGroup, Row, Col, Button } from "react-bootstrap";

export default class index extends Component {
  handleSubmit = (event) => {
  };
  render() {
    return (
        <Container>
            <Card className="justify-content-md-center">
                <Card.Header>TODOLIST</Card.Header>
                <Card.Body>
                    <Form noValidate  onSubmit={this.handleSubmit}>
                        <Form.Group controlId="todoList">
                            <Form.Control type="text" placeholder="请输入你的任务名称，按回车键确认" />

                            <div className="listGroup">
                                <div className="listGroupItem">
                                    <Form.Check type={'checkbox'} id={`check-api-${'checkbox'}`}>
                                        <Form.Check.Input type={'checkbox'} isValid />
                                        <Form.Check.Label>{`打代码`}</Form.Check.Label>
                                    </Form.Check>
                                    <Button variant="danger" size="sm" style={{display: 'none'}}>删除</Button>
                                </div>
                            </div>
                        </Form.Group>

                        <div className="footer">
                            <div className="footer-left">
                                <Form.Check.Input className="checkbox" type={'checkbox'} isValid />
                                <Form.Check.Label>{`已完成 0/全部 2`}</Form.Check.Label>
                            </div>
                            <Button variant="danger" size="sm">清楚已完成任务</Button>
                        </div>
                    </Form>
                </Card.Body>
                
            </Card>
        </Container>
    )
  }
}