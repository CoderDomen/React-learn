import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import NewItem from "./Content_New_item";

class MyComponent extends Component {
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
      <div>
        {/*  ul标签下使用js需要加{} */}
        <ul>
          {name.map(item => (
            <li key={item.id}>
              <Link to={`/content/new/newItem/${item.firstname}/${item.lastname}`}>
                {"firstname:" + item.firstname} --- {"lastname:" + item.lastname}
              </Link>
            </li>
          ))}
        </ul>

        <Route path="/content/new/newItem/:first/:last" component={NewItem}></Route>
      </div>
    );
  }
}

export default MyComponent;
