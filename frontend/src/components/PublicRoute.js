import React from "react"
import { Route } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
import NavigationBar from "./NavigationBar"

export default function PublicRoute({ component: Component, ...rest }) {
  // const { currentUser } = useAuth()
  return (
    <>
      <NavigationBar />
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />
        }}
      ></Route>
    </>
  )
}
