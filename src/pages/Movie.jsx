import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, Bs3Circle, BsWallet} from 'react-icons/bs'

import './Movie.css'

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import MovieCard from "../componentes/MovieCard";
const Movie = () =>{

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) =>{
        const resposta = await fetch(url)
        const dados = await resposta.json()

        setMovie(dados)
    }

    useEffect(() =>{
        const movieUrl = `${moviesUrl}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    const formatCurrancy = (value) =>{
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
   
    }



    return(
        <div className="movie-info">
            {movie && (
                <>
                    <MovieCard movie={movie} showlink={false} />
                    <p className="movie-info__tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2/> Orçamento
                        </h3>    
                        <p>{formatCurrancy(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp/> Faturamento
                        </h3>    
                        <p>{formatCurrancy(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit/> Duração
                        </h3>    
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsFillFileEarmarkTextFill/> Descrição
                        </h3>    
                        <p>{movie.overview}</p>
                    </div>
                    
                </>
             )}
        </div>
    )
}


export default Movie