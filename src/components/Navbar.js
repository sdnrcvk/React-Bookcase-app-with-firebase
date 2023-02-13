import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
  return (
    <nav>
        <h1>SCapp Kitaplık</h1>
        <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/login">Giriş</Link></li>
            <li><Link to="/signup">Üye Ol</Link></li>
            <li>Çıkış</li>
        </ul>
    </nav>
  )
}
