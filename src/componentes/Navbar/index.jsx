import { Link, useNavigate } from 'react-router-dom'
import { BiSolidCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () =>{

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (evento) =>{
        evento.preventDefault();
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch('')
    }
    return(
        <nav className="navbar" id='navbar'>
            <h2 className='navbar__titulo'>
                <Link to="/" className='navbar__titulo__link'>
                    <BiSolidCameraMovie />MoviesLib
                </Link>
            </h2>
            <form onSubmit={handleSubmit} className='navbar__form'>
                <input className='navbar__form__search' type="search" placeholder="Busque um filme" 
                    onChange={(evento) =>
                    setSearch(evento.target.value)}
                    value={search} />
                <button className='navbar__form__search-button' type="submit"><BiSearchAlt2 /></button>
            </form>
      </nav>
    )
}

export default Navbar