// src/pages/index.js

// import dynamic from 'next/dynamic';
import React from 'react';
import Client from './Client';

// const EmotionDetection = dynamic(() => import('./components/EmotionalDetector'), { ssr: false });
// const VideoCapture = dynamic(() => import('./components/VideoCapture'), { ssr: false });


const Home = () => {
  // const videoRef = useRef(null);
  // const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <div className="App">
      
      <Client/>
      
      {/* <VideoCapture onVideoReady={() => setIsVideoReady(true)} ref={videoRef} />
      {isVideoReady && <EmotionDetection videoElement={videoRef.current} />} */}
    </div>
  );
};

export default Home;
