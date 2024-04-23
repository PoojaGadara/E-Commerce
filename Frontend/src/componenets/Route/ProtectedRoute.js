import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate  , Routes} from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    console.log('Element',element)
        const { loading, isAuthenticated } = useSelector((state) => state.user);
        console.log("is authenticate",isAuthenticated)
        
        console.log(isAuthenticated ? true : <Navigate to="/login" />)
        return isAuthenticated ? <Routes><Route>element</Route></Routes>: <Navigate to="/login" />;
      
};

export default ProtectedRoute;

