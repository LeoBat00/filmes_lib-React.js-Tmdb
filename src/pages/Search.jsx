import { useEffect, useState } from "react"
import MovieCard from "../componentes/MovieCard"
import { useSearchParams } from "react-router-dom";
import './MovieGrid.css'
import { useNavigate } from 'react-router-dom'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;


const Search = () =>{
    const [SearchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = SearchParams.get("q")
    console.log(query)

    
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (evento) =>{
        evento.preventDefault();
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch('')
    }

    const getSearchedMovies = async (url) =>{
    
        const resposta = await fetch(url)
        const dados = await resposta.json()

        setMovies(dados.results)
    }

    useEffect(() =>{

        const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`
        getSearchedMovies(searchWithQueryUrl);

    }, [query])

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
             <section className="movies">
                <h2 className='container__titulo'>Resultados para: <span className="query-text">{query}</span></h2>
                <div className='container__movies'>
                    {movies.length === 0 && <p>Carregando...</p>}
                    {movies.length > 0 && movies.map((movie) => <MovieCard  movie={movie} key={movie.id} />)}
                    {console.log(movies.title)}
                </div>
            </section>

    </div>
    )
}

export default Search