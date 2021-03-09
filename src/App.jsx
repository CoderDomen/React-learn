import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import Header from "./component/Headeer";
import Footer from "./component/Footer";
import Content from "./component/Content";

class App extends Component {
  state = {
    todos: [
      { id: "01", name: "吃饭", done: false },
      { id: "02", name: "睡觉", done: false },
      { id: "03", name: "大东东", done: false }
    ]
  };
  render() {
    let { todos } = this.state;
    return (
      <div>
        <Header todos={todos} />
        <Link to="/content/">点击content组件</Link>
        <Link to="/footer?name=tom&age=18">点击footer组件</Link>
        <Redirect from="/" to="/content"></Redirect>
        <Switch>
          <Route path="/content" component={Content}></Route>
          <Route path="/footer" component={Footer}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
