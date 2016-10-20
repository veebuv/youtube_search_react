import React, { PropTypes } from 'react';
import styles from './SearchBar.css';

const SearchBar = (props) => (
  <div className={styles.root}>
    <input onChange={(e) => props.changeOfData(e.target.value)} value={props.value} />
    <button onClick={props.searchFunction}>Search</button>
  </div>
);

SearchBar.propTypes = {
  searchFunction: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  changeOfData: PropTypes.func.isRequired,
};

export default SearchBar;
