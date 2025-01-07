import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieModal from './components/AddMovieModal';
import MovieDetails from './components/MovieDetails';
import './index.css';

const App = () => {
  const [movies, setMovies] = useState([
    { 
      title: 'Inception', 
      description: 'A mind-bending thriller', 
      posterURL: 'https://i.pinimg.com/236x/c3/98/29/c39829b4176947dc7e903c696f2ca990.jpg', 
      rating: 8.8, 
      trailerURL: 'https://www.youtube.com/embed/8hP9D6kZseM' 
    },
    { 
      title: 'Interstellar', 
      description: 'A journey through space', 
      posterURL: 'https://i.pinimg.com/236x/46/63/95/46639573fd4b919c9b7239ac00481d8c.jpg', 
      rating: 8.6, 
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E' 
    },
    { 
      title: 'The Dark Knight', 
      description: 'A hero rises', 
      posterURL: 'https://i.pinimg.com/236x/88/9d/01/889d01e101d65bf2dd37ec04a130102c.jpg', 
      rating: 9.0, 
      trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY' 
    },
    { 
      title: 'Fight Club', 
      description: 'An underground fight club', 
      posterURL: 'https://i.pinimg.com/474x/d8/9e/b0/d89eb04d03c62acb1d463d50db4560ce.jpg', 
      rating: 8.8, 
      trailerURL: 'https://www.youtube.com/embed/qtRKdVHc-cE' 
    },
    { 
      title: 'Forrest Gump', 
      description: 'Life is like a box of chocolates', 
      posterURL: 'https://i.pinimg.com/236x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg', 
      rating: 8.8, 
      trailerURL: 'https://www.youtube.com/embed/bLvqoHBptjg' 
    },
    { 
      title: 'The Matrix', 
      description: 'A computer hacker learns about the true nature of reality', 
      posterURL: 'https://i.pinimg.com/236x/05/96/ee/0596eeb681526c79727a121891ed47b3.jpg', 
      rating: 8.7, 
      trailerURL: 'https://www.youtube.com/embed/vKQi3bBA1y8' 
    },
    { 
      title: 'The Shawshank Redemption', 
      description: 'Hope can set you free', 
      posterURL: 'https://i.pinimg.com/236x/bb/0e/f9/bb0ef99b7d71bb27e22f57d2156b7b5d.jpg', 
      rating: 9.3, 
      trailerURL: 'https://www.youtube.com/embed/6hB3S9bIaco' 
    },
    { 
      title: 'The Godfather', 
      description: 'An organized crime dynasty', 
      posterURL: 'https://i.pinimg.com/236x/85/3d/cf/853dcfdd619a4c9be32853885216a1ee.jpg', 
      rating: 9.2, 
      trailerURL: 'https://www.youtube.com/embed/sY1S34973zA' 
    },
    { 
      title: 'The Lord of the Rings: The Return of the King', 
      description: 'The final battle for Middle-earth', 
      posterURL: 'https://i.pinimg.com/236x/5f/6e/2d/5f6e2dc0d8d5d6834827ad84d6adfd61.jpg', 
      rating: 8.9, 
      trailerURL: 'https://www.youtube.com/embed/r5X-hFf6Bwo' 
    },
    { 
      title: 'Pulp Fiction', 
      description: 'Stories of crime and redemption', 
      posterURL: 'https://i.pinimg.com/236x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg', 
      rating: 8.9, 
      trailerURL: 'https://www.youtube.com/embed/s7EdQ4FqbhY' 
    },
    { 
      title: 'The Good, the Bad and the Ugly', 
      description: 'A tale of three gunmen', 
      posterURL: 'https://i.pinimg.com/474x/30/72/53/307253cec7cbf103be8f5b4370f1bdd8.jpg', 
      rating: 8.8, 
      trailerURL: 'https://www.youtube.com/embed/WCN5JJY_wiA' 
    },
    { 
      title: 'The Empire Strikes Back', 
      description: 'The rebels are pursued by the Empire', 
      posterURL: 'https://i.pinimg.com/236x/9b/db/cf/9bdbcfc753a838936d269b432bab4f11.jpg', 
      rating: 8.7, 
      trailerURL: 'https://www.youtube.com/embed/JNwNXF9Y6kY' 
    },
    { 
      title: 'Gladiator', 
      description: 'A Roman general seeks vengeance', 
      posterURL: 'https://i.pinimg.com/236x/80/ef/6b/80ef6bd60a8e75dcb3e7347ca50cfe5a.jpg', 
      rating: 8.5, 
      trailerURL: 'https://www.youtube.com/embed/owK1qxDselE' 
    },
    { 
      title: 'Saving Private Ryan', 
      description: 'A mission to save a soldier', 
      posterURL: 'https://i.pinimg.com/236x/da/8e/69/da8e69fc556cf25b45fd430826348e13.jpg', 
      rating: 8.6, 
      trailerURL: 'https://www.youtube.com/embed/RYExstiQlLc' 
    },
    { 
      title: 'Jurassic Park', 
      description: 'Dinosaurs are brought back to life', 
      posterURL: 'https://i.pinimg.com/236x/eb/71/fa/eb71fa4f5980f97ae56c705686db850e.jpg', 
      rating: 8.1, 
      trailerURL: 'https://www.youtube.com/embed/QWBKEmWWL38' 
    },
    { 
      title: 'Avatar', 
      description: 'A marine on an alien planet', 
      posterURL: 'https://i.pinimg.com/236x/67/4e/b6/674eb674005d93f4d683cee78b7751ce.jpg', 
      rating: 7.8, 
      trailerURL: 'https://www.youtube.com/embed/6ziBFh3V1aM' 
    },
    { 
      title: 'Titanic', 
      description: 'A tragic love story on the ill-fated ship', 
      posterURL: 'https://i.pinimg.com/236x/4b/b5/81/4bb581fca79f77b900c588505fa46287.jpg', 
      rating: 7.8, 
      trailerURL: 'https://www.youtube.com/embed/kVrqfYjkTdQ' 
    },
    { 
      title: 'The Lion King', 
      description: 'The journey of a young lion prince', 
      posterURL: 'https://i.pinimg.com/474x/53/b8/6a/53b86a44a5096b989c91e000814b4f6a.jpg', 
      rating: 8.5, 
      trailerURL: 'https://www.youtube.com/embed/4sj1MT05lAA' 
    },
    { 
      title: 'The Avengers', 
      description: "Earth's mightiest heroes unite", 
      posterURL: 'https://i.pinimg.com/236x/91/e8/b2/91e8b28b4cb04f5bd07d7fcd3bf08e16.jpg', 
      rating: 8.0, 
      trailerURL: 'https://www.youtube.com/embed/eOrNdBpGMv8' 
    },
    { 
      title: 'The Silence of the Lambs', 
      description: 'A young FBI agent and a brilliant psychopath', 
      posterURL: 'https://i.pinimg.com/236x/50/8e/3e/508e3ee54eea242f5c80e80837bb4c45.jpg', 
      rating: 8.6, 
      trailerURL: 'https://www.youtube.com/embed/W6Mm8Sbe__o' 
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });
  const [showModal, setShowModal] = useState(false);

  const handleFilter = (filters) => {
    let filtered = movies;

    if (filters.title) {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(filters.title.toLowerCase()));
    }

    if (filters.rating) {
      filtered = filtered.filter(movie => movie.rating >= parseFloat(filters.rating));
    }

    setFilteredMovies(filtered);
  };

  const addMovie = () => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
    setShowModal(false);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <Router>
      <div className="container mx-auto">
        <nav className="p-4 bg-blue-600 text-white">
          <Link to="/" className="mr-4">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-100 p-8">
              <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Movie App</h1>
              <div className="max-w-4xl mx-auto">
              <Filter onFilter={handleFilter} />
                <button
                  className="bbg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setShowModal(true)}
                >
                  Add Movie
                </button>
                <MovieList movies={filteredMovies} />
                {showModal && (
                  <AddMovieModal
                    newMovie={newMovie}
                    setNewMovie={setNewMovie}
                    addMovie={addMovie}
                    closeModal={() => setShowModal(false)}
                  />
                )}
              </div>
            </div>
            } 
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
