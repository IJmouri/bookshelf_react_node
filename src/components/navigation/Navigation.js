import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authAction';

class Navigation extends React.Component {
    render(){
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/'>
                    <span className='navbar-brand'>BookShelf</span>
                </Link>            
                <button 
                    className='navbar-toggler'
                    type='button'
                    datatoggle='collapse'
                    datatarget='#nav'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' activeClassName='active' exact>
                                <span className='nav-link'>Book List</span>
                            </NavLink>
                        </li>
                        {
                            this.props.auth.isAuthenticated ? 
                                <React.Fragment>
                                    <li>
                                        <NavLink to='/dashboard' activeClassName='active'>
                                            <span className='nav-link'>Dashboard</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => this.props.logout
                                            (this.props.history)}
                                            className='btn btn-danger'
                                        >
                                        Logout
                                        </button>
                                    </li>
                                </React.Fragment>
                                :
                                <React.Fragment>
                        
                                <li>
                                    <NavLink to='/login' activeClassName='active'>
                                        <span className='nav-link'>Login</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/register' activeClassName='active'>
                                        <span className='nav-link'>Register</span>
                                    </NavLink>
                                </li>
                                    
                                </React.Fragment>
                        }
                        
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(withRouter(Navigation))