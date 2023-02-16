import React,{useState} from 'react'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import {useAuthContext} from '../hooks/useAuthContext'

export default function BookForm() {

  const [newBook,setNewBook]=useState("");
  const {user}=useAuthContext();

  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    //console.log(newBook);

    const ref=collection(db,"books");
    await addDoc(ref,{
        title:newBook,
        uid:user.uid
    })

    setNewBook("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Yeni Kitap Ekle: &nbsp;
          <input required type="text" value={newBook} onChange={(e)=>setNewBook(e.target.value)}/>
          <button style={{marginLeft:"10px"}}>EKLE</button>
        </label>
    </form>
  )
}
