import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import './MovieCard.css'
const imageUrl = import.meta.env.VITE_IMG;

console.log(imageUrl)
const MovieCard = ({ movie, showlink=true }) => {
    
    return (
        <div className="movie-card">
            <img className='movie-card__imagem'src={imageUrl + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p className=".movie-card__avarage">
                <FaStar className=".movie-card__star" /> {movie.vote_average}
            </p>  

            {showlink && (
                <Link className="movie-card__botao" to={`/movie/${movie.id}`}>Ver detalhes</Link>
            )}
        </div>
    )


}

export default MovieCard