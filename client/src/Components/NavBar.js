import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import {AuthContext} from '../Context/AuthContext';

const Navbar = props => {
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);


  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);           
      }
    });
  };

    const unauthenticatedNavBar = () => {
        return(
            <>

                <Link to='/login'>
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>  
            </>
        )
    }

    const authenticatedNavBar = () =>{
        return(
            <>
            <Link to='/events'>
                <li className="nav-item nav-link">
                    Events
                </li>
            </Link>
           
        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}
        >
          Logout
        </button>
           
        </>

        );
    };
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                    </ul>
            </div>
        </nav>
    )

}

export default Navbar;
