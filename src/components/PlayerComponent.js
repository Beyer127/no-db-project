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
                    <div>
                         <p>{this.props.player.name}</p>
                         <p>{this.props.player.nickName}</p>
                         <img src={this.props.player.img}/>
                         
                         <button onClick={() => this.editPlayerToggle()}>Edit</button>
                         <button onClick={() => {this.props.deletePlayer(this.props.player.id)}}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default PlayerComponent