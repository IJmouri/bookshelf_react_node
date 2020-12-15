import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {updateBook} from '../../store/actions/bookActions';

const customStyles = {
    content: {
        width: '500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50% , -50%)'
    }
};

class UpdateBook extends React.Component{

    state = {
        name: '',
        author: '',
        category: ''
    }

    componentDidMount(){
        this.setState({
            name: this.props.book.name,
            author:this.props.book.author,
            category:this.props.book.category
        })
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.updateBook(this.props.book._id, this.state)
        this.props.close()
    }

    render () {
        
        let {name,author,category} = this.state
        return (
            <Modal
                style={customStyles}
                onRequestClose={this.props.close}
                isOpen={this.props.isOpen}
            >
            <h2>Update A Book</h2>
                <form onSubmit={this.submitHandler} className="form-group">
                    <div className='form-group'>
                        <label htmlFor='name'>Name: </label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder="Enter Book Name"
                                name='name'
                                id='name'
                                value={name}
                                onChange={this.changeHandler}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='author'>Author: </label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder="Enter Author Name"
                                name='author'
                                id='author'
                                value={author}
                                onChange={this.changeHandler}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='category'>Category: </label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder="Enter Book Category"
                                name='category'
                                id='category'
                                value={category}
                                onChange={this.changeHandler}
                        />
                    </div>
                    <br></br>
                    <button className="btn btn-primary">Update</button>
                </form>
            </Modal>
        )

    }
}

export default connect(null, {updateBook})(UpdateBook)

