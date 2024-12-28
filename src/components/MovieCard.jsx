import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
        <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={movie.posterURL}
            alt={movie.title}
        />
        <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-800">{movie.title}</h2>
            <p className="text-gray-600">{movie.description}</p>
            <p className="mt-2 text-yellow-500 font-bold">Rating: {movie.rating}</p>
        </div>
        </div>
    );
};

export default MovieCard;
