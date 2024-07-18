import React, { useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Music = () => {
  const audioPlayerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioPlayerRef.current.audio.current.pause();
    } else {
      audioPlayerRef.current.audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <AudioPlayer
        ref={audioPlayerRef}
        src="music/clouds.mp3"
        autoPlay
        loop
        volume={0.5} // Set to full volume
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        customProgressBarSection={[]}
      />
      <div className="equalizer" onClick={handlePlayPause}>
        <div className="bar" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
        <div className="bar" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
        <div className="bar" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
      </div>
    </div>
  );
};

export default Music;
