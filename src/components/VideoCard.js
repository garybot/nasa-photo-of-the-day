import React from "react";

export default function VideoCard(props) {
  return (
    <div className="img-card" key={props.image.date}>
      <h2>{props.image.title}</h2>
      <iframe src={props.image.url} width="500" height="350" title={props.image.title}></iframe>
      <p>{props.image.explanation}</p>
    </div>
    );
}