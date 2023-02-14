import React, { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import BookList from '../components/BookList'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export default function Home() {
    const [books,setBooks]=useState(null)

    useEffect(()=>{
        const ref=collection(db,"books");

        getDocs(ref).then((snap)=>{
            //console.log(snap);
            let result=[];
            snap.forEach(doc=>{
                //console.log(doc.data());
                result.push({id:doc.id,...doc.data()})
            })

            setBooks(result);
        })

    },[])

  return (
    <div className='App'>
        {books && <BookList books={books}/>}
        <BookForm/>
    </div>
  )
}
