import React from 'react';
import Card from './Card';


const CardList = ({ data, currentPage, cardsPerPage }) => {

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const cardsToDisplay = data.slice(startIndex, endIndex);

  return (
    <div className="card-list">
      {cardsToDisplay.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default CardList;
