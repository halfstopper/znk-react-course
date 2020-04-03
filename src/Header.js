import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <button className="navbar-brand brand">Developers rules</button>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                <li> <Link to='/index'>Home</Link></li>
                <li><Link to='/new'>New</Link></li>
              
                </ul>
            </div>
        </nav> 
    );
};
export default Header;
