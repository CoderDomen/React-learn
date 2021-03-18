import React, { Component } from "react";
import {NavLink, Redirect, Switch, Route } from "react-router-dom";
import Header from "./component/Headeer";
import Footer from "./component/Footer";
import Content from "./component/Content";
import './App.scss'

class App extends Component {
  state = {
    todos: [
      { id: "01", name: "吃饭", done: false },
      { id: "02", name: "睡觉", done: false },
      { id: "03", name: "大东东", done: false }
    ],
    myInfo:{name:"天青色等烟雨，而我在等你",age:'28'}
  };


  // 修改状态
  changeDone = (e, id) =>{
    const {todos} = this.state
    console.log(e,id);
    let newTodos = todos.map(item=>{
      if(item.id === id) return {...item,done:!item.done}
      return item
    })
    this.setState({todos:newTodos})
  }


  render() {
    let { todos,myInfo } = this.state;
    return (
      <div>
        <Header todos={todos}  changeDone={this.changeDone}/>
        <hr style={{margin:'50px 0'}} />

        <NavLink className="btnRout" to="/content">点击content组件</NavLink>
        <NavLink className="btnRout" to={`/footer?name=${myInfo.name}&age=${myInfo.age}`}>点击footer组件</NavLink>
        <Redirect from="/" to="/content"></Redirect>
        <Switch>
          <Route path="/content" component={Content}></Route>
          <Route path="/footer" component={Footer} ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
