import { useRef, useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const [tempName, setTempName] = useState(name);

  const handleEditClick = () => {
    if (isEditing) {
      setTempName(name);
    }
    setIsEditing((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleBlur = (e) => {
    console.log(e.relatedTarget);

    if (!e.relatedTarget || e.relatedTarget.tagName !== "BUTTON") {
      setIsEditing(false);
    }
  };

  let player = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    player = (
      <input
        value={playerName}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing && tempName !== playerName ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
