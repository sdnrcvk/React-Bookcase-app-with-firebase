import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const {error,login}=useLogin();

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(email,password);

        login(email,password);
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Giriş Yap</h2>
            <label>
                <span>Email Adresiniz :</span>
                <input required type="email" onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Parola :</span>
                <input required type="password" onChange={(e)=>setPassword(e.target.value)}
                value={password}/>
            </label>
            <button>Giriş Yap</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}
