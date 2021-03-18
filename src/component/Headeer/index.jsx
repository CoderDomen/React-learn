import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props); //一般组件传什么有什么
    // this.test()
  }


  //1. 这里定义的属性在实例对象上，同时必须使用箭头函数的形式（this指向取决于定义上下文位置），即内部的this指向实例组件；若是使用普通函数，this指向调用者(我们并未主动触发----使用btnClick()，所以此时的调用者为window) class类中方法默认使用严格模式，this指向undefind
  //2.ref使用字符串形式从this.refs获取 ，    //ref使用回调函数方法直接从this实例组件获取
  //3. 修改状态必须使用setState改变才能达到响应式页面效果
  btnClick = () => {
    const { inp } = this;
    alert(inp.value);
  };
  // btnClick(){
  //   console.log(this);  //这里的this理应指向触发者window，但严格模式下指向了undefind
  // }
  test() {
    console.log(this);  //这里的this指向触发者，即在constructor中的this（为组件实例）
  }


  changeDone = (e, id) => {
    this.props.changeDone(e, id);
  };

  // 1. ref采用回调形式获取该dom节点，react会执行该函数，采用箭头函数，this指向实例对象，因此实例中该属性获取该节点
  // 2.关于事件传参不能直接使用{this.changeDone(id)}，在react中该方法会被直接调用，
  //   2.1可以通过箭头函数方法{(e)=>{this.changeDone(e,item.id)}，
  //   2.2获取使用函数柯里化return该方法回去
  // 3.todos应该要在这里解构出来，因为每次修改都会重新调用render，当在constructor中解构无法获取到新的修改后的todos
  render() {
    const { todos } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="请输入文字信息..."
          ref={c => (this.inp = c)}
        />
        <button onClick={this.btnClick}>点击我展示输入框内容</button>
        <ul>
          {todos.map(item => (
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
