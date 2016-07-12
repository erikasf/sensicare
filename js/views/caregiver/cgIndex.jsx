/* React & Redux modules */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

/* Redux */
import { loadPatients } from '../../redux/caregiver/actions'

/* Component */
import Map from '../common/map'
import LineChart from '../common/lineChart'

import moment from 'moment'

function is_today(date) {
  const shiftDate = new Date(date),
        currentDate = moment().format('l'),
        formatedShiftDate = shiftDate.toLocaleDateString()
  return currentDate == formatedShiftDate
}


class CgIndex extends Component {

  constructor(props) {
    super(props);
  }

  generateMarkers(){
  
    let locations = []
    if (typeof this.props.caregiver.shifts == "undefined"){
      return locations
    }

    this.props.caregiver.shifts.forEach((shift)=>{
      if (typeof shift.patient.healthData != 'undefined') {
        const data = shift.patient.healthData
        const { latitude, longitude } = data[Object.keys(data)[Object.keys(data).length - 1]] 
        locations.push({ position: new google.maps.LatLng(latitude, longitude), showInfo: false })
      }
    })
    return locations
  }

  renderShiftsList(){
    return this.props.caregiver.shifts.map((shift)=>{
      if (!is_today(shift.start_at)) {
        return null
      }

      const { 
        first_name,
        last_name,
        id
      } = shift.patient

      const url = `/patients/${id}`
      return (
        <tr key={id}>
          <td>{id}</td>
          <td><Link to={url}>{first_name} {last_name}</Link></td>
          <td></td>
        </tr>
      )
    })
  }

  render() {
    let shiftsComponents = (typeof this.props.caregiver.shifts == "undefined") ? null : this.renderShiftsList()
    
    return (
      <div>
        <div className="card card--shift">
          <h5 className="card__title">ASSIGNMENT</h5>
          <table className="card--shift__table">
            <tbody>
              <tr className="card--shift__header">
                <th>UID</th>
                <th>NAME</th>
                <th>ROOM No</th>
                <th>STATUS</th>
              </tr>

            {shiftsComponents}
            </tbody>
          </table>
        </div>
        <div className="card card--map">
          <Map markers={this.generateMarkers()}/>
        </div>
        <div className="clear--both"></div>
        <div className="card card--graph">
          <LineChart patientShifts={this.props.caregiver.shifts}/>  
        </div>   
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  caregiver: state.careGiver
})

export default connect(mapStateToProps)(CgIndex)
