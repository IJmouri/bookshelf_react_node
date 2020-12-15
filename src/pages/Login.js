import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../store/actions/authAction'
import {connect} from 'react-redux'

class Login extends React.Component{
    state = {
        email: '',
        password: '',
        error: {}
    }
    static getDrivedStateFromProps(nextProps, prevState){
        if(JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)){
            return {
                error : nextProps.auth.error
            }

        }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.login({
            email: this.state.email,
            password: this.state.password
        }, this.props.history)
    }

    render() {
        let {email,password,error} = this.state
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display">Login</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email: </label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder="Enter Your Email"
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                        />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password: </label>
                            <input 
                                type="password"
                                className='form-control'
                                placeholder="Enter Your Password"
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                        />
                        </div>
                        Don't Have Account? <Link to='/register'>Register Here</Link>
                        <br></br>
                        <button className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {login})(Login);