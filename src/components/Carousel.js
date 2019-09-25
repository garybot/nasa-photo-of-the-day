import React from "react";
import PhotoCard from "./PhotoCard.js";
import VideoCard from "./VideoCard.js";

export default function Carousel(props) {
  return (
    <div className="Carousel">
      <div className="buttons">
        <button className="btn" onClick={() =>{
          return props.func("left")
        }}>&larr; Previous</button>
        <span>{props.date}</span>
        <button className="btn" onClick={() =>{
          return props.func("right")
        }}>Next &rarr;</button>
      </div>
      {
        (props.image.media_type === "image") ? <PhotoCard image={props.image}/> : <VideoCard image={props.image}/>}
      }
    </div>
    )
}
