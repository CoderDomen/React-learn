import React, { Component } from "react";
import qs from "querystring";
import "./index.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    console.log(props); //路由组件固定只有三个属性
  }
  render() {
    let { name: mingzi, age } = qs.parse(this.props.location.search.slice(1));
    console.log(mingzi, age);
    return (
      <div className="uk" style={{ fontSize: "50px" }}>
        <p>我是footer组件</p>
        <p className="lk">
          {mingzi},我的年龄是{age}
        </p>
      </div>
    );
  }
}

export default Footer;
