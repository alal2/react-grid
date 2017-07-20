import React ,{Component} from 'react';
import RowList from './RowList';
import './index.css';



class GridContainer extends Component{
    constructor(){
        super();
    }
    render(){
        
        return(
            <div className ="main-cont">
               <RowList />
            </div>
        );

    }
}

export default GridContainer;