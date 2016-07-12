import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

/* Redux */
import { fetchDeviceData } from '../../redux/patient/actions'


class PtRecords extends Component {
  
  constructor(props){
    super(props)
  } 

  render(){
    const records = this.props.patient.healthData.map((record)=>{
  return (
    <li>{ record.key }: { record.body } </li>
  )
}) 
    return (
     <div>
      {records}
     </div>
    )
  }
}

export default PtRecords


