import React from "react";

function Character(props) {
  return (
    <div className="character-card">
      <div className="character-info">
        <h1>{props.character.name}</h1>
       
       <div className = "list-style">
          <li>
            <strong>Born in:</strong> {props.character.birth_year}
          </li>
          <li>
            <strong>Eye Color:</strong> {props.character.eye_color}
          </li>
          <li>
            <strong>Gender:</strong> {props.character.gender}
          </li>
        </div>
       
      </div>
    </div>
  );
}

export default Character;
