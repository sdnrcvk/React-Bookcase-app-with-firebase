import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {

  const {logout}=useLogout();

  return (
    <nav>
        <h1>SCapp Kitaplık</h1>
        <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/login">Giriş</Link></li>
            <li><Link to="/signup">Üye Ol</Link></li>
            <li><Link to="#" onClick={logout}>Çıkış</Link></li>
        </ul>
    </nav>
  )
}
