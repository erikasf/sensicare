'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Route, Router, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


/* Dev Tool */
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


/* Redux */
import { Provider } from 'react-redux' 
import configureStore from './redux/store.js' 


/* Component */
import App from './views/app'
import Login from './views/login'


/* Component - caregiver*/

import CgPanel from './views/caregiver/cgPanel'
import CgIndex from './views/caregiver/cgIndex'
import CgPatientsList from './views/caregiver/cgPatientsList'
import CgShift from './views/caregiver/cgShift'
import CgNotification from './views/caregiver/cgNotification'
import CgRegisterPatient from './views/caregiver/cgRegisterPatient'

/* Component - patient */

import PtPanel from './views/patient/ptPanel'
import PtIndex from './views/patient/ptIndex'
import PtFamily from './views/patient/ptFamily'
import PtMemo from './views/patient/ptMemo'
import PtRecords from './views/patient/ptRecords'
import PtDevice from './views/patient/ptDevice'

/* Component - Error */
import error404 from './views/error/error404'
import error401 from './views/error/error401'


/********************/
/* Development      */
/********************/

let DevTools;

/* Devtool */
if (process.env.NODE_ENV != "production"){
  DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
  )
}


// initialize store
const store = DevTools ? configureStore(DevTools) : configureStore();

// bind hisotry to redux
const history = syncHistoryWithStore(browserHistory, store)


render((
  <Provider store={store}>	
    <div>
      <Router history={history}>
        <Route path="/" component={App} >
          <IndexRoute component={Login} />
          <Route path="signup" component={Login} />
        
          <Route path="caregivers/:id" component={CgPanel} >
            <IndexRoute component={CgIndex} />
            <Route path="patients" component={CgPatientsList} />
            <Route path="tracking" component={CgShift}  />
            <Route path="notifications" component={CgNotification} />
            <Route path="register_patient" component={CgRegisterPatient} />
          </Route>

          <Route path="patients/:id" component={PtPanel} >
            <IndexRoute component={PtIndex} />
            <Route path="family" component={PtFamily} />
            <Route path="memo" component={PtMemo}  />
            <Route path="records" component={PtRecords} />
            <Route path="device" component={PtDevice} />
          </Route>

          <Route path="not_found" component={error404} />     
          <Route path="access_error" component={error401} />
        </Route>
      </Router>
    <DevTools />
  </div>
  </Provider>
), document.getElementById('app'))

