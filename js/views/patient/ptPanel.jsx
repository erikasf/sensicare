import React, { Component } from 'react'
import { Link } from 'react-router'

import PtSideBar from '../sidebar/ptSideBar'

class PtPanel extends Component {
  
  constructor(props){
    super(props)
  } 

  render(){
    const id = this.props.params.id 
    return (
    <div>
      <PtSideBar id={id} />
      {this.props.children}
     </div>
    )
  }
}

export default PtPanel
