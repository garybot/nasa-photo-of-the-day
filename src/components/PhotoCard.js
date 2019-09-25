import React from "react";

export default function PhotoCard(props) {
  return (
    <div className="img-card" key={props.date}>
      <h2>{props.title}</h2>
      <img className="apod" src={props.src} alt={props.title}/>
      <p>{props.explanation}</p>
    </div>
    );
}