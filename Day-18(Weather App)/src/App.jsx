import React, { useEffect, useState } from "react";

const API_KEY = "5af45a36e769dfcbe74694be4cbe92ce";
const App = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [apidata, setApiData] = useState({});
  useEffect(() => {
    const weather = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        setLat(position.coords.latitude);
        setLon(position.coords.latitude);
        // const lat = position.coords.latitude;
        // const lon = position.coords.longitude;
      });
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        const data = await response.json();
        //api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5af45a36e769dfcbe74694be4cbe92ce
        // console.log(data);
        setApiData(data);
      } catch (error) {
        if (error) {
          console.log(apidata);
          console.log("Error in feching data");
        }
      }
    };
  }, [apidata]);

  return <div className="text-black text-3xl">{apidata.cnt}</div>;
};

export default App;
