import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import PhotoCard from "./components/PhotoCard.js";
import Carousel from "./components/Carousel.js";

function App() {
  const defaultImg = {
  copyright: "Charlie Bracken",
  date: "2019-09-07",
  explanation: "The mysterious blue reflection nebula found in catalogs as VdB 152 or Ced 201 really is very faint. It lies at the tip of the long dark nebula Barnard 175 in a dusty complex that has also been called Wolf's Cave. At the center of this deep and widefield telescopic view, the cosmic apparitions are nearly 1,400 light-years away along the northern Milky Way in the royal constellation Cepheus. Near the edge of a large molecular cloud, pockets of interstellar dust in the region block light from background stars or scatter light from the embedded bright star giving the the nebula its characteristic blue color. Ultraviolet light from the star is also thought to cause a dim reddish luminescence in the nebular dust. Though stars do form in molecular clouds, this star seems to have only accidentally wandered into the area, as its measured velocity through space is very different from the cloud's velocity. Another dense, obscuring dark nebula, LDN 1221, is easy to spot at the upper right in the frame, while the more colorful planetary nebula Dengel-Hartl 5 is just below center. Faint reddish emission from an ancient supernova remnant can also be traced (lower right to upper left) against the dust-rich complex in Cepheus.",
  hdurl: "https://apod.nasa.gov/apod/image/1909/WolfsCaveCBMDMW.jpg",
  media_type: "image",
  service_version: "v1",
  title: "In Wolf's Cave",
  url: "https://apod.nasa.gov/apod/image/1909/WolfsCaveCBMDMW1024.jpg"
  }
  const [image, setImage] = useState(defaultImg);
  const [date, setDate] = useState(new Date(2019, 8, 9))
  const apiKey = "LWqkJeogF0XlRhW24JU14v9sfWMelIH0BS97ldGZ"

  useEffect(() => {
    async function getImage(date) {
      try {
        const apodObj = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date.toJSON().slice(0,10)}`)
        console.log(apodObj);
        setImage(apodObj.data);
      } catch (err) {
        console.log(err);
      }
    }
    getImage(date);
  }, [date])

  const changeImage = (direction) => {
    if (direction === "left") {
      setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
    } else if (direction === "right") {
      setDate(new Date(date.getFullYear(), date.getMonth(), 1 + date.getDate()));
    }
  }

  return (
    <div className="App">
      <Carousel date={date.toJSON().slice(0,10)} title={image.title} src={image.url} key={image.date} explanation={image.explanation} func={changeImage}/>
    </div>
  );
}

export default App;
