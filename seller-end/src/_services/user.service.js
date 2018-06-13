import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    getProducts,
    upload,
    delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: 
        // authHeader(),
        { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    // /users/authenticate
    return fetch('http://localhost:3030/api/login', requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes  
               localStorage.setItem('user', JSON.stringify(user.token));         
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out

    
    localStorage.removeItem('user');

   
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3030/api/profile', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3030/api/users/' + _id, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    console.log(requestOptions.body);

    return fetch('http://localhost:3030/api/register', requestOptions).then(handleResponse);
    // /users/register
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:3030/api/users/' + user.id, requestOptions).then(handleResponse);;
    // /users/
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('http://localhost:3030/api/users/' + id, requestOptions).then(handleResponse);;
    // /users/
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
   
    return response.json();
}

function getProducts(response){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

   return fetch('http://localhost:3030/api/product',requestOptions).then(handleResponse);
}

function upload(product){

    console.log(product);
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    };

    return fetch('http://localhost:3000/api/upload',requestOptions).then(handleResponse);
}