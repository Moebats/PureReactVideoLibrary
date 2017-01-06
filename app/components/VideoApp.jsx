var React = require('react');
var VideoList = require('VideoList');
var AddVideo = require('AddVideo');
var Search = require('Search');
var VideoApi = require('VideoApi');
var uuid = require('node-uuid');


var VideoApp = React.createClass({

  getInitialState: function(){
    return {
      searchText: '',
      videoItems: VideoApi.getVideos()
    };
  },

  componentDidUpdate: function(){
    VideoApi.setVideos(this.state.videoItems);
  },

//Video function for AddVideo.jsx
  AddVideo: function(text, url){
    this.setState({
      videoItems: [
        ...this.state.videoItems,
        {
          id: uuid(),
          name: text,
          url: url
        }
      ]
    });
  },

  removeVideo: function(id){
    console.log("it worked");
    var temp = this.state.videoItems;

    let index = temp.map( (x) => x.id ).indexOf(id);
    console.log(index);

    temp.splice(index,1);
    this.setState({videoItems: temp})
  },

  edit: function(id, name, url){
    console.log("it worked");
    var temp = this.state.videoItems;

    let index = temp.map( (x) => x.id ).indexOf(id);
    console.log(index);

    temp[index].name = name;
    temp[index].url = url;
    this.setState({videoItems: temp})
  },

//search prop function for Search.jsx
  searchFunction: function(searchText){
    this.setState({
      searchText: searchText.toLowerCase()
    })
  },

//Render function
  render: function () {
    var {videoItems, searchText} = this.state;
    var sortedVideos = VideoApi.sortVideos(videoItems,searchText);
    return (
      <div>
        <h1 className="main-title">Video Library</h1>

        <div className="row">
          <div className = "column small-centered small-11 medium-8 large-8">
          <div className="container">

            <Search className ="search" search={this.searchFunction}/>
            <h5>List of Videos: </h5>
            <VideoList removeVideo = {this.removeVideo} edit= {this.edit} videoItems ={sortedVideos}/>
            <AddVideo addVideo={this.AddVideo} />

          </div>
        </div>
        </div>

      </div>
    )
  }
});

module.exports = VideoApp;
