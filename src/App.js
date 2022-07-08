import React, {Component} from "react";
import Jumbotron from "./components/Jumbotron";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
    state = {
        todos: [

        ]
    }

    addIntoTodos = (todo) => {
        todo.id = Math.floor(Math.random()*(1000 - 10)-10);
        this.setState({todos:[...this.state.todos,todo]})
    }

    markTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done;
        this.setState({todos:copyTodos})
    }

    deleteTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index,1)
        this.setState({todos:copyTodos})
    }

    render() {
        return (
            <div className="wrapp">
                <Jumbotron/>
                <NewTodo addIntoTodos={this.addIntoTodos}/>
                <TodoList todos={this.state.todos} markTodo={this.markTodo} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default App;