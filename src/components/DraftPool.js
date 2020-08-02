import React, {Component} from 'react'
import axios from 'axios';
import PlayerComponent from './PlayerComponent';
import AddPlayer from './AddPlayer'

class DraftPool extends Component{
    constructor(props){
        super(props);

        this.state = {
            players: []
        }
    }

    componentDidMount(){
       axios.get('/api/player').then((res) => {
           console.log(res)
         this.setState({players: res.data})
       })
    }

    addPlayer(name, img, nickName) {
        axios.post("/api/newPlayer", { name, img, nickName }).then((res) => {
          this.setState({ players: res.data });
        });
      }
    

    deletePlayer = (id) => {
        axios.delete(`/api/deletePlayer/${id}`).then((res)=> {
            this.setState({players: res.data})
        })
    }

    editPlayer = (id, nickName) => {
        axios.put(`/api/editPlayer/${id}`,{nickName}).then((res)=>{
            this.setState({players: res.data})
        })
    }

    render(){
        let newPlayers = this.state.players.map((e,i)=> {
            return <PlayerComponent index={i} editPlayer={this.editPlayer} player={e} deletePlayer={this.deletePlayer}/>
        })
        return(
            <div>
                 <AddPlayer addPlayer = {this.addPlayer}/>
                {newPlayers}
            </div>
        )
    }
}

export default DraftPool