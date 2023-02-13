import React,{useState} from 'react'

export default function BookForm() {

  const [newBook,setNewBook]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault(); 
    console.log(newBook);

    setNewBook("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Yeni Kitap Ekle</span>
            <input required type="text" value={newBook} onChange={(e)=>setNewBook(e.target.value)}/>
        </label>
        <button>EKLE</button>
    </form>
  )
}
