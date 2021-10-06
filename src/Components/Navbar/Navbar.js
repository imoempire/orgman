import React from "react";
import logo from '../../Image/logo1Copy.png';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbars" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={logo} width="100" height="600" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
