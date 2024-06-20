import "./App.css";
import GithubState from "./context/github/githubState";
import Body from "./layout/Body";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div>
      <GithubState>
        <Navbar />
        <Body />
      </GithubState>
    </div>
  );
}

export default App;
