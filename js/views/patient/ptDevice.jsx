import React, { Component } from 'react'
import { Link } from 'react-router'

class PtDevice extends Component {
  
  constructor(props){
    super(props)
  } 

  render(){   
    const { device_id } = this.props.patient
    return (
     <div>
       <h2>Device</h2>
       <li> device id: { device_id } </li>
     </div>
    )
  }
}

export default PtDevice
