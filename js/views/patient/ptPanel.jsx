import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { 
  fetchDeviceData, 
  loadPatient,
  registerListeners
} from '../../redux/patient/actions'


import Header from '../common/header'
import PtSideBar from '../sidebar/ptSideBar'

class PtPanel extends Component {

  constructor(props){
    super(props)
    this.state = { id: this.props.params.id }
  }

  render(){
    const id = this.props.params.id
    const PatientComponentsChildren = React.Children.map(this.props.children, (child) => {
    
      return React.cloneElement(child, {
        auth: this.props.auth,
        patient: this.props.patient
      })
    
    })

    return (
      <div>
        <PtSideBar id={id} />
        <div className="main--panel"> 
          <Header />
          {PatientComponentsChildren}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  patient: state.patient
})
export default connect(mapStateToProps)(PtPanel)
