import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getProducts,
    getProfile,
    isLoggedIn,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    

                    dispatch(success(user));
                    history.push('/Profile');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}


function getProducts(){
    
    return dispatch => {
       
        userService.getProducts()
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error))
            );
    };
    

    function success(products) { return { type: userConstants.GET_PRODUCTS, products } }
    function failure(error) { return { type: userConstants.GET_PRODUCTS_FAILURE, error } }
    
}

function getProfile(){


    const token = localStorage.getItem('user');
                    let payload;
                    if (token) {
                      payload = token.split('.')[1];
                      payload = window.atob(payload);   
                    }

    return payload?JSON.parse(payload):'';

    // return dispatch => {
    //     profile => dispatch(success(JSON.parse(payload)))
    // }

    

    // function success(profile) { console.log(profile); return { type: userConstants.GET_PROFILE, profile } }
    
}

function isLoggedIn(){
    const user = getProfile();

    if(user){
        return user.exp > Date.now() / 1000;
    }
    else{
        return false;
    }
}