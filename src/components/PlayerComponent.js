import React, {Component} from 'react'

class PlayerComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            editPlayer: false,
            nickName: ""
        }
    }

    editPlayerToggle = () => {
        this.setState ({
            editPlayer: !this.state.editPlayer

        })
    }

    handleChange = (value) => {
        this.setState ({
            nickName: value
        })
    }



    render(){
        return(
            <div className={`player-${this.props.index % 2}`}>
                {this.state.editPlayer ? (
                    <div>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            this.props.editPlayer(this.props.player.id, this.state.nickName)
                            this.editPlayerToggle()
                        }}>
                             <input onChange={(e) => this.handleChange(e.target.value)}/>
                        </form>
                    </div>
                ): (
                    <div className="players">
                         <p>{this.props.player.name}</p>
                         <p>{this.props.player.nickName}</p>
                         <img src={this.props.player.img}/>
                         <div className="edit-buttons">
                         <button className="editButtons" onClick={() => this.editPlayerToggle()}>EDIT</button>
                         <button className="editButtons" onClick={() => {this.props.deletePlayer(this.props.player.id)}}>DELETE</button>
                         </div>
                    </div>
                )}
            </div>
        )
    }
}

export default PlayerComponent