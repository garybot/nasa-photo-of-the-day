import React from "react";
import PhotoCard from "./PhotoCard.js";

export default function Carousel(props) {
  return (
    <div>
      <div>
        <button onClick={() =>{
          return props.func("left")
        }}>&larr; Previous</button>
        <span>{props.date}</span>
        <button onClick={() =>{
          return props.func("right")
        }}>Next &rarr;</button>
      </div>
      <PhotoCard title={props.title} src={props.src} key={props.date} explanation={props.explanation}/>
    </div>
    )
}
