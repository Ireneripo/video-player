import React from 'react';

function Video({src}) {
  return <div>
    <video src={src} loop autoPlay controls></video>
  </div>;
}

export default Video;
