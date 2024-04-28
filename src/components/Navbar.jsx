import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
const { user, logOut } = useContext(AuthContext);
console.log(user?.photoURL)
  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
      <li><NavLink to="/addTouristsSpot"> Add Tourists Spot</NavLink></li>
      <li><NavLink to="/myList">MyList</NavLink></li>
    </>
  )



  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-md lg:text-xl ">Tourism Management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div title={user?.displayName} className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  <span className="badge">{user?.displayName}</span>
                </a>
              </li>
              <li><a onClick={handleSignOut}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-3" >
            <Link to='/login' className="btn btn-sm">Login</Link>
            <Link to="/register" className="btn btn-sm">Register</Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// onClick={handleSignOut}