import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { LandingPage } from '../LandingPage'; 
import { ProductsPage } from '../ProductsPage';
import { ProductPage } from '../ProductPage';
import { userActions } from '../_actions';
import { CartPage } from '../CartPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
        
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                               
            <Router history={history}>            
            <Route  path="/" component={LandingPage} />
            </Router>
                
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-3">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        
                        <Router history={history}>
                            <div>
                                <PrivateRoute path="/Profile" component={HomePage} />
                                {
                                    !userActions.isLoggedIn() &&
                                <div>
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                </div>
                                }
                                <Route path="/products" component={ProductsPage} />
                                <Route path="/product/:label" component={ProductPage} />
                                <Route path="/cart" component={CartPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 