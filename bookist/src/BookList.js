import React from 'react'

const BookList= (props) => {
  
  
  const mappedBooks = props.books.map((book, i) => 
  (<div>
    <img src={book.img} onClick={()=> props.titles()}/>
    {book.title} by {book.author}</div>)
  )
   
  
  
  
  
  return(
    <div className="list">
    
    
      
      <div className= "bookgrid">
        {mappedBooks}
        </div>
      
      

    
    </div>
  )
}

export default BookList