import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate} from "react-router";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className="text-center py-12">
            <p className="bg-base-200 text-secondary text-[20px] px-4 py-3">Loading...</p>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate state={{form: location}} to="/login"></Navigate>
};

export default PrivateRoute;
