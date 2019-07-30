import { axiosWithAuth } from '../utilities/axiosWithAuth';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


//Used an old format to explain redux thunk to newer cohorts in my BUILD WEEK TEAM. THIS CODE IS FROM A PREVIOUS PROJECT.
//BUT WAS USED PURELY FOR EDUCATIONAL PURPOSES TO EXPLAIN MIDDLEWARE


export const login = (creds) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post(`auth/login`, creds)
        .then(res => {
            console.log(res.data);
            // localStorage.setItem('jwt', res.data.token);
            // dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            // return true;
        })
        .catch(err => console.log(`I can't let you do that, StarFox.`, err));
};

export const SIGNUP = 'SIGNUP';

export const signup = (newBusiness, userType) => dispatch => {
    dispatch({ type: SIGNUP });
    console.log('Signing Up', newBusiness)
    return axiosWithAuth()
        .post(`/auth/${userType}/register`, newBusiness)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user})
            return true;
        })
        .catch(err => {
            console.log('New Business ERR: ', err)
        });
};