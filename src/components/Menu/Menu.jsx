import React from "react";

function Menu({ sourceOptions, onSelectVideo }) {
  const handleChange = (event) => {
    onSelectVideo(event.target.value);
  };

  console.log(Object.entries(sourceOptions));

  return (
    <form className="mb-4 flex gap-4 justify-center">
      {Object.entries(sourceOptions).map(([name, url], index) => (
        <div
          key={index}
          className="flex items-center"
        >
          <input
            id={`video-${index}`}
            type="radio"
            name="video"
            value={url}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor={`video-${index}`}>{name}</label>
        </div>
      ))}
    </form>
  );
}

export default Menu;
