import React from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { useState } from "react";
 
const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log(data);
        setCourses(data.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    };
  });

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
};

export default App;
