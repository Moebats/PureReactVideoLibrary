var React = require('react');

var AddVideo = React.createClass({

  sendData: function (e) {
    e.preventDefault();
    if (this.refs.name.value !=''){
      var text = this.refs.name.value;
      var str = this.refs.url.value;
      var send = str.replace("watch?v=", "v/");
            this.props.addVideo(text, send);
    }
    else alert('Enter a name please');

  },

  render: function () {

    return (
      <div className="addVideo">
        <form onSubmit={this.sendData}>
          <label>Enter Video name:</label>
          <input className="inputBorder" type="text" ref="name"/>
          <label>Enter link:</label>
          <input className="inputBorder" type="url" ref="url"/>
          <br></br>
          <button className="buttonAdd">Add Video</button>
        </form>
      </div>
    )
  }
});

module.exports = AddVideo;
