import Player from "../Player/Player";
import "./header.css";

export default () => {
  return (
    <div className="Header">
      <Player whichPlayer="O" />
      <Player whichPlayer="X" />
    </div>
  );
};
