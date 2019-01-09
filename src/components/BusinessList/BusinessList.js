import React from 'react';
import BusinessListCSS from './businessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Commponent {
  render() {
    return (
      <div class="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        </div>
    );
  }
}

export default BusinessList;
