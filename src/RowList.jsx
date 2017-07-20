import  React ,{Component} from 'react';
import RowItem from './RowItem';


const Users = [
    {id:1, name :'Ram'},
    {id:2, name : 'Robert'},
    {id:3, name: 'Tony'},
    {id:4, name: 'Steve'},
    {id:5, name: 'Mary'},
    {id:6, name: 'Stark'}
];

class RowList extends Component{
    constructor(){
        super();
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount(newCount){
        this.props.updateCount(newCount);
    }

    render(){
         let users = Users.map((user,index) => {
        return(
            <RowItem key={index} {...user} count ={this.props.count} updateCount ={this.updateCount}/>
        )
        });
        return(
            <ul>
                {users}
            </ul>
        )
    }
}

export default RowList;
