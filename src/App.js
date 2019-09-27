import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Carousel from "./components/Carousel.js";

function App() {
  const defaultImg = {
    copyright: "Amir H. AbolfathTWAN",
    date: "2019-09-09",
    explanation: `How far can you see? The most distant object easily visible to the unaided eye is M31, the great Andromeda Galaxy, over two million light-years away. Without a telescope, even this immense spiral galaxy appears as an unremarkable, faint, nebulous cloud in the constellation Andromeda. But a bright yellow nucleus, dark winding dust lanes, luminous blue spiral arms, and bright red emission nebulas are recorded in this stunning six-hour telescopic digital mosaic of our closest major galactic neighbor. While even casual skygazers are now inspired by the knowledge that there are many distant galaxies like M31, astronomers seriously debated this fundamental concept only 100 years ago. Were these "spiral nebulae" simply outlying gas clouds in our own Milky Way Galaxy or were they "island universes" -- distant galaxies of stars comparable to the Milky Way itself? This question was central to the famous Shapley-Curtis debate of 1920, which was later resolved by observations favoring Andromeda being just like our Milky Way Galaxy -- a conclusion making the rest of the universe much more vast than many had ever imagined.`,
    hdurl: "https://apod.nasa.gov/apod/image/1909/M31_Abolfath_3000.jpg",
    media_type: "image",
    service_version: "v1",
    title: "M31: The Andromeda Galaxy",
    url: "https://apod.nasa.gov/apod/image/1909/M31_Abolfath_960.jpg"
}
  const [image, setImage] = useState(defaultImg);
  const [date, setDate] = useState(new Date(2019, 8, 9));
  const apiKey = "LWqkJeogF0XlRhW24JU14v9sfWMelIH0BS97ldGZ";

  useEffect(() => {
    async function getImage(dateObj) {
      const dateStr = date.toJSON().slice(0,10);
      try {
        const apodObj = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`);
        setImage(apodObj.data);
      } catch (err) {
        console.log(err);
      }
    }
    getImage(date);
  }, [date])

  const dateHandler = (change) => {
    if (change === "left") {
      setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
    } else if (change === "right") {
      setDate(new Date(date.getFullYear(), date.getMonth(), 1 + date.getDate()));
    } else {
      setDate(new Date(change.slice(0,4), parseInt(change.slice(5,7)) - 1, parseInt(change.slice(8,10))));
    }
  }

  return (
    <div className="App">
      <h1>Astronomy Photo Of The Day</h1>
      <Carousel image={image} date={date.toJSON().slice(0,10)} func={dateHandler}/>
      <span>Image Copyright: {image.copyright ? image.copyright : "Public Domain"} </span>
    </div>
  );
}

export default App;
