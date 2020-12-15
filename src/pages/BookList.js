import React from 'react';
import {connect} from 'react-redux';
import  {bookList} from '../store/actions/bookActions';

class BookList extends React.Component {

    componentDidMount(){
        this.props.bookList()
    }
    render() {
        let {books} = this.props
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Welcome To Bookshelf</h1>
                   
                    <h2>Book List</h2>
                    {

                        !books.message ?
                    
                    <table className="table table-bordered">
                        <thead  className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                    
                    <tbody>
                        
                        {
                            books.map(book => (
                                <tr key={book._id}>
                                    <td>{book.name}</td>
                                    <button>Details</button>
                                   
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
    books: state.books
})

export default connect(mapStateToProps, {bookList})(BookList);