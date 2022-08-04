import React from 'react'; 
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <li> <Link to="/home">Home</Link> </li>
                <li> <Link to="/blogs">Blogs</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;