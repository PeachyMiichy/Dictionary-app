import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  function playSound() {
    audio.play();
  }
  return (
    <div className="Phonetic">
      <i className="fas fa-volume-up" onClick={playSound}></i>
      <span className="text">{props.phonetic.text} </span>
    </div>
  );
}
