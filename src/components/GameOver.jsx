export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!winner && <p>It's a Draw 🥱</p>}
      {winner && <p>{winner} won!</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
}
