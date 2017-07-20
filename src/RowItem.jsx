import React ,{Component} from 'react';
import UserName from './UserName';
import ActionButton from './ActionButton';

class RowItem extends Component{
    constructor(){
        super();
        this.delHandler = this.delHandler.bind(this);
        this.updateCountHandler =this.updateCountHandler.bind(this);
    }

    delHandler(id){
        var elem =document.getElementById(id);
        elem.parentNode.className = "hide";
    }

    updateCountHandler(newCount){
        this.props.updateCount(newCount);
    }
    render(){
        return(
            <li>
                <UserName name ={this.props.name} id={this.props.id} />
                <ActionButton  id ={this.props.id}  count ={this.props.count} delHandler = {this.delHandler} updateCountHandler ={this.updateCountHandler}/>
            </li>
        )
    }
}

export default RowItem;