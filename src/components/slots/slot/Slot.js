import React ,{Component } from 'react';
import classes from '../../../index.css';
class Slot extends Component{
    render(){
        const style = {
            "color":"gray"
        }
        return (
                        <div className={classes.slot}>
                            <div className={classes.slot_details}>
                                <h3>{this.props.name}</h3>
                                <p style={style}><i className="fa fa-map-marker"></i>{this.props.address}</p>
                                <p className={classes.sav}><span className={classes.age}>{this.props.age} +</span> {this.props.capacity} Slots Available</p>
                                <p className={classes.vad}><i className="fa fa-medkit"></i> <span> {this.props.vaccine} </span></p>
                            </div>
                            <div className={classes.slot_button}>
                                <p>Book Now</p>
                            </div>
                            
                        </div>
        );
    }
}

export default Slot;