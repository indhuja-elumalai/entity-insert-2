// src/components/AddMovie.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after submitting the form
import './AddMovie.css'; // Optional: Import CSS for styling

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [poster, setPoster] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hypothetically handle form submission here
    console.log({ title, director, genre, releaseYear, synopsis, poster });
    navigate('/');  // Navigate back to the dashboard after submitting
  };

  const handleCancel = () => {
    navigate('/');  // Navigate back to dashboard without adding a movie
  };

  return (
    <div className="add-movie-container">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </label>
        <label>
          Genre:
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Horror">Horror</option>
          </select>
        </label>
        <label>
          Release Year:
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </label>
        <label>
          Synopsis:
          <textarea
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            required
          />
        </label>
        <label>
          Poster Image URL:
          <input
            type="url"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
