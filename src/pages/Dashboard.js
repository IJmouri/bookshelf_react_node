import React from 'react';
import {connect} from 'react-redux';
import {loadBooks , removeBook} from '../store/actions/bookActions';
import CreateBook from '../components/books/CreateBook'
import UpdateBook from '../components/books/UpdateBook'

class Dashboard extends React.Component {

    state = {
        createModalOpen: false,
        updateModalOpen: false,
        id: ''
    }

    openCreateModal = () => {
        this.setState({
            createModalOpen: true
        })
    }
    closeCreateModal= () => {
        this.setState({
            createModalOpen: false
        })
    }
    openUpdateModal = (id) => {
        this.setState({
            updateModalOpen: true,
            id
        })
    }
    closeUpdateModal = () => {
        this.setState({
            updateModalClose: false,
            id:''
        })
    }
    componentDidMount(){
        this.props.loadBooks()
    }

    render() {
        let {auth,books} = this.props
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Welcome To Bookshelf</h1>
                    <button onClick={this.openCreateModal} className="btn btn-primary">Create New Book</button>
                    <CreateBook 
                        isOpen={this.state.createModalOpen}
                        close={this.closeCreateModal}    
                    />
                    <h2>Book List</h2>
                    {

                        !books.message ?
                    
                    <table className="table table-bordered">
                        <thead  className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Category</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                    
                    <tbody>
                        
                        {
                            books.map(book => (
                                <tr key={book._id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.category}</td>
                                    {
                                        this.state.id === book._id ?
                                        <UpdateBook 
                                        isOpen={this.state.updateModalOpen}
                                        close={this.closeUpdateModal} 
                                        book={book}
                                    /> : null

                                    }
                                    <button 
                                        onClick={()=>this.props.removeBook(book._id)}
                                        className="btn"
                                    >Remove</button>
                                    <button 
                                        onClick={()=>this.openUpdateModal(book._id)}
                                        className="btn"
                                    >Update</button>
                                </tr>
                            ))

                        }
                    </tbody>   
                </table> 
                : <h2>No Books Found</h2>
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    books: state.books
})

export default connect(mapStateToProps, {loadBooks, removeBook})(Dashboard)