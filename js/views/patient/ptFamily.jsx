import React, { Component } from 'react'
import { Link } from 'react-router'

import AddFamilyForm from './ptFamily/AddFamilyForm'

class PtFamily extends Component {
  constructor(props){
    super(props)
  } 

  render(){

    return (
     <div>
       <h2>Family Member</h2>
       <AddFamilyForm />
     </div>
    )
  }
}

export default PtFamily
