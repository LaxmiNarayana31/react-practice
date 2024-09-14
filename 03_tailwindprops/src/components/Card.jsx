/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function Card({ username }) {
  // console.log("props", props); // {} it is a object, check in console
  console.log("props", username);
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://th.bing.com/th?id=OIP.NPXs-7xSi3PDrzMHqobJ-wHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.4&pid=3.1&rm=2"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">
            Software Engineer, India
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
