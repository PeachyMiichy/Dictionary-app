import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <div className="wordType">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
