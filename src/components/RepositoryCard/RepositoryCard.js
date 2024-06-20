import React from "react";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

const RepositoryCard = ({ repo }) => {
  return (
    <div className="card bg-light text-dark p-2 my-2">
      <h3>
        <a href={repo.html_url} className="text-dark">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
      <div>
        <span className="badge bg-primary m-1">
          <FaEye /> {repo.watchers_count}
        </span>
        <span className="badge bg-success m-1">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="badge bg-danger m-1">
          <FaCodeBranch /> {repo.forks_count}
        </span>
      </div>
    </div>
  );
};

export default RepositoryCard;
