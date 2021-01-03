import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE={
    isSignedIn: null,
    userId: null
};

const AuthReducer = (auth = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case SIGN_IN:
            return {...auth, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...auth, isSignedIn: false, userId: null};
        default:
            return auth;
    }
};

export default AuthReducer;