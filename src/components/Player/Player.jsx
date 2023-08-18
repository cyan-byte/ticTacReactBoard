import "./player.css";

export default (props) => {
  return (
    <div className={"Player " + props.whichPlayer}>
      <h2>Player {props.whichPlayer}</h2>
      <p>Wins: 10</p>
    </div>
  );
};
