import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/others/register.png";
import formBg from "../../assets/reservation/login-bg.png";
import googleImg from "../../assets/icon/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form"

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {creatUser} = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
      console.log(data)
      creatUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
    }


    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const form = event.target; 
    //     const name = form.name.value; 
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password);

    //     creatUser(email, password)
    //     .then(result => {
    //       console.log(result.user);
    //       toast.success("User created Successfully!", { duration: 3000 }); 
    //     })
    //     .catch(error => {
    //       console.log(error.message);
    //     })
    // }
    return (
        <section style={{ backgroundImage: `url(${formBg})` }} className="hero bg-base-200 min-h-screen login-image">
        <Helmet>
        <title>Bistro Boss | Register</title>
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
              Register now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name",  { required: true })} 
                  name="name"
                  placeholder="Name"
                  className="input input-bordered focus:border-none hover:border-secondary "
                 
                />
                {errors.name && <span className="text-red-600 text-sm mt-2">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })} 
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:border-none hover:border-secondary "
                />
                 {errors.email && <span className="text-red-600 text-sm mt-2">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative flex items-center ">
                <input
                    type = {showPassword?"text" : "password"}
                    {...register("password", { 
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{3,}$/

                     })} 
                    name="password"
                    placeholder="password"
                    className="w-full input input-bordered focus:border-none hover:border-secondary"
                
                  />

                  <span className=" right-0 px-4 text-[20px] absolute "  onClick={() =>setShowPassword(!showPassword)}>
                   {
                      showPassword ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>
                   }
                  </span>
                </div>
                {errors.password?.type === "required" && <span className="text-red-600 text-sm mt-2">Password field is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-600 text-sm mt-2">Password must be 6 characters</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-600 text-sm mt-2">Password must be less then 20 characters</span>}
                {errors.password?.type === "pattern" && <span className="text-red-600 text-sm mt-2">Password must have at least one uppercase, one lowercase & one special characters</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-secondary hover:bg-secondary text-white">
                 Register
                </button>
              </div>
            </form>
            <div className="text-center font-medium space-y-4">
              <div className="text-center">
                <h5>Or Sign In with</h5>
                <Link>
                  {" "}
                  <img className="mx-auto mt-3 " src={googleImg} alt="" />
                </Link>
              </div>
              <h5 className="pb-5">
                Already have an account?{" "}
                <Link className="text-secondary" to="/login">
                 Login
                </Link>
              </h5>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
};

export default Register;