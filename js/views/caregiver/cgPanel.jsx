import React, { Component } from 'react'
import { connect } from 'react-redux'

/* Component */
import CgSideBar from '../sidebar/cgSideBar'
import Header from '../common/header'

/* Redux */
import { 
  loadCaregiver,
  registerListeners
} from '../../redux/caregiver/actions'


class CgPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount(){
    this.props.dispatch(loadCaregiver(this.props.params.id, this.props.auth.remember_token))
  }

  render(){
    const id = this.props.params.id
    const children = React.Children.map(this.props.children, (child)=>{
      return React.cloneElement(child, {
        caregiver: this.props.caregiver,
        hospital: this.props.hospital,
        auth: this.props.auth,
        dispatch: this.props.dispatch
      })
    })

    // * TODO: need to be secured
    return (
      <div>
        <CgSideBar id={id} auth={this.props.caregiver}/>
        <main className="main--panel">  
          <Header />
          <div className="main--content">
           {children}
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  caregiver: state.careGiver,
  hospital: state.hospital,
  auth: state.auth
})
export default connect(mapStateToProps)(CgPanel)


