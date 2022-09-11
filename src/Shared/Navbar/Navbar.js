import React from 'react';
import { Link, NavLink, NavNavLink } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';


const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-end scroll-m-0">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col scroll-bg-none">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar shadow-lg">
          <div class="flex-1 px-2 mx-2">
            <Link to="/">
              <img className='h-[50px]' src={logo} alt="logo" />
            </Link>
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal font-semibold">
              {/* <!-- Navbar menu content here --> */}
              <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md border-none" to="/">Home</NavLink></li>
              <li class="dropdown dropdown-hover">
                <label tabindex="0" class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md">Services</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-bule-400 rounded-box w-auto">
                  <li><a>SEO</a></li>
                  <li class="dropdown dropdown-hover">
                    <label tabindex="0">Google Ads</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-bule-400 rounded-box w-auto">
                      <li>link 1</li>
                      <li>link 2</li>
                      <li>link 3</li>
                    </ul>
                  </li>
                  <li><a>Web Development</a></li>
                </ul>
              </li>
              <li><NavLink class=" hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/about">About</NavLink></li>
              <li><NavLink class=" hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/blogs">Blogs</NavLink></li>
              <li><NavLink class=" hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/contact">Contact Us</NavLink></li>
              <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/log-in">Login</NavLink></li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 font-semibold">
          {/* <!-- Sidebar content here --> */}
          <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/">Home</NavLink></li>
          <li class="dropdown dropdown-hover">
            <label tabindex="0" class="  hover:bg-[#54a6cf] hover:text-white m-1">Services</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-bule-400 rounded-box w-auto">
              <li class="dropdown dropdown-hover">
                <label tabindex="0" class="  hover:bg-[#54a6cf] hover:text-white m-1">Google Ads</label>
              </li>
              <li><a>SEO</a></li>
              <li class="dropdown dropdown-hover">
                <label tabindex="0">Google Ads</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-bule-400 rounded-box w-auto">
                  <li>link 1</li>
                  <li>link 2</li>
                  <li>link 3</li>
                </ul>
              </li>
              <li><a>Web Development</a></li>
            </ul>
          </li>
          <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/about">About</NavLink></li>
          <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/blogs">Blogs</NavLink></li>
          <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/contact">Contact Us</NavLink></li>
          <li><NavLink class="  hover:bg-[#54a6cf] hover:text-white m-1 rounded-md" to="/log-in">Login</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;