import { React, useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

//https://api.dictionaryapi.dev/api/v2/entries/en/hello

export default function Dictionary() {
  let [word, setWord] = useState("hello");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handelPexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000121597ce9972d4bfebaf490c9b38775de";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handelPexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
