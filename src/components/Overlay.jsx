import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <>
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <h1 className="logo">
              Cesar Gonzalez
              <div className="spinner">
                <div className="spinner__image" />
              </div>
            </h1>
            <p className="intro__scroll">Scroll to begin the journey</p>
            <button
              className="explore"
              onClick={() => {
                setPlay(true);
              }}
            >
              Explore
            </button>
          </div>
        </>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Thank You! Don't hesitate to reach out by clicking on the button below!</p>
      </div>
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <button className="explore"
            onClick={() => {
              window.location = 'https://www.linkedin.com/in/cesar-gonzalez-2b9b8b4b/'
            }}
          >
            LinkedIn Profile
          </button>
          &nbsp;
          <button className="explore"
            onClick={() => {
              window.location = 'https://github.com/KaizerBuns/'
            }}
          >
            Github Profile
          </button>
      </div>
    </div>
  );
};
