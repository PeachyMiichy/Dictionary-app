import { React, useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

//https://api.dictionaryapi.dev/api/v2/entries/en/hello

export default function Dictionary() {
  let [word, setWord] = useState("hello");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="search">
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateWord} />
          </form>
          <div className="Hint">Suggested search: Hello, Books, Magic...</div>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
