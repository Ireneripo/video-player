import React from "react";
import Video from "./components/Video";
import Menu from "./components/Menu";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(videos.cat);

  function handleSelectVideo(newVideo) {
    setSelectedVideo(newVideo);
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-8 mb-16 font-bold">
        Project 6: Video Player
      </h1>
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <Menu
          sourceOptions={videos}
          onSelectVideo={handleSelectVideo}
        />
        <div className="w-[640px] h-[360px]">
          <Video src={selectedVideo} />
        </div>
      </div>
    </>
  );
}

export default App;
