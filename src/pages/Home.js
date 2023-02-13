import React, { useState } from 'react'
import BookForm from '../components/BookForm'
import BookList from '../components/BookList'

export default function Home() {
    const [books,setBooks]=useState([
        {title:"kitap 1", id: 1},
        {title:"kitap 2", id: 2},
        {title:"kitap 3", id: 3},
        {title:"kitap 4", id: 4},
    ])
  return (
    <div className='App'>
        {books && <BookList books={books}/>}
        <BookForm/>
    </div>
  )
}
