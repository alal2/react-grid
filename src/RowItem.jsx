import React ,{Component} from 'react';
import UserName from './UserName';
import ActionButton from './ActionButton';

class RowItem extends Component{
    constructor(){
        super();
        this.delHandler = this.delHandler.bind(this);
    }

    delHandler(id){
        var elem =document.getElementById(id);
        elem.parentNode.className = "hide";
    }

    render(){
        return(
            <li>
                <UserName name ={this.props.name} id={this.props.id} />
                <ActionButton id ={this.props.id} delHandler = {this.delHandler}/>
            </li>
        )
    }
}

export default RowItem;