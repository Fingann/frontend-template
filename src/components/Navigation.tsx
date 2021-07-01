import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/logo.png';

type NavigationItemProps = {
    path: string;
    title: string;
};
const NavigationItem = ({path, title}: NavigationItemProps) => {
    return (
        <li className="nav-item">
            <NavLink
                className="nav-link navigationLink"
                activeClassName="active"
                exact={true}
                to={path}>
                {title}
            </NavLink>
        </li>
    );
};

const Navigation = ({children}) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary flex-md-row bd-navbar">
            <a className="navbar-brandnavbar-brand mr-0 mr-md-2" href="#">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top navigationLogo"
                    alt="Empire logo"
                />
            </a>
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav mr-autonavbar-nav bd-navbar-nav flex-row">
                    {children}
                    <NavigationItem path="home" title="Home"></NavigationItem>
                    <NavigationItem path="test" title="Test"></NavigationItem>
                    <NavigationItem path="about" title="About"></NavigationItem>
                </ul>
            </div>
        </nav>
    );
};
export default Navigation;
