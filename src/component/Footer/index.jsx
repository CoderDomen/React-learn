<<<<<<< HEAD
import React, { Component } from "react";
import "./index.scss";

class Footer extends Component {
  select = e => {
    // console.log(e);
    this.props.select(e.target.checked);
  };

  clearHasDone = () => {
    this.props.clearHasDone();

  };


  render() {
    const { todos } = this.props;
    let all = todos.length;
    // console.log(all);

    let hasDone = todos.reduce((pre, item) => {
      return pre + (item.done ? 1 : 0);
    }, 0);
    return (
      <div className="footer_wrapper">
        <input
          type="checkbox"
          checked={hasDone === all && all!==0 ? true : false}
          onChange={this.select}
        />{" "}
        已完成{hasDone} / 全部{all}{" "}
        <button
          className="clear"
          style={{ outline: "none" }}
          onClick={this.clearHasDone}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}

export default Footer;
=======
import React, { Component } from 'react'
// import qs from 'querystring'

import './index.scss'

class Footer extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
    // let aa = qs.parse(this.props.location.search)
    // console.log(aa);
    
    

  }
 render(){
   return (
     <div className="uk" style={{fontSize:"50px"}}> 
    我是footer组件 <span className="lk">我是footer组件下的span标签</span> 
    </div>
   )
 }
}

export default Footer
>>>>>>> b395f0a6ba2313dcfb6efa4058f7b76e747e791a
