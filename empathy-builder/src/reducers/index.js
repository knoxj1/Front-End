import {
    LOGIN_START,
    LOGIN_SUCCESS,
} from '../actions';

//DUMMY DATA used to explain Store and action stuff to teammates

const initialState = {
    user: '',
    loggedIn: false,
    isLoading: false,
    error: '',
    favoriteColor: '',
    weather: '',
    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                isLoading: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                isLoading: false,
                error: action.payload.error
            }
        
        default:
        return state;
    }
};

export default reducer;