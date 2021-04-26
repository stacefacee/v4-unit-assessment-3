import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import BookList from './BookList.js'
import Shelf from './Shelf.js'
import books from './data.js'


class App extends Component{
  constructor(props){
    super();
   
    this.state = { 
      books: books,
      shelf: []
  }
  this.addToShelf = this.addToShelf.bind(this)
  
}
addToShelf =(title) => {
  this.setState({shelf: this.state.shelf.push(title)})
}
 

render(){
  return (
    <div className="App">
      <Header />
      <BookList books={this.state.books} titles={this.addToShelf} />
      <Shelf array={this.shelf} />
    
    </div>
  );
}
}

export default App;
