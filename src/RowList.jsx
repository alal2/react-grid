import  React ,{Component} from 'react';
import RowItem from './RowItem';


const Users = [
    {id: 1, name :'Ram'},
    {id:2, name : 'Robert'},
    {id:3, name: 'Tony'}
];

class RowList extends Component{

    render(){
         let users = Users.map((user,index) => {
        return(
            <RowItem key={index} {...user} count ={this.props.count}/>
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
