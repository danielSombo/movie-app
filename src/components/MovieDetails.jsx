import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
const { title } = useParams();
const movie = movies.find(m => m.title === title);

    if (!movie) {
        return <div className="text-center mt-8">Movie not found!</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-4">{movie.description}</p>
            <iframe
                style={{ width: "100%", height: "calc(100vw * 9 / 24)" }}
                src={movie.trailerURL}
                title={`${movie.title} trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="mt-4">
                <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
            </div>
        </div>
    );
};

export default MovieDetails;
