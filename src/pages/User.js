import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/githubContext";
function User() {
  const githubContext = useContext(GithubContext);
  const { loginId } = useParams();
  const { user, getUser } = githubContext;

  useEffect(() => {
    getUser(loginId);
  }, []);

  return (
    <div className="container">
      <div className="card all-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="round-img"
          style={{ width: "150px" }}
        />
        <h1 className="large">{user.name}</h1>
        <p className="lead">{user.bio}</p>
        <a href={user.html_url} className="btn btn-primary my-1">
          Visit GitHub Profile
        </a>
        <ul>
          <li>
            <strong>Username: </strong> {user.login}
          </li>
          <li>
            <strong>Company: </strong> {user.company}
          </li>
          <li>
            <strong>Website: </strong>{" "}
            <a href={`http://${user.blog}`}>{user.blog}</a>
          </li>
          <li>
            <strong>Location: </strong> {user.location}
          </li>
          <li>
            <strong>Public Repos: </strong> {user.public_repos}
          </li>
          <li>
            <strong>Public Gists: </strong> {user.public_gists}
          </li>
          <li>
            <strong>Followers: </strong> {user.followers}
          </li>
          <li>
            <strong>Following: </strong> {user.following}
          </li>
          <li>
            <strong>Member Since: </strong>{" "}
            {new Date(user.created_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Last Updated: </strong>{" "}
            {new Date(user.updated_at).toLocaleDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
