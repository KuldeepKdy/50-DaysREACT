import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  //   const [gif, setGif] = useState("");

  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const output = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif();

  function clickHanler() {
    fetchData();
  }
  return (
    <div className="w-1/2 bg-green-500 rounded border-black flex flex-col items-center gap-y-5 mt-[10px] ">
      <h1 className="text-2xl underline upperline font-bold">A Random GIF</h1>

      {loading ? <Spinner /> : <img src={gif} alt="Gif" width="450" />}
      <button
        className="w-10/12 opacity-80 bg-white text-lg py-2 rounded-lg"
        onClick={clickHanler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
