import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("car");

  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const output = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2 bg-blue-500 rounded border-black flex flex-col items-center gap-y-5 mt-[10px] ">
      <h1 className="text-2xl underline upperline font-bold">
        Random {tag} GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="Gif" width="450" />}

      <input
        className="w-10/12 opacity-80 bg-white text-lg py-2 rounded-lg mb-[2px] text-center"
        onChange={changeHandler}
        value={tag}
      />
      <button
        className="w-10/12 opacity-80 bg-white text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
