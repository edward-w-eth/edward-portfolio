import React from "react";

const Education = ({ className }) => {
  return (
    <div
      className={`${className} my-64 mx-auto flex flex-col items-center justify-between`}
    >
      <h2 className="font-bold text-8xl mb-10 w-full text-center">Education</h2>
      <div className="mx-auto flex items-center w-full justify-between">
        <h2 className="left-element text-lg fond-bold">
          Bachelor Of Science In Computer Science
        </h2>
        <span className="right-element capitalize text-lg fond-bold text-dark/75">
          2014-2018 | CALIFORNIA STATE UNIVERSITY OF LOS ANGELES
        </span>
      </div>
      <p className="font-medium w-full">
        Completed relevant courses included Data Structures and Algorithms,
        Computer Systems Engineering, and Artificial Intelligence.
      </p>
    </div>
  );
};

export default Education;
