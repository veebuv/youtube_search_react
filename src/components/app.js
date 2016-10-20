import React, { Component } from 'react';
import youtubeFetch from '../utils/youtube';
import SearchBar from './SearchBar/SearchBar';
import VideoItem from './VideoItem/VideoItem';
import VideoListElement from './VideoListElement/VideoListElement';
import styles from '../../style/style.css';
import _ from 'lodash';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      value: '',
      mainFrame: null,
      fetchState: false,
    };
  }

  fetchData = () => {
    youtubeFetch(this.state.value).then((response) => {
      const data = _.filter(response.items, (elem) => !!elem.id.videoId);
      this.setState({ searchResults: data, mainFrame: data[0], fetchState: true });
    });
  }

  render() {
    const fetchState = this.state.fetchState ? 'Loading Data' : 'Find Something';

    return (
      <div className={styles.main} >
        <div className={styles.search}>
          <div className={styles.searchBar}>
            <SearchBar
              searchFunction={this.fetchData}
              value={this.state.value}
              changeOfData={(value) => this.setState({ value })}
            />
          </div>
          <div className={styles.searchList}>
            {this.state.mainFrame ? <VideoItem id={this.state.mainFrame.id} /> : <div>{fetchState}</div>}
          </div>
        </div>
        <div className={styles.list}>
          {_.map(this.state.searchResults, (eachResult, i) => <div key={i} onClick={() => this.setState({ mainFrame: eachResult })}><VideoListElement snippet={eachResult.snippet} /></div>)}
        </div>
      </div>
    );
  }
}
