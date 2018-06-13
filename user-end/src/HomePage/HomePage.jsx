import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

 export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.dispatch(userActions.getProfile());
    
        
    // }

    handleSubmit(e){
        e.preventDefault();
        userActions.logout();
        this.props.history.push('/login');
        
    }
    // handleDeleteUser(id) {
    //     return (e) => this.props.dispatch(userActions.delete(id));
    // }

    render() {
        const user = userActions.getProfile();
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstname}!</h1>
                <p>You're logged in with React!!</p>
                
                            <li key={user.id}>
                                {user.firstname + ' ' + user.lastname}
                                {/* {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                } */}
                            </li>
                <p>
                    <Link to="/login" onClick={this.handleSubmit.bind(this)}>Logout</Link>

                </p>
            </div>
            
        );
    }
}

// function mapStateToProps(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;

//     console.log(state);
//     return {
//         user,
//         users
//     };
// }

// const connectedHomePage = connect(mapStateToProps)(HomePage);
// export { connectedHomePage as HomePage };