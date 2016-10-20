import React, { PropTypes } from 'react';
import styles from './VideoListElement.css';

const VideoListElement = (props) => (
  <div className={styles.root} >
    <img className={styles.thumbNail} src={props.snippet.thumbnails.high.url} alt="presentation" />
  </div>
);

VideoListElement.propTypes = {
  snippet: PropTypes.object.isRequired,
};

export default VideoListElement;
