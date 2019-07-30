import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { login } from '../actions';


import { PageContainer, 
        LoginContainer, 
        LoginHeader, 
        FormContainer, 
        InputContainer} from '../styled-components';



const Login = props => {

    const LogInStuff = () => {
        props.login()
    }
    
    return(
        <PageContainer>
            <LoginContainer>
                <LoginHeader>
                    <h1> Log In</h1>
                </LoginHeader>
                <FormContainer>
                    <form>
                        <InputContainer>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="username"
                                required="fill this out!"
                                name="username"
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                required="fill this out!"
                                name="password"
                            />
                        </InputContainer>
                    </form>
                    <button className="Login-button">Log In</button>
                </FormContainer>
            </LoginContainer>
        </PageContainer>
    );
};

const mapStateToProps = state => {
    return{
        user: state.user,
        loggedIn: state.loggedIn,
        error: state.error,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    {} 
)(Login);