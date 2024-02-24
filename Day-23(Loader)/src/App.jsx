import React, { useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
const App = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  //https://www.greatfrontend.com/api/questions/like-button
  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <div className="flex text-3xl w-full gap-8 h-screen items-center justify-center">
      <button
        disabled={isFetching}
        onClick={handleLikeUnlike}
        className={`likeBtn ${liked ? "liked" : ""}`}
      >
        {isFetching ? <PiSpinnerBold /> : <FaRegHeart />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <div>{error} </div>}
    </div>
  );
};

export default App;
