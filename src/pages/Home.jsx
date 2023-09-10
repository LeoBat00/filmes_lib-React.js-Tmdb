import {useState, useEffect} from 'react'
import MovieCard from '../componentes/MovieCard';
import './MovieGrid.css'
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () =>{
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
            <h2 className='container__titulo'>Melhores Filmes</h2>
            <div className='container__movies'>
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard  movie={movie} key={movie.id} />)}
                {console.log(topMovies.title)}
            </div>
        </div>
    )
}

export default Home