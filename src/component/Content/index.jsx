import React, { Component } from "react";


class Content extends Component {
  constructor() {
    super();
    //this指向实例对象
    this.shili = { all: "yes" };
  }

  //这里定义的属性指向实例对象，同constructor中属性
  state = {
    name: [
      { id: "01", firstname: "zhang", lastname: "gui" },
      { id: "02", firstname: "li", lastname: "hong" }
    ]
  };

  render() {
    let { name } = this.state;
    return (
      // ul标签下使用js需要加{}
      <ul>
        {name.map(item => (
          <li key={item.id} >
            {"firstname:" + item.firstname} --- {"lastname:" + item.lastname}
          </li>
        ))}
      </ul>
    );
  }
}

export default Content;
