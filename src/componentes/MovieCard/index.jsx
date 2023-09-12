import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import './MovieCard.css'
const imageUrl = import.meta.env.VITE_IMG;

console.log(imageUrl)
const MovieCard = ({ movie, showlink=true }) => {
    
    return (
        <div className="movie-card">

           
            {showlink && (
                 <Link to={`/movie/${movie.id}`}>
                 <img className='movie-card__imagem'src={imageUrl + movie.poster_path} alt={movie.title}/>
                 <div className="movie-card__avarage">
                    <p>
                        {movie.vote_average}
                    </p>  
                 </div>
                 
             </Link>
            )}

            {!showlink && (
                <>
                    <img className='movie-card__imagem'src={imageUrl + movie.poster_path} alt={movie.title}/>
                    <p className=".movie-card__avarage">
                        <FaStar className=".movie-card__star" /> {movie.vote_average}
                    </p>  
                </>
            )}
 
        </div>
    )


}

export default MovieCard