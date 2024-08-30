import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>{

    return(
        <nav className="navbar" id='navbar'>
            <h2 className='navbar__titulo'>
                <Link to="/" className='navbar__titulo__link'>
                    <img src="/IMG/LogoMoviesLib.svg"/>
                </Link>
            </h2>

            <p className='myinfo'>Study Project - <a href="https://github.com/LeoBat00" className="navbar__paragrafo-destaque">LeoBat00</a></p>

        
      </nav>
    )
}

export default Navbar