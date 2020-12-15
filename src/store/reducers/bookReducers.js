import * as Types from '../actions/types'

const bookReducer = (state= [], action) => {
    switch(action.type) {
        case Types.BOOK_LIST: {
            return action.payload.books
        }
        case Types.LOAD_BOOkS: {
            return action.payload.books
        }
        case Types.CREATE_BOOk: {
            let books = [...state]
            books.unshift(action.payload.book)
            return books
        }
        case Types.REMOVE_BOOk: {
            let books = [...state]
            return books.filter(book => {
                return book._id !== action.payload.id
            })
        }
        case Types.UPDATE_BOOk: {
            let books = [...state]
            return books.map(book => {
                if (book._id === action.payload.book._id){
                    return action.payload.book
                }
                return book
            })
        }
        default: return state
    }
}

export default bookReducer;