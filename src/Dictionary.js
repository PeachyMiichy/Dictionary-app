import { React, useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function updateWord(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(word);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={updateWord} />
      </form>
    </div>
  );
}
