import { React, useState } from "react";
import "./Dictionary.css";
import axios from "axios";

//https://api.dictionaryapi.dev/api/v2/entries/en/hello

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={updateWord} />
      </form>
    </div>
  );
}
