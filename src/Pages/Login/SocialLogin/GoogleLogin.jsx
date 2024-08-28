import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import googleImg from "../../../assets/icon/google.png";


const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
 
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    
    return (
        <div>
           <button type="button" onClick={handleGoogleSignIn}>
         <img className="mx-auto mt-3 " src={googleImg} alt="" />
           </button>
        </div>
    );
};

export default GoogleLogin;