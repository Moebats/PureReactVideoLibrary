var React = require('react');

var VideoItem = React.createClass({

  getInitialState: function(){
    return {
      editMode: false,
      playMode: false
    }
  },

  play: function(){
    this.setState({playMode:true});
  },

  remove: function(){
    this.props.removeVideo(this.props.id);
  },

  edit: function (){
    this.setState({editMode:true});
    this.setState({playMode:false});

  },

  save: function(){
    this.setState({editMode:false});
    this.setState({playMode:false});
    this.props.edit(this.props.id, this.refs.saveName.value, this.refs.saveUrl.value);
  },

  renderNormal: function(){

    var {name, id, url} = this.props;
    return (
      <div className="normal">
        {name}
        <div className="normalButtons">
          <button className="button" onClick = {this.play}> View </button>
          <button className="button" onClick = {this.edit}> Edit </button>
          <button className="button alert" onClick = {this.remove}> Remove </button>
        </div>
      </div>
    )
  },

  renderPlay: function(){

    var {name, id, url} = this.props;
    return (

      <div className="play">
          <label>{name}</label>
          <br></br>
          <iframe className="frame" height="400" width="500"
            src={url} frameBorder="0" allowFullScreen>
          </iframe>

        <div className="panel">
          <button className="button" onClick = {this.save}> Close </button>
          <button className="button" onClick = {this.edit}> Edit </button>
          <button className="button alert" onClick = {this.remove}> Remove </button>
        </div>
      </div>
    )
  },


  renderEdit: function(){
    var {name, id, url} = this.props;

    return (

      <div className="edit">

        <h5>Edit Video Info</h5>

        Edit name:
        <textarea className="inputBorder" defaultValue= {this.props.name} ref="saveName"></textarea>
        Edit URL:
        <textarea  className="inputBorder" defaultValue= {this.props.url} ref="saveUrl"></textarea>

        <div className="panel">
          <button className="button success" onClick = {this.save}> Save </button>
          <button className="button alert" onClick = {this.remove}> Remove </button>
        </div>
      </div>

    )
  },

  render: function () {
    if(this.state.editMode){
      return this.renderEdit();
    } else if(this.state.playMode) {
      return this.renderPlay();
    } else {
      return this.renderNormal();
    }
  }
});

module.exports = VideoItem;
