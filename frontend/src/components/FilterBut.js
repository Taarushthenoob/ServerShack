import React from 'react';
import './FilterBut.css';

const FilterBut = () => {
  return (
    // <div class="ui vertical animated orange button" id="divfix1" tabindex="0">
    //     <div class="hidden content">
    //          Filter
    //     </div>
    //     <div class="visible content">
    //         <i class="filter icon"></i>
    //     </div>
    // </div>

    <div className="ui multiple dropdown" id="divfix1">
      <input type="hidden" name="filters" />
      <i className="filter icon"></i>
      <span className="text">Filter Posts</span>
      <div className="menu">
        <div className="ui icon search input">
          <i className="search icon"></i>
          <input type="text" placeholder="Search tags..." />
        </div>
        <div className="divider"></div>
        <div className="header">
          <i className="tags icon"></i>
          Tag Label
        </div>
        <div className="scrolling menu">
          <div className="item" data-value="important">
            <div className="ui red empty circular label"></div>
            Physical-Health
          </div>
          <div className="item" data-value="announcement">
            <div className="ui blue empty circular label"></div>
            Mental-Health
          </div>
          <div className="item" data-value="cannotfix">
            <div className="ui black empty circular label"></div>
            Diet
          </div>
          <div className="item" data-value="news">
            <div className="ui purple empty circular label"></div>
            Non-Profit Incentives
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBut;
