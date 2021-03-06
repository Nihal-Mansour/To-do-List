import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todolist from "./components/Todolist";
import Navbar from "./components/Navbar";
import Addaction from "./components/Addaction";
import { v4 as uuid } from "uuid";
import Aboutpage from "./components/Aboutpage";
import Alert from "./components/Alert";

class App extends Component {
  state = {
    showalert: false,
    todos: [
      {
        id: uuid(),
        title: "Sports",
        action: "Perform some Exercises",
        done: false,
      },
      {
        id: uuid(),
        title: "Education",
        action: "Watching Web development Courses",
        done: true,
      },
      {
        id: uuid(),
        title: "Entertainment",
        action: "Go to the Garden",
        done: false,
      },
    ],
  };

  actioniscompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    });
  };

  actionisdeleted = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addaction = (action, title) => {
    const newaction = {
      id: uuid(),
      title,
      action,
      done: false,
    };
    if (newaction.title !== "" && newaction.action !== "") {
      this.setState({ todos: [...this.state.todos, newaction] });
    } else {
      this.setState({ showalert: true });
    }
  };
  render() {
    let closealert = () => this.setState({ showalert: false });
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <div className="cardbox">
                  <Todolist
                    todos={this.state.todos}
                    actioniscompleted={this.actioniscompleted}
                    actionisdeleted={this.actionisdeleted}
                    editingaction={this.editingaction}
                  />
                </div>
                <Addaction addaction={this.addaction} />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={Aboutpage} />
          <Alert show={this.state.showalert} onHide={closealert} />
        </div>
      </Router>
    );
  }
}

export default App;
