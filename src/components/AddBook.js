import React, {Component} from 'react';

class AddBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: props.books,
      book: {
        title: props.book.title,
        author: props.book.author
      }
    }
    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleAddBook = (e) => {
    e.preventDefault();
    this.setState(state => {
      const books = state.props.books.concat(state.book)
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return(
      <form onSubmit={this.handleAddBook}>
        <input
          name="title"
          placeholder="add your book title"
          onChange={this.handleChange}>
        </input>
        <br />
        <input
          name="author"
          placeholder='add the author'
          onChange={this.handleChange}
          >
        </input>
        <br />
        <button>Add Book to your Library</button>
      </form>
    )
  }
}

export default AddBook
