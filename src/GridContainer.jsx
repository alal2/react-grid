import React ,{Component} from 'react';
import RowList from './RowList';
import CountRow from './CountRow';
import GridHeader from './GridHeader';
import './index.css';

const Users = [
    {id:1, name :'Ram'},
    {id:2, name : 'Robert'},
    {id:3, name: 'Tony'},
    {id:4, name: 'Steve'},
    {id:5, name: 'Mary'},
    {id:6, name: 'Stark'}
];


class GridContainer extends Component{
    constructor(){
        super();
        var users = Users.length;
        this.state ={count: users};
        this.updateCount = this.updateCount.bind(this);
    }
    updateCount(newCount){
        this.setState({count: newCount});
    }

    render(){
       
        return(
            <div className ="main-cont page-header">
                <h1>GRID</h1>
               <CountRow count ={this.state.count}/>
               <RowList updateCount ={this.updateCount} count ={this.state.count}/>
            </div>
        );

    }
}

export default GridContainer;