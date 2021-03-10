import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    // console.log(this);

    // console.log(this.props);

    let { todos } = this.props;
    this.todos = todos;
    console.log(todos);
  }

  //1. 这里定义的属性在实例对象上，同时必须使用箭头函数的形式（this指向取决于定义上下文位置），即内部的this指向实例组件，若是使用普通函数，this指向调用者(在原生js中) /  window  /class类中方法默认使用严格模式，this指向undefind
  //2.ref使用字符串形式从this.refs获取 ，    //ref使用回调函数方法直接从this实例组件获取
  //3. 修改状态必须使用setState改变才能达到响应式页面效果
  btnClick = () => {
    const { inp } = this;
    alert(inp.value);
  };

  changeDone = (e, id) => {
    console.log(e.target.innerText);
    console.log(id);

    let todo = this.todos.find(item => {
      return item.id === id;
    });
    console.log(todo);

    todo.done = !todo.done;
    console.log(todo);
    this.setState({ todo });
  };

  render() {
    return (
      // 1. ref采用回调形式获取该dom节点，react会执行该函数，采用箭头函数，this指向实例对象，因此实例中该属性获取该节点
      // 2.关于事件传参不能直接使用{this.changeDone(id)}，在react中该方法会被直接调用，
      //   2.1可以通过箭头函数方法{(e)=>{this.changeDone(e,item.id)}，
      //   2.2获取使用函数柯里化return该方法回去
      <div>
        <input
          type="text"
          placeholder="请输入文字信息..."
          ref={c => (this.inp = c)}
        />
        <button onClick={this.btnClick}>点击我展示输入框内容</button>
        <ul>
          {this.todos.map(item => (
            <li key={item.id}>
              {item.id} --- {item.name} ---
              <span
                onClick={e => {
                  this.changeDone(e, item.id);
                }}
              >
                {item.done ? "完成" : "未完成"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
