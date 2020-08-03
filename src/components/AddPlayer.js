import React, { Component } from "react";
import axios from "axios";

class AddPlayer extends Component {
  constructor() {
    super();

    this.state = {
      player: [],
      name: "",
      img: "",
      nickName: "",
    };
    this.addPlayer = this.addPlayer.bind(this)
  }

  addPlayer(name, img, nickName) {
    axios.post("/api/newPlayer", { name, img, nickName }).then((res) => {
      this.setState({ player: res.data });
    });
  }

  universalHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.props.addPlayer(this.state.name, this.state.img, this.state.nickName);
            this.setState({ name: "", img: "", nickName: "" });
          }}
        >
          <input name="name"
          value={this.state.name}
            onChange={(e) => {
              this.universalHandler(e);
            }}
            class="input"
            type="text"
            placeholder="name"
          />
    
          <input name="img"
          value={this.state.img}
            onChange={(e) => {
              this.universalHandler(e);
            }}
            class="input"
            type="text"
            placeholder="Image"
          />
    
          <input name="nickName"
          value={this.state.nickName}
            onChange={(e) => {
              this.universalHandler(e);
            }}
            class="input"
            type="text"
            placeholder="Nick Name" 
          />
    

          <button className="addedPlayer">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
