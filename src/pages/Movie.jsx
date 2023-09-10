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
        return value.toLocaleString("pt-Br", {
            style: "currency",
            currency: "USD",
        })
   
    }



    return(
        <div className="movie-info">
            {movie && (
                <>
                    <div className="movie-info__card">
                        <MovieCard movie={movie} showlink={false} />
                    </div>
                    <div className="movie-info__infos">
                        <h2 className="movie-info__title">{movie.title}</h2>{movie.release_date}
                        <p className="movie-info__tagline">{movie.tagline}</p>
                        <div className="info">
                            <h3 className="info__titulo">
                                <BsWallet2/> Orçamento
                            </h3>    
                            <p>{formatCurrancy(movie.budget)}</p>
                        </div>
                        <div className="info">
                            <h3 className="info__titulo">
                                <BsGraphUp/> Faturamento
                            </h3>    
                            <p className="info__descricao">{formatCurrancy(movie.revenue)}</p>
                        </div>
                        <div className="info">
                            <h3 className="info__titulo">
                                <BsHourglassSplit/> Duração
                            </h3>    
                            <p className="info__descricao" >{movie.runtime} minutos</p>
                        </div>
                        <div className="info">
                            <h3 className="info__titulo">
                                <BsFillFileEarmarkTextFill/> Descrição
                            </h3>    
                            <p className="info__descricao">{movie.overview}</p>
                        </div>
                        
                    </div>
                    
                </>
             )}
        </div>
    )
}


export default Movie