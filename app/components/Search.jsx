var React = require('react');

var Search = React.createClass({


  sortSearch: function(){
    var searchText = this.refs.searchText.value;

    this.props.search(searchText);
  },

  render: function () {

    return (
      <div className="search">
        <div>
          <input className="inputBorder" type="search" ref="searchText" onChange= {this.sortSearch} placeholder="Search Videos" />
        </div>
      </div>
    )
  }
});

module.exports = Search;
