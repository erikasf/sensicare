import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class PtSideBar extends Component {
  
  constructor(props){
    super(props)
  } 

  backToCgBoard(){
    const { careGiver } = this.props
    if (careGiver) {
      return(
        <li><Link to={`/caregivers/${careGiver.id}`}>Back to Main Panel</Link></li>
      )
    }
    
  }

  render(){
    const baseUrl = `/patients/${this.props.id}`
    return (
      <aside className="sidebar">
        <div className="sidebar__logo">
          <div className="logo">
          </div>
          <div className="client-name">         </div>
        
        </div>

        <nav className="sidebar--nav">
          <ul>
            {this.backToCgBoard()}
            <li><Link to={baseUrl}>Top</Link></li>
            <li><Link to={`${baseUrl}/device`}>Divice</Link></li>
            <li><Link to={`${baseUrl}/family`}>Family Member</Link></li>
            <li><Link to={`${baseUrl}/records`}>Records</Link></li>
            <li><Link to={`${baseUrl}/memo`}>Memo</Link></li>
          </ul>
        </nav>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  careGiver: state.careGiver
})
export default connect(mapStateToProps)(PtSideBar)
