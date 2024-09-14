import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/register.png";
import formBg from "../../assets/reservation/login-bg.png";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLogin from "./SocialLogin/GoogleLogin";
import toast from "react-hot-toast";


const Login = () => {
const [showPassword, setShowPassword] = useState(false);
const [disabled, setDisabled] = useState(true); 
const {signIn} = useContext(AuthContext);
const navigate = useNavigate(); 
const location = useLocation(); 

const from = location.state?.form?.pathname || "/";  

useEffect(() => {
  loadCaptchaEnginge(6); 
}, [])

const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value; 
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      toast.success("User login Successfully!", { duration: 3000 }); 
      navigate(from, {replace: true}); 
    })
    .catch(error => {
      console.log(error.message); 
    })
}

const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value; 
    if(validateCaptcha(user_captcha_value)){
       setDisabled(false);
    }
    else{
      setDisabled(true);
    }
}
    return (
        <section style={{ backgroundImage: `url(${formBg})` }} className="hero bg-base-200 min-h-screen login-image">
        <Helmet>
        <title>Bistro Boss | Login</title>
       </Helmet>
        <div className="w-full p-14 ">
        <div  style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }} className="flex md:flex-row flex-col items-center gap-8 p-12">
          <div>
          <Link to="/">
              <FaHome className="text-4xl text-[#D1A054] hover:scale-110 duration-300" />
              </Link> 
            <img className="h-[460px]" src={loginImg} alt="" />
          </div>
          <div className=" bg-white w-full max-w-sm shrink-0">
            <h1 className="text-3xl font-bold text-center mt-5 text-secondary">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:border-none hover:border-secondary "
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative flex items-center ">
                <input
                    type = {showPassword?"text" : "password"}
                    name="password"
                    placeholder="password"
                    className="w-full input input-bordered focus:border-none hover:border-secondary"
                    required
                  />
                  <span className=" right-0 px-4 text-[20px] absolute "  onClick={() =>setShowPassword(!showPassword)}>
                   {
                      showPassword ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>
                   }
                  </span>
                </div>
                <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captha above"
                  className="input input-bordered focus:border-none hover:border-secondary "
                  // required
                />
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  disabled={false} className="btn bg-secondary hover:bg-secondary text-white">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center font-medium space-y-4">
              <div className="text-center">
                <h5>Or Sign In with</h5>
              <GoogleLogin></GoogleLogin>
              </div>
              <h5 className="pb-5">
                Do not Have an account?{" "}
                <Link className="text-secondary" to="/register">
                  Sign Up
                </Link>
              </h5>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
};

export default Login;