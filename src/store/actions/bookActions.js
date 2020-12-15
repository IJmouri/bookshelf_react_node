import Axios from 'axios';
import * as Types from './types';

export const bookList = () => dispatch => {
    Axios.get('http://localhost:3000/bookList/')
    .then(response => {
        dispatch({
            type: Types.BOOK_LIST,
            payload: {
                books: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const bookDetails = (id, book) => dispatch => {
    Axios.get(`http://localhost:3000/bookDetails/${id}`)
    .then(response => {
        dispatch({
            type: Types.BOOK_DETAILS,
            payload: {
                book: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const loadBooks = () => dispatch => {
    Axios.get('http://localhost:3000/user/bookList/')
    .then(response => {
        dispatch({
            type: Types.LOAD_BOOkS,
            payload: {
                books: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const addNewBook = book => dispatch => {
    Axios.post('http://localhost:3000/book', book)
    .then(response => {
        // console.log(response);
        dispatch({
            type: Types.CREATE_BOOk,
            payload: {
                book: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const removeBook = id => dispatch =>  {
    Axios.delete(`http://localhost:3000/book/${id}`)
    .then(response => {
        console.log(response);
        dispatch({
            type: Types.REMOVE_BOOk,
            payload: {
                id: response.data._id
            }
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const updateBook = (id, book) => dispatch => {
    Axios.patch(`http://localhost:3000/book/${id}`, book)
    .then(response => {
        console.log(response);
        dispatch({
            type: Types.UPDATE_BOOk,
            payload: {
                book: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })

}