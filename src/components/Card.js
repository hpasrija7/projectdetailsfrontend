import React, { useState } from 'react';

const Card = ({ project }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleMouseLeave = () => {
    setIsEnlarged(false); // Set isEnlarged to false when mouse leaves the card
  };

  const cardClassName = `card ${isEnlarged ? 'enlarged' : ''}`;

  return (
    <div className={cardClassName} onClick={toggleEnlarged} onMouseLeave={handleMouseLeave}>
      <div className="card-header">
        <h2 className="card-title">Title: {project['Project.Title']}</h2>
      </div>
      <div className="card-body">
        <p className="card-technologies">
          Technologies: {project['Project.Technologies']}
        </p>
        <p className="card-frontend">
          Frontend: {project['Technical_Skillset.Frontend']}
        </p>
        <p className="card-backend">
          Backend: {project['Technical_Skillset.Backend']}
        </p>
        <p className="card-databases">
          Databases: {project['Technical_Skillset.Databases']}
        </p>
        <p className="card-infrastructure">
          Infrastructure: {project['Technical_Skillset.Infrastructre']}
        </p>
      </div>
    </div>
  );
};

export default Card;
