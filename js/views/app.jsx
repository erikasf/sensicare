'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  login,
  signup,
  signout
} from '../redux/auth/action'

import { firebaseDb, firebaseAuth } from '../firebase/init'

class App extends Component {

  constructor(props) {
    super(props);
  }
  
    currentUser(){
      firebaseAuth.onAuthStateChanged(function(user) {
        if (user) {
          user
          console.log("user logined")
        } else {
          // No user is signed in.
          console.log("No user")
        }
      });
    }
  
    getCurrentUser(){
      return firebaseAuth.currentUser;
    }
    
    componentDidMount() {
      this.currentUser()
    }
  
    render(){
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
}

// Makes the Redux store available to the connect() calls in the component hierarchy below. Normally, you can’t use connect() without wrapping the root component in <Provider>.

// https://github.com/reactjs/react-redux/blob/master/docs/api.md


const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps)(App)

   // <aside class="sidebar dbg">
   //        <div class="sidebar--wrapper">

   //          <div class="sidebar__logo">
   //            <div class="logo">
   //              <img src="" alt="" />
   //            </div>
   //            <div class="client-name">
   //              Hahahah
   //            </div>
   //          </div>

   //          <nav class="sidebar--nav dbg">
   //            <ul>
   //              <li class="active">
   //                <a href="">
   //              	<span>a</span>
   //                </a>
   //              </li>
   //              <li>
   //                <a href="">
   //              	<span>b</span>
   //                </a>
   //              </li>
   //              <li>
   //                <a href="">
   //                  <span>c</span>
   //                </a>
   //              </li>
   //              <li>
   //                <a href="">
   //                  <span>d</span>
   //                </a>
   //              </li>
   //              <li>
   //                <a href="">
   //                  <span>e</span>
   //             	  </a>
   //              </li>
   //            </ul>
   //          </nav>

   //        </div>
   //      </aside>

   //      <main class="main--panel dbg">
   //        <header class="main--header">
   //     	    <nav>
   //     	      <ul>
   //     	        <li></li>
   //     	        <li>Logout</li>
   //     	      </ul>
   //     	    </nav>
   //        </header>
   //        <div class="container main--content">
   //        </div>
   //      </main>
