import React, { PropTypes } from 'react';
import styles from './VideoItem.css';

const VideoItem = (props) => {
  const videoExtension = props.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoExtension}`;

  return (
    <div className={styles.root}>
      <iframe src={videoUrl} className={styles.videoFrame}></iframe>
    </div>
  );
};

VideoItem.propTypes = {
  id: PropTypes.object.isRequired,
};

export default VideoItem;
