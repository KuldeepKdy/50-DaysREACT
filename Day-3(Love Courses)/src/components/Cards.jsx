import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  //return you a list of all courses received from the api response
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return (
    <div>
      {getCourses().map((course) => {
        <Card />;
      })}
    </div>
  );
};

export default Cards;
