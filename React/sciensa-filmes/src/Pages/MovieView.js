import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieDetail from '../Components/MovieDetail'
import { movies } from '../mock'

const MovieView = ({ match }) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const filtered = movies.filter((movie) => movie.id === parseInt(match.params.id))[0]
        setMovie(filtered)
    }, [match.params.id]);

    return (
        <div>
            <Header />
            <Hero />
            <MovieDetail movie={movie}/>
        </div>
    )
}

export default MovieView