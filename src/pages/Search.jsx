import { useEffect, useState } from "react"
import MovieCard from "../componentes/MovieCard"
import { useSearchParams } from "react-router-dom";

import './MovieGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;


const Search = () =>{
    const [SearchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = SearchParams.get("q")
    console.log(query)

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
        <h2 className='container__titulo'>Resultados para: <span className="query-text">{query}</span></h2>
        <div className='container__movies'>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie) => <MovieCard  movie={movie} key={movie.id} />)}
            {console.log(movies.title)}
        </div>
    </div>
    )
}

export default Search