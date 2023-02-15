import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">{movie.title}</h2>
          <p className="text-gray-700 text-sm mb-4">{movie.release_date}</p>
          <p className="text-gray-700 text-sm">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
