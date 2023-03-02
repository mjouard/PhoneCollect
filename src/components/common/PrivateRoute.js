// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { getUserRole } from '../../utils/utils'
import {Navigate, useLocation} from "react-router-dom"

const AdminRoute = ({children}) => {
    const userRole = getUserRole();
    let location = useLocation();

    if(userRole !== "admin") {
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};

export default AdminRoute;

