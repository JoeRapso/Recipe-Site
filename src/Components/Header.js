import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return (
        <header>
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <Link to="/"  class="navbar-brand d-flex align-items-center">
                    <strong>Recipe Center</strong>
                    </Link>
                    <Link to="/download">
                     <button type="button" class="btn btn-warning">Download recipes</button>
                    </Link>

                </div>
            </div>
      </header>
    )
}

export default Header