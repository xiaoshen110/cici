import React from 'react'
import {Router,Route,NavLink,Switch,Redirect} from 'dva/router'

let fn = function ({ history, app}) {
  return (
    <Router history = {history}
  )
}

export default fn