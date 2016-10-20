import React, { PropTypes } from 'react';
import style from './videoItem.css';

const YoutubeVideo = (props) => {
  const videoExtension = props.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoExtension}`;
  return (
    <li>
      <iframe src={videoUrl} className={style.root}></iframe>
    </li>
  );
};

YoutubeVideo.propTypes = {
  id: PropTypes.string,
};

export default YoutubeVideo;
