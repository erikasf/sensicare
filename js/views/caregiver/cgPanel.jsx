import React, { Component } from 'react'
import { connect } from 'react-redux'

/* Component */
import CgSideBar from '../sidebar/cgSideBar'

/* Redux */
import { loadPatients } from '../../redux/caregiver/actions'


class CgPanel extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(loadPatients(this.props.params.id))
  }

  render(){
    const id = this.props.params.id
    const children = React.Children.map(this.props.children, (child)=>{
      return React.cloneElement(child, this.props)
    })
    return (
      <div>
        <CgSideBar id={id} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  caregiver: state.careGiver
})
export default connect(mapStateToProps)(CgPanel)


