import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
 render (){
   return(
     <header>
        <div className="container-fluid">
          <nav className="navbar nav-bg">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="welcome">Welcome</div>
                </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav right">
                  <li><NavLink exact to="/" className="links" activeClassName="activeNav">Home</NavLink></li>
                  <li><NavLink to="/task" className="links"  activeClassName="activeNav">Task</NavLink></li>
                </ul>
              </div>{/* <!--/.nav-collapse --> */}
            </div> {/*}<!--/.container-fluid --> */}
          </nav>
        </div>

     </header>
   );
 }
}

export default Header;
