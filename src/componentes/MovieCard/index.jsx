import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import './MovieCard.css'
const imageUrl = import.meta.env.VITE_IMG;

console.log(imageUrl)
const MovieCard = ({ movie, showlink=true }) => {
    
    let movieVoteFixed = movie.vote_average.toFixed(1)

    return (
        <div className="movie-card">

           
            {showlink && (
                 <Link to={`/movie/${movie.id}`}>
                 <img className='movie-card__imagem'src={imageUrl + movie.poster_path} alt={movie.title}/>
                 <div className="movie-card__avarage">
                    <p>
                        {movieVoteFixed}
                    </p>  
                 </div>
                 
             </Link>
            )}

            {!showlink && (
                <>
                    <img className='movie-card__imagem'src={imageUrl + movie.poster_path} alt={movie.title}/>
                    <p className=".movie-card__avarage">
                        <FaStar className=".movie-card__star" /> {movieVoteFixed}
                    </p>  
                </>
            )}
 
        </div>
    )


}

export default MovieCard