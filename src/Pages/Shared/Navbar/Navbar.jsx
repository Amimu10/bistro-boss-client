import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

    const navItems = <>
         <li>
            <Link>Home</Link>
         </li>
         <li>
            <Link to="/menu">Our Menu</Link>
         </li>
         <li>
            <Link to="/order">Order Food</Link>
         </li>
  
    </>

    const handleLogOut = () => {
      logOut()
      .then(() => {
 
      })
      .catch(error => {
        console.log(error.message);
      })

    }
    return (

       <div className=" mx-auto "> 
        <div className="navbar fixed left-0 right-0 top-0 z-10 bg-black bg-opacity-50 lg:text-white "> 
       <div className="container mx-auto px-4">   
       <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-center">
             {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost md:text-xl text-lg text-white ">Bistro Boss</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-center">
         {navItems}
          </ul>
        </div>
        <div className="navbar-end flex justify-end mx-4">
        {
      user ? <button onClick={handleLogOut} className="btn btn-ghost uppercase text-white bg-secondary px-3 py-2">Sign Out</button>
      :
      <Link to="/login"
      ><button className="btn btn-ghost text-white uppercase bg-secondary px-3 py-2">Login</button>
      </Link>
     }
        </div>
       </div>
       </div>
      </div>

    );
};

export default Navbar;