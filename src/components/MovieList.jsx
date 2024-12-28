import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {movies.map(movie => (
            <MovieCard key={movie.title} movie={movie} />
        ))}
        </div>
    );
};

export default MovieList;
