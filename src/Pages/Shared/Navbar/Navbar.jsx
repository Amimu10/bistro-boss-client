import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const name = user?.displayName;  
  const photo = user?.photoURL;
  const [cart] = useCart(); 
  
    const navItems = <>
         <li>
            <Link>Home</Link>
         </li>
         <li>
            <Link to="/menu">Our Menu</Link>
         </li>
         <li>
            <Link to="/order/:category">Order Food</Link>  
         </li>  
         <li>
            <Link to="/">
            <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-[18px] text-white" />
                <div className="badge badge-secondary">{cart.length}</div> 
            </div></Link>  
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
        <div className="navbar-end flex justify-end mx-2">
        <li className="flex gap-2  items-center">
              {user ? (
                <>
                  {name && photo && ( 
                    <>
                      <p className="text-[#eee] font-young text-sm">{name}</p>
                      <img 
                        src={photo}
                        className="inline items-center mr-3 h-10 w-10 rounded-full"
                        alt=""
                      />
                    </>
                  )}
                  <NavLink onClick={handleLogOut}>
                    <Link className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded">
                      Sign Out
                    </Link>
                  </NavLink>
                </>
              ) : (
                <NavLink>
                  <Link
                    to="/login"
                    className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded"
                  >
                    Login
                  </Link>
                </NavLink>
              )}
            </li>
     
        </div>
       </div>
       </div>
      </div>

    );
};

export default Navbar;