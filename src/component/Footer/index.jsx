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