import ReactAudioPlayer from "react-audio-player";

function Audio({ srcAudio, titleAudio }) {
  return (
    <div className="audio-card">
      <div className="container">
        <h5>{titleAudio}</h5>
        <ReactAudioPlayer src={srcAudio} controls className="audio" />
      </div>
    </div>
  );
}

export default Audio;
