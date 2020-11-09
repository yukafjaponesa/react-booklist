import React, {useContext, useState} from "react";
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', book: {
      title, author
    }});
    setTitle('');
    setAuthor('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter todo" value={title}
        onChange={(e) => setTitle(e.target.value)} required
      />
      <input type="date" placeholder="author" value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="add todo" />
    </form>
  )
}

export default NewBookForm
