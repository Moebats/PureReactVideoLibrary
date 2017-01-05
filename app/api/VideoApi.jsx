var $ = require('jquery');

module.exports = {
  setVideos: function(videos){
    if($.isArray(videos)){
      localStorage.setItem('videos', JSON.stringify(videos));
      return videos;
    }
  },

  getVideos: function(){
    var stringVideos = localStorage.getItem('videos');
    var videos = JSON.parse(stringVideos);
    return $.isArray(videos) ? videos: [];
  },

  sortVideos: function (videos, searchText){
    var sortedVideos = videos;

    sortedVideos = sortedVideos.filter((x) => {

      var name = x.name.toLowerCase();
      return searchText.length === 0 ||
      name.indexOf(searchText) > -1;
    });
    return sortedVideos;
  }

};
