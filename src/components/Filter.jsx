import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = () => {
        onFilter({ title, rating });
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-4">
        <input
            className="border rounded px-4 py-2 mr-2 mb-2 md:mb-0"
            type="text"
            placeholder="Filter by title"
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <input
            className="border rounded px-4 py-2 mr-2 mb-2 md:mb-0"
            type="number"
            placeholder="Filter by rating"
            value={rating}
            onChange={e => setRating(e.target.value)}
        />
        <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleFilter}
        >
            Filter
        </button>
        </div>
    );
};

export default Filter;
