import React, { Component } from "react";
import "./index.scss";
import qs from "querystring";

class Footer extends Component {
  constructor(props) {
    super(props);
    console.log(props); //路由组件固定只有三个属性
    let search = qs.parse(this.props.location.search);
    console.log(search);
  }
  render() {
    return (
      <div className="uk" style={{ fontSize: "50px" }}>
        我是footer组件 <span className="lk">我是footer组件下的span标签</span>
      </div>
    );
  }
}

export default Footer;
