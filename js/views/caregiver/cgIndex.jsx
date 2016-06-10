'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { loadPatients } from '../../redux/caregiver/actions'

class CgIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const { id } = this.props.params
  }

  renderShiftsList(){
    return this.props.caregiver.shifts.map((shift)=>{
      
      const { 
        first_name,
        last_name,
        id
      } = shift.patient

      const url = `/patients/${id}`
      return (
        <li key={id}><Link to={url}>{shift.start_at} : {first_name} {last_name}</Link></li>
      )
    })
  }
 
  render(){
    let shiftsComponents = (typeof this.props.caregiver.shifts == "undefined") ? null : this.renderShiftsList()
    return (
      <div>
        <h2>Shifts</h2>
        {shiftsComponents}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(CgIndex)


