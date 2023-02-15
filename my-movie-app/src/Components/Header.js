import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-blue-500 py-4">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="text-white font-bold text-2xl">
          My Movie App
        </a>
        <form onSubmit={handleSearch}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-l-lg px-4 py-2 w-64 mr-2 text-gray-900 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-white rounded-r-lg px-4 py-2 text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
