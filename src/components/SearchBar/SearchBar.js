import React from 'react';
import SearchBar from '..//SearchBar/SearchBar';

const sortByOptions {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
  'Distance': 'distance',
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[SortByOption];
      return (<li key={storeByOptionValue}>{sortByOption}< /li);
    });
  }
}



export default SearchBar;
