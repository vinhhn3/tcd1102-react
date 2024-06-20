import { useReducer } from "react";

import GithubApi from "../../api/GitHubApi";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const response = await GithubApi.getUsers(text);
    dispatch({
      type: "SEARCH_USERS",
      payload: response.data.items,
    });
  };

  const getUser = async (login) => {
    const response = await GithubApi.getUser(login);
    dispatch({
      type: "GET_USER",
      payload: response.data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        searchUsers,
        getUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
