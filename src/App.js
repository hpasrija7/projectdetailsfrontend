import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const cardsPerPage = 4; 

  useEffect(() => {
    fetch('https://projectdetailsbackend.onrender.com/api/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const filteredProjects = data.filter((project) => {
    return (
      project['Project.Title'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project['Project.Technologies'].toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1 className="project-title">Projects Information</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <button onClick={clearSearch} className="clear-button">Clear</button>
      <CardList data={filteredProjects} currentPage={currentPage} cardsPerPage={cardsPerPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProjects.length / cardsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
