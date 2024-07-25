import './App.css';
import React,{Component} from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { Container, Card, Form } from "react-bootstrap";


export default class App extends Component {
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: false},
      {id: '003', name: '打豆豆', done: false},
      {id: '004', name: '打代码', done: false},
    ]
  }
  addTodo = (todo)=>{
    const {todos} = this.state
    const newTodos = [todo, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  updateTodo = (todo)=>{
    const {todos} = this.state
    const newTodos = todos.map((item)=>{
      if (item.id === todo.id) {
        return todo
      }
      return item
    })
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (todo)=> {
    const {todos} = this.state
    const newTodos = todos.filter((item)=>{
      return item.id !== todo.id
    })
    this.setState({
      todos: newTodos
    })
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((item)=>{
      return {...item, done: done}
    })
    this.setState({
      todos: newTodos
    })
  }
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((item)=>{
      return !item.done
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    const {todos} = this.state
    return (<div>

        <Container>
            {/* <Card className="justify-content-md-center">
                <Card.Header>TODOLIST</Card.Header>
                <Card.Body>
                    <div>
                        <Form.Group controlId="todoList">
                            <Header addTodo={this.addTodo} />

                            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        </Form.Group>

                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                    </div>
                </Card.Body>
                
            </Card> */}
            <h1 className="justify-content-md-center">畅茜茜、万新、你们好啊</h1>
            <h1 className="justify-content-md-center">这是一个还不知道做什么的网站</h1>
        </Container>
      
    </div>)
  }
}