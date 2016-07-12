import React, { Component } from 'react'
import { Link } from 'react-router'
import { clnd } from '../../vendor/clnd.js'
import moment from 'moment'

class CgShift extends Component {
  
  constructor(props){
    super(props)
  } 

  componentDidMount(){
    this.renderCalender()
  }

  renderCalender(){
    $('#calender').clndr({
      event: [{date: '2017-07-01', title: 'CLNDR Github', url: '' }],
      clickEvents: {
        click(target){
          console.log(target)
        }
      }
    })
  }

  renderShiftList(){
    const caregiver = this.props.caregiver
    const shifts = (typeof caregiver.shifts == "undefined") ? null : caregiver.shifts.map((shift)=>{
      const { start_at, patient } = shift
      const { 
        first_name,
        last_name,
        id,
        room_number
      } = patient
      
      const start_date = moment(start_at).format("Do MM (ddd)") 
      const start_time = moment(start_at).format("HH:mm a") 
      const url = `/patients/${id}`     
      return (
        <tr key={id}>
          <td>{start_date}</td>
          <td>{start_time}</td>
          <td><Link to={url}>{first_name} {last_name}</Link></td>
          <td>{room_number}</td>
        </tr>
      )
    })
    return shifts
  }

  render(){
    
    return (
    <div>
      <div className="card card--md card--clnd">
        <div id="calender" className="cal1"></div>
      </div>

      <div className="card card--sm card--shift">
        <h5 className="card__title">SHIFT SCHEDULE</h5>
             <table className="card--shift__table">
           <tbody>
             <tr className="card--shift__header">
               <th>Date</th>
               <th>Start At</th>
               <th>NAME</th>
               <th>ROOM Mo</th>
               <th></th>
             </tr>
             {this.renderShiftList()}
           </tbody>
         </table>

      </div>
    </div>
    )
  }
}

export default CgShift
