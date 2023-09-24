import React from 'react';

const Card = ({ project }) => {
  return (
    <div className="card">
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
