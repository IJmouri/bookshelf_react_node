import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../store/actions/authAction'

class Register extends React.Component{
    state = {
        name: '',
        email: '',
        password: '',
        error: {}
    }
    static getDrivedStateFromProps(nextProps, prevState){
        if(JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)){
            return {
                error : nextProps.auth.error.errors
            }

        }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        let {name,email,password} = this.state
        this.props.register({
            name,email,password   
        }, this.props.history)
    }

    render() {
        let {name, email,password,error} = this.state
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display">Register</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name: </label>
                            <input 
                                type="text"
                                className={error.name ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Enter Your Name"
                                name='name'
                                id='name'
                                value={name}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">
                            {error.name}
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email: </label>
                            <input 
                                type="text"
                                className={error.email ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Enter Your Email"
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                            />
                            
                            <div className="invalid-feedback">
                             {error.email}

                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password: </label>
                            <input 
                                type="password"
                                className={error.password ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Enter Your Password"
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                            />
                            
                            <div className="invalid-feedback">
                                {error.password}
                            </div>
                        </div>
                        Already Have Account? <Link to='/login'>Login Here</Link>
                        <br></br>
                        <button className='btn btn-primary'>Register</button>
                    </form>
                </div>
            
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {register})(Register);