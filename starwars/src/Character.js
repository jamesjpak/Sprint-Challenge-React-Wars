import React from "react";

function Character(props) {
  return (
    <div className="character-card">
      
      <div className="character-info">
        <h1>{props.character.name}</h1>
        <p>
          <strong>Born in:</strong> {props.character.birth_year}
        </p>
        <p>
          <strong>Eye Color:</strong> {props.character.eye_color}
        </p>
        <p>
          <strong>Gender:</strong> {props.character.gender}
        </p>
      </div>
    </div>
  );
}

export default Character;