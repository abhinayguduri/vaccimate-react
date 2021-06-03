import React ,{Component} from 'react';
import classes from '../../../index.css';

class NoSlot extends Component{
    render(){
        return (
            <div className={classes.No_Slot}>
                <h3>Loading..</h3>
            </div>
        );
    }
}

export default NoSlot;