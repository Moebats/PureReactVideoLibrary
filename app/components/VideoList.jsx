var React = require('react');
var VideoItem = require('VideoItem');

var VideoList = React.createClass({
  render: function () {

//Other functions and variables
    var {videoItems} = this.props;
    var renderList = () => {

      return videoItems.map((x) => {
        return (
          <VideoItem removeVideo= {this.props.removeVideo} edit={this.props.edit} key={x.id} {...x}/>
        );
      });
    };

//gets output to DOM
    return (
      <div>
        {renderList()}
      </div>
    )
  }
});

module.exports = VideoList;
