import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
 render (){
   return(
     <header>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Welcome USERNAME</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/tasks">Tasks</NavLink></li>
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
