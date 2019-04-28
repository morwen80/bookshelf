import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import AddBook from './components/AddBook'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      book:
        {
          title: '',
          author: ''
        }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <BookList books={this.state.books} title={this.state.title} author={this.state.author}/>
        <AddBook books={this.state.books} book={this.state.book}/>
      </div>
    )
  }
}

export default App;
