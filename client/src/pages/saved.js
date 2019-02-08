import React, { Component } from 'react';
import { List, ListItem, DeleteBtn } from "../components/List";
import API from "../utilities/API"

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        API.getSaved()
            .then(res => {
                this.setState({ books: res.data });
            }
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.loadBooks();

    }

    render() {
        return (
            <div className="row">
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map((book) => {
                            return (
                                <ListItem key={book._id}>
                                    <div className="card" >
                                        <div className="card-body">
                                            <img src={book.image} alt="The book's cover" className="float-left img-fluid m-3" />
                                            <div className="card-title"><strong>{book.title}</strong> by {book.authors[0]}</div>
                                            <div className="card-text">{book.summary}</div>
                                            <a className="btn btn-primary float-right" href={book.link} rel="noopener noreferrer" target="_blank">Google Books</a>
                                            <DeleteBtn onClick={() => this.deleteBook(book._id)}>✗</DeleteBtn>
                                        </div>
                                    </div>
                                </ListItem>
                            )
                        })}
                    </List>
                ) : (
                        <h4 className="mx-auto"> No results found </h4>
                    )}
            </div>
        )
    }
}

export default Saved