import './App.css';
import ReactPlayer from 'react-player'
import React, { useState } from "react";
import {FramePlayer} from './frameplayer'

function App() {
  const [videoFilePath, setVideoFilePath] = useState(null);
  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };
  console.log(videoFilePath);
  return (
    <div className="App">
      <input type="file" onChange={handleVideoUpload}/>
      <video src={videoFilePath} width="100%" height="100%" controls={true} />
    </div>
  );
}

export default App;
