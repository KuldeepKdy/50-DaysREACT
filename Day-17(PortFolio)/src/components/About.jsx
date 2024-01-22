import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          dolorem fuga aut ullam, dolorum aspernatur aperiam pariatur nesciunt
          repellat omnis cupiditate? Earum repudiandae temporibus fugit libero
          facere ipsum! Nisi atque rem eius, nobis sapiente animi similique
          rerum repellendus ab laborum doloribus quam. Fuga sapiente earum quae
          id, nam tenetur repudiandae?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          recusandae nulla, nihil voluptates suscipit possimus quidem.
          Blanditiis culpa recusandae quibusdam, reprehenderit assumenda maxime
          a ex.
        </p>
      </div>
    </div>
  );
};

export default About;
