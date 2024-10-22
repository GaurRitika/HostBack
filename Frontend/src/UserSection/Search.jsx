import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Example: Simulate search by filtering dummy data (you can replace this with your own logic)
    const dummyData = [
      { id: 1, title: 'First Post', description: 'Description of the first post' },
      { id: 2, title: 'Second Post', description: 'Description of the second post' },
      { id: 3, title: 'Third Post', description: 'Description of the third post' },
    ];

    const filteredResults = dummyData.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <>
    <div className="search-container">
      <h2 className="search-title">Search Posts</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="search-results">
        {results.length > 0 ? (
          results.map(result => (
            <div key={result.id} className="search-result-card">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Search;
