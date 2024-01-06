import React from "react";
import { FcLike } from "react-icons/fc";

const Card = (props) => {
  console.log(props);
  let course = props.course;
  return (
    <div>
      <div>
        <img src={course.img.url} alt={course.img.src} />
      </div>
      <div>
        <button>
          <FcLike />
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
