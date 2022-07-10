import React from 'react';
import { Link } from 'react-router-dom';

export default function Timer() {
  const [duration, setDuration] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audio] = React.useState(new Audio('/meditation.mp3'));

  const [currentTime, setCurrentTime] = React.useState(0);
  const elapsed = Math.max(duration - currentTime, 0);
  const seconds = Math.floor(elapsed % 60)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor(elapsed / 60)
    .toString()
    .padStart(2, '0');
  const timeToDisplay = `${minutes} : ${seconds}`;

  const icon = isPlaying ? 'pause.svg' : 'play.svg';

  function handleClick() {
    console.log(duration);
    if (duration !== 0) {
      setIsPlaying((playing) => !playing);

      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  }

  audio.ontimeupdate = () => {
    if (currentTime >= duration) {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
      return;
    }
    setCurrentTime(audio.currentTime);
  };

  function chooseTime() {
    const player = parseInt(prompt('Set the time in seconds'));
    if (Number.isNaN(player)) {
      alert('Not a number');
    } else {
      setDuration(player);
    }
  }

  return (
    <div className="timer-wrapper">
      <div className="play-container">
        <nav>
          <Link to="/" className="top-text">
            Find your balance
          </Link>
        </nav>

        <div className="timer">
          <div className="play-background" onClick={handleClick}>
            <img className="play" src={`/svg/${icon}`} alt="play" />
          </div>

          <div className="play-background" onClick={chooseTime}>
            <img className="play" src={'/svg/timer.svg'} alt="timer" />
          </div>
        </div>

        <h2 id="time-display" className="time-display">
          {timeToDisplay}
        </h2>

        <footer>
          <p id="copyright">
            music by{' '}
            <a href="/it/users/natureseye-18615106/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=7618">
              NaturesEye
            </a>{' '}
            from{' '}
            <a href="https://pixabay.com/music/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=7618">
              Pixabay
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
