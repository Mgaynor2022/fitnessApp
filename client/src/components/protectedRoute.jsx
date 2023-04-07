import React from 'react'
import { Navigate } from 'react-router'

export default function PrivateRoute(props) {
    const {token, children, redirectTo} = props
    return token ? <>{children}</> : <Navigate to={redirectTo} />;
  }