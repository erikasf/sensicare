import React, { Component } from 'react'
import { Link } from 'react-router'

import AddMemoForm from './ptMemo/AddMemoForm'

class PtMemo extends Component {
  constructor(props){
    super(props)
  } 

  render(){
    return (
     <div>
       <h2>Memo</h2>
       <AddMemoForm />
     </div>
    )
  }
}

export default PtMemo
