import React , {Component} from 'react';
import classes from '../../index.css';
import Slot from '../slots/slot/Slot.js';
import NoSlot from '../slots/slot/NoSlot.js';
class Calender extends Component{
    state= {
        mapstate:false,
        loading:false,
    }
    togglemap(){
        const map = this.state.mapstate;
        this.setState({mapstate:!map});
    }
    
     render(){
         let slots =[];
         if(this.props.weekslots.length>0){
            slots = this.props.weekslots.map((center)=>{
                return center.map((slot)=>{
                    console.log(this.props.tstate.showall)
                    if(this.props.tstate.hideunav){
                        if(parseInt(slot.available_capacity)>0){
                            return [...Array(<Slot name={slot.name} key={slot.session_id} address={slot.address+", "+slot.district_name+", "+slot.pincode} age={slot.min_age_limit} capacity={slot.available_capacity} vaccine={slot.vaccine}/>)];
                        }
                        
                    }else{
                        if(this.props.tstate.showall){
                        
                            return [...Array(<Slot name={slot.name} key={slot.session_id} address={slot.address+", "+slot.district_name+", "+slot.pincode} age={slot.min_age_limit} capacity={slot.available_capacity} vaccine={slot.vaccine}/>)];
                        }else{
                            
                        }
                    }


                });
            });
         }
         
        return (
            
            <div>
            <div className={classes.calender_bloc}>
                    <div className={classes.search_bloc}>
                        <div className={classes.search}>
                            <div className={classes.search_input}>
                                <input type="text" placeholder="Search for hospital"/>
                            </div>
                            <div className={classes.search_icon}>
                                <p><i className="fa fa-search"></i></p>
                            </div>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.search_input_date}>
                                <input onChange={(e)=>{this.props.getslotsbydate(e)}} type="date" pattern="\d{2}-\d{2}-\d{4}"/>
                            </div>
                        </div>
                        <div className={classes.show_map_radio}>
                            <p>Hide Unavilable :</p>
                            <input onChange={()=>{this.props.toggleunav()}} type="checkbox" id="hideswitch"
                    className={classes.hidecheckbox} />
                     <label htmlFor="hideswitch" className={classes.hidetoggle}></label>
                        </div>
                        <div className={classes.show_map_radio}>
                            <p>Show Map :</p>
                            <input onChange={()=>{this.togglemap()}} type="checkbox" id="mapswitch"
                    className={classes.mapcheckbox} />
                     <label htmlFor="mapswitch" className={classes.maptoggle}></label>
                        </div>
                    </div>
                </div>
                <div className={classes.appointment_bloc}>
                {this.state.mapstate ? <div  className={classes.maps_bloc} id="maps_bloc"> </div> : ''}
                    <div className={classes.slots_bloc} id="slots_bloc">
                        {this.state.loading ? <NoSlot/> : slots}
                    </div>
                </div>
                </div>
        );
    }
}

export default Calender;