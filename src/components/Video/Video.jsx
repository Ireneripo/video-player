import React from "react";

function Video({ src }) {
  return (
    <div>
      <video
        src={src}
        loop
        autoPlay
        controls
        className="w-full h-full object-contain"
      ></video>
    </div>
  );
}

export default Video;
