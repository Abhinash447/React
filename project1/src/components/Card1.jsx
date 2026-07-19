import React from 'react';

function Card1(props) {
  console.log(props.username)
  
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="https://picsum.photos/400/300?random=90"
          alt="Featured content"
          className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium uppercase bg-white text-black rounded-full mb-3">
          {props.username}
        </span>

        <h2 className="text-xl font-bold text-white mb-2">
          Modern Design Solutions
        </h2>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Discover cutting-edge design patterns and UI components that elevate your
        digital experiences.
      </p>

      <button className="px-4 py-2 bg-white text-black rounded-lg">
        {props.btnText}
      </button>
    </div>
  );
}

export default Card1;