import "./App.css";
import "./styles.css";
import Board from "./components/Board/Board.jsx";
import Header from "./components/Header/Header.jsx";
import Player from "./components/Player/Player.jsx";
export default () => {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
};
