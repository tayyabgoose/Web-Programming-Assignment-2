import "./App.css";
import { Trophy } from "./components/trophy";

function App() {
  return (
    <>
      <div className="leaderboard">
        <div className="leaderboard-header">
          <h1>RANK</h1>
          <h1>TEAM NAME</h1>
          <h1>TOTAL GAMES PLAYED</h1>
          <h1>SCORE</h1>
        </div>
      </div>
      <div className="leaderboard-item">
        <Trophy colour="#bf800a" />
        <div className="leaderboard-item-team">
          <img src="https://media.gq-magazine.co.uk/photos/5d139b6c952274afca35d03c/master/w_1600%2Cc_limit/One-Direction-05-GQ-26Jul13_b.jpg" />
          <h4>The Avengers</h4>
        </div>
        <h4>30</h4>
        <h4>+20,274</h4>
      </div>
    </>
  );
}

export default App;
