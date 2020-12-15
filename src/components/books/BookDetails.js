import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {bookDetails} from '../../store/actions/bookActions';

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

class BookDetails extends React.Component{
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
    render () {
        
        let {name,author,category} = this.state
        return (
            <Modal
                style={customStyles}
                onRequestClose={this.props.close}
                isOpen={this.props.isOpen}
            >
            <h1>Book Details</h1>
            <div className="container">
                <h4>Book Name: {name}</h4>
                <h4>Author: {author}</h4>
                <h4>Category: {category}</h4>
            </div>
            </Modal>
        )

    }
}

export default connect(null, {bookDetails})(BookDetails)

