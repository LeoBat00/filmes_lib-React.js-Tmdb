import {useState, useEffect} from 'react'
import MovieCard from '../componentes/MovieCard';
import './MovieGrid.css'
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
import { Link, useNavigate } from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'
const Home = () =>{

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (evento) =>{
        evento.preventDefault();
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch('')
    }


    const [topMovies, setTopmovies] = useState([])

    const getTopRatedMovies = async (url) =>{
    
        const resposta = await fetch(url)
        const dados = await resposta.json()

        setTopmovies(dados.results)
    }

    useEffect(() =>{

        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl);

    }, [])
    return(
        <div className='container'>
            <section className='pesquisa'>
                <h2 className='pesquisa__titulo'>Tem um filme em mente?</h2>
                <form onSubmit={handleSubmit} className='pesquisa__form'>
                    <input className='pesquisa__search' type="search" placeholder="Busque um filme" 
                        onChange={(evento) =>
                        setSearch(evento.target.value)}
                        value={search} />
                    <button className='pesquisa__search-button' type="submit"></button>
                </form>           
             </section>

            <section className='movies'>
                <h2 className='container__titulo'>Melhores Filmes</h2>
                <div className='container__movies'>
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies.length > 0 && topMovies.map((movie) => <MovieCard  movie={movie} key={movie.id} />)}
                    {console.log(topMovies.title)}
                </div>
            </section>
           
        </div>
    )
}

export default Home