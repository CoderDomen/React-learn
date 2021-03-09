import React, { Component } from "react";
import Header from "./component/Header";
import ItemList from "./component/ItemList";
import Footer from "./component/Footer";
class APP extends Component {
  state = {
    todos: [
      { id: "01", name: "吃饭", done: true },
      { id: "02", name: "睡觉", done: false },
      { id: "03", name: "打豆豆", done: false }
    ]
  };

  // 添加todo
  addTodo = todo => {
    let { todos } = this.state;
    todos.unshift(todo);
    this.setState(todos);
    // this.setState({
    //   todos: [todo, ...todos]
    // });
  };

  // 修改todo状态
  changeDone = (id, value) => {
    console.log(id, value);

    let { todos } = this.state;
    let newtodo = todos.find(item => {
      return item.id === id;
    });

    newtodo.done = value;
    this.setState({ newtodo });
  };

  // 删除todo
  dele = id => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => {
      return item.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  select = done => {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      return { ...item, done };
    });
    this.setState({ todos: newTodos });
  };

  clearHasDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => {
      return !item.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    let { todos } = this.state;
    return (
      // 必须使用一个div包裹，同vue
      <div style={{ width: "50%", margin: "100px auto" }}>
        {/* 父组件接收子组件的参数。不要与事件传参事件混淆，无须使用回调形式获取参数 */}
        <Header em={this.addTodo} />
        <ItemList todos={todos} emtt={this.changeDone} dele={this.dele} />
        <Footer
          todos={todos}
          select={this.select}
          clearHasDone={this.clearHasDone}
        />
        <br />
        <br />
        <br />
        当前页面：
        <br />
        1. 父子组件之间的传递与接收 <br />
        2. 鼠标经过离开item变化 <br />
        3. checkbox的使用（全选按钮的应用） <br />
      </div>
    );
  }
}

export default APP;
