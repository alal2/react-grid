import React ,{Component} from 'react';


class ActionButton extends Component {
    constructor(){
        super();
        this.delRow = this.delRow.bind(this)
    }

    delRow(event){
        var trgId =event.target.id;
        this.props.delHandler(trgId);
    }
    render(){
        return(
            <input type="button" value ="Delete" id = {this.props.id} onClick ={this.delRow}/>
        )
    }
}

export default ActionButton;