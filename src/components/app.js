import React, { Component } from 'react';
import youtubeFetch from '../utils/youtube';
import VideoItem from './videoItem';
import _ from 'lodash';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  fetchData = () => {
    youtubeFetch('chainsmokers').then((response) => {
      const data = _.filter(response.items, (elem) => !!elem.id.videoId);
      this.setState({ searchResults: data });
    });
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <button onClick={this.fetchData}> Click me </button>
        {!_.isEmpty(searchResults) ? _.map(searchResults, (searchResult) => <VideoItem id={searchResult.id} />) : 'Hi'}
      </div>
    );
  }
}
