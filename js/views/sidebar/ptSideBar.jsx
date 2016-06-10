import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class PtSideBar extends Component {
  
  constructor(props){
    super(props)
  } 

  render(){
    const baseUrl = `/patients/${this.props.id}`
    return (
      <aside>
        <ul>
          <li><Link to={baseUrl}>Top</Link></li>
          <li><Link to={`${baseUrl}/device`}>Divice</Link></li>
          <li><Link to={`${baseUrl}/family`}>Family Member</Link></li>
          <li><Link to={`${baseUrl}/records`}>Records</Link></li>
          <li><Link to={`${baseUrl}/memo`}>Memo</Link></li>

        </ul>
      </aside>
    )
  }
}

export default PtSideBar
