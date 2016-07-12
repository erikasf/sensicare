import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Select from 'react-select'

import {
  addShifts
} from '../../redux/caregiver/actions'


function _creaeteShiftObject(patients = []){
  let result = {}
  for (var i=0; i<patients.length; i++){
    result[patients[i]] = false
  }
  return result
}

class CgPatientsList extends Component {
  
  constructor(props){
    super(props)
    const patients = this.props.hospital.patients 
    this.state = {
      boxOpen: false,
      shifts: _creaeteShiftObject(patients)
    }
  } 
  
  componentDidMount(){
    const patients = this.props.hospital.patients 
    this.setState({
      shifts: _creaeteShiftObject(patients)
    })
  }

  changeConfirmBox(event){
    event.preventDefault()
    this.setState({
      boxOpen: !this.state.boxOpen
    })
  }
 
  addShift(id, event){
    const obj = this.state.shifts
    obj[id] = !this.state.shifts[id] || false
    this.setState({
      shifts: obj
    }, ...this.state.shifts)
  }

  hourOptions(){
    let option = []
    let hourNow = moment().format('h')
    for(var i = 0; i < 24; i++){
      let num = i
      if (num < 10) {
        num = "0" + i
      } 

      let op = num == hourNow ? (
        <option value={`${num}`} selected>{num}</option>
      ) : (
        <option value={`${num}`}>{num}</option>
      ) 
      option.push(op)
    }
    return option
  }

  minOptions(){
    let option = []
    let minNow = moment().format('m')
    for(var i = 0; i < 60; i++){
      let num = i
      if (num < 10) {
        num = "0" + i
      } 
      let op = num == minNow ? (
        <option value={`${num}`} selected>{num}</option>
      ) : (
        <option value={`${num}`}>{num}</option>
      ) 

      option.push(op)
    }
    return option
  }

  renderPatientsList(){
    const hospital = this.props.hospital
    const patientsList = (typeof hospital.patients == "undefined") ? null : hospital.patients.map((patient)=>{
        
      const { 
        first_name,
        last_name,
        id,
        room_number
      } = patient

      const url = `/patients/${id}`     
      return (
        <tr key={id}>
          <td>{id}</td>
          <td><Link to={url}>{first_name} {last_name}</Link></td>
          <td>{room_number}</td>
          <td></td>
          <td><input type="checkbox" onChange={this.addShift.bind(this, id)} value={id} name="shift" ref={id} /></td>
        </tr>
      )
    })
    return patientsList
  }

  submitShift(){
    const hour = this.refs.hour.value,
          min = this.refs.min.value,
          date = this.refs.date.value,
          shifts =  this.state.shifts;

    const patientIds = Object.keys(shifts).map((key)=>{
      if (typeof key != "undefined" && shifts[key] == true){
        return key
      }
    })

    const time = `${date} ${hour}:${min}`
    const data = {}
 
    data.id = this.props.params.id
    data.patient_ids = patientIds
    data.time = time
    this.props.dispatch(addShifts(data))
  }

  renderConfirmBox(){
    if (!this.state.boxOpen) {
      return null
    }
    return (
      <div className="card card--confirm--box">
        <h5>Assingment</h5>
        <button onClick={this.submitShift.bind(this)}>Add shift</button>
      </div>
    )
  }

  render(){
    let options = this.hourOptions()
    let minOptions = this.minOptions()
    let today = moment().format("YYYY-MM-DD")
    return (
      <div>
       {this.renderConfirmBox()}
       <div className="card">
         <h5 className="card__title">ASSIGNMENT</h5>
         <table className="card--shift__table">
           <tbody>
             <tr className="card--shift__header">
               <th>UID</th>
               <th>NAME</th>
               <th>ROOM No</th>
               <th>STATUS</th>
               <th>SELECT PATIENTS</th>
             </tr>
             {this.renderPatientsList()}
           </tbody>
         </table>
         <div className="card__footer">
           <input type="date" name="date" ref="date" value={today}/>
           <select id="hour" name="" ref="hour">
             {options}
           </select>
           :
           <select id="min" name="" ref="min">
             {minOptions}
           </select>
           <button className="btn--card" onClick={this.changeConfirmBox.bind(this)}>Assign</button>
         </div>
       </div>
     </div>
    )
  }
}

export default CgPatientsList
