import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[450px] py-3 flex flex-col gap-7 mt-[68px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-xl ">{post.title}</p>
            <p className="text-[15px]">
              By <span className="italic">{post.author}</span>on{" "}
              <span className="underline bold">{post.category}</span>
            </p>
            <p className="text-[13px]">Posted on {post.date}</p>
            <p className="text-sm mt-4">{post.content}</p>
            <div className="flex gap-1 font-bold">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-500 underline bold text-xs"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
