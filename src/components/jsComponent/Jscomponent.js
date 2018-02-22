import React ,{Component} from 'react';
import cls from './jscomponent.scss';

export default class Jscomponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            name: 'Max'
        }
    }

    changeName = ()=>{
        let newName = this.state.name == 'Max' ? 'not Max' : 'Max';
        this.setState({ name : newName });
    }

    render(){
        return(
            <div className={cls.header}>
                <h2>Hi {this.props.userName}</h2>
                <header onClick={this.changeName}>I am a js component {this.state.name}</header>
            </div>
        )
    }

}