import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #602350;
    position: fixed;
    z-index: 10000;
`

const NavigationBar = styled.div`
    width: 70vw;
    height: 75px;
    line-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    z-index: 1000;
`

const NavLogo = styled.div`
    font-weight: bold;
    font-size: 2.7rem;
    color: #EDEDED;
    cursor: default;
`

const Links = styled.div`
    .active{
        font-weight: bold;
        text-decoration: underline;
        color: #f9bbb1;
    }

    a{
        color: #ededed;
        margin: 0px 20px;
        font-size: 1.4rem;
        text-decoration: none;
        &:hover{
            color: #F9BBB1
            transition-duration: 0.2s;
        }
    }
`

const NavBar = () => {

    const logOut = () => {
        return localStorage.clear();
      };
    
    return(
        <NavContainer>
            <NavigationBar>
                <NavLogo>Empathy Builder</NavLogo>
                <Links>
                    {localStorage.getItem('jwt') ? (
                        <div>
                            <NavLink to='/login' onClick={logOut}>Log Out</NavLink>
                            <NavLink to="/calculator">Calculator</NavLink>
                        </div>
                        
                    ) : (
                        <div>
                            <NavLink to="/calculator">Calculator</NavLink>
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink to='/sign-up'>Sign Up</NavLink>
                        </div>
                    )}
                </Links>
            </NavigationBar>
        </NavContainer>
    );
};

export default NavBar;