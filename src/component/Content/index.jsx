import React, { Component } from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import Car from "./Content_Car";
import New from "./Content_New";
class Content extends Component {
  constructor(props) {
    super(props);
    console.log(props); //路由组件固定只有三个属性
  }

  render() {
    return (
      <div>
        <NavLink className="btnRout short" to="/content/car">Car</NavLink>
        <NavLink className="btnRout short" to="/content/new">New</NavLink>
        <Redirect to="/content/car"></Redirect>

        <Route path="/content/car" component={Car}></Route>
        <Route path="/content/new" component={New}></Route>
        
      </div>
    );
  }
}

export default Content;
