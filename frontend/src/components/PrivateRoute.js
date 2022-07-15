import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import NavigationBar from "./NavigationBar"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    <>
      <NavigationBar />
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}
      ></Route>
    </>
  )
}
