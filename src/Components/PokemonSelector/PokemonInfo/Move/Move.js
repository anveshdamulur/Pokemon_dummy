import "./Move.css";

const Move = ({ move }) => {
  return (
    <div className="move">
      <h3>LEVEL-UP</h3>
      <label className="move_name">{move}</label>
    </div>
  );
};

export default Move;
