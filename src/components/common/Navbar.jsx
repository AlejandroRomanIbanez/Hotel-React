import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

function Navbar(){
    const isAuthenticaded = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm("Are you sure you want to logout?");
        if (isLogout) {
            ApiService.logout();
            navigate("/home");
        }
    }

    return (
        <nav className="navbar">
                <div className="navbar-brand">
                    <NavLink to={"/home"}>Rest Hotel</NavLink>
                </div>
                <ul className="navbar-ul">
                    <li><NavLink to={"/home"} activeClass="active">Home</NavLink></li>
                    <li><NavLink to={"/rooms"} activeClass="active">Rooms</NavLink></li>
                    <li><NavLink to={"/find-booking"} activeClass="active">Find My Bookings</NavLink></li>

                    {isUser && <li><NavLink to={"/profile"} activeClass="active">profile</NavLink></li>}
                    {isAdmin && <li><NavLink to={"/admin"} activeClass="active">Admin</NavLink></li>}

                    {!isAuthenticaded && <li><NavLink to={"/login"} activeClass="active">Login</NavLink></li>}
                    {!isAuthenticaded && <li><NavLink to={"/register"} activeClass="active">Register</NavLink></li>}

                    {isAuthenticaded && <li onClick={handleLogout}></li>}
                </ul>
        </nav>
    )
}

export default Navbar;