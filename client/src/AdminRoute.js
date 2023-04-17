import { getUser } from "./services/authorize";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute=()=> {
  return (
    getUser()?<Outlet/> : <Navigate to='/login'/>
    // <Route
    //   {...rest}
    //   element={
    //     getUser() ? (
    //       <Component />
    //     ) : (
    //       <Navigate
    //         to={{ pathname: "/login"}}
    //         replace
    //       />
    //     )
    //   }
    // />
  );
}

export default AdminRoute;
