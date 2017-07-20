import React ,{Component} from 'react';


class ActionButton extends Component {
    constructor(){
        super();
        this.delRow = this.delRow.bind(this)
    }

    delRow(event){
        var trgId =event.target.id,
         newCount = this.props.count -1;
        this.props.delHandler(trgId);
        console.log(newCount)
        this.props.updateCountHandler(newCount);
    }
    render(){
        return(
            <input type="button" className ="btn btn-warning" value ="Delete" id = {this.props.id} onClick ={this.delRow}/>
        )
    }
}

export default ActionButton;