import React, { Component } from 'react'
import { Link } from 'react-router'

class PtIndex extends Component {
  
  constructor(props){
    super(props)
  } 

  render(){
    const { first_name, last_name } = this.props.patient
    return (
     <div>
       <h2>Index</h2>
       <li>{ first_name } { last_name }</li>
     </div>
    )
  }
}

export default PtIndex
