 import React from "react";
 import { useLocation} from 'react-router-dom';
 import { Navigate } from 'react-router-dom';
 import { useAuth } from './useAuth'

 const RequireAuth = ({children}) => {
     const location = useLocation();
     const {user} = useAuth();

     if (!user) {
         return <Navigate to='/auth' state={{from: location}} />
     }

     return children;
 }

export {RequireAuth};
