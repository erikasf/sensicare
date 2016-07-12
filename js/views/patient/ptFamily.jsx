import React, { Component } from 'react'
import { Link } from 'react-router'

import AddFamilyForm from './ptFamily/AddFamilyForm'

class PtFamily extends Component {
  
  constructor(props){
    super(props)
  } 
  
  renderFamilyMember(){
    const { family_members } = this.props.patient
    
    if (typeof family_member == "undefined" || family_members.lenght == 0){
      
      return (
        <h2>No family member registered</h2>
      )

    } else {
     
      return family_members.map((member)=>{
        const { first_name, last_name } = member
        return(
          <li>{first_name} {last_name}</li>
        )
      })
    }
  }


  render(){
    const familyMemberList = this.renderFamilyMember()
    return (
     <div>
       <h2>Family Member</h2>
       <ul>
         {familyMemberList}
       </ul>
       <AddFamilyForm />
     </div>
    )
  }
}

export default PtFamily
