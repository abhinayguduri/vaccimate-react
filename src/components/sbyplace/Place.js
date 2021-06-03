import React , {Component} from 'react';
import classes from '../../index.css';
import axios from 'axios';
import Option from './Option/Option';
class Place extends Component{
    state = {
        states:[],
        districts:[],
        dist: 0
    }
    async componentDidMount(){
        const response = await axios.get('http://localhost:3001/api/states');
        await this.setState({states:response.data.states});
    }

    async getdist(id){
        const response = await axios.get('http://localhost:3001/api/districts/'+id);
        await this.setState({districts:response.data.districts});
    }
    
    render(){
        const states = this.state.states.map((place)=>{
            return [...Array(<Option name={place.state_name} id={place.state_id} key={place.state_id}/>)];
        });
        const districts = this.state.districts.map((place)=>{
            return [...Array(<Option name={place.district_name} id={place.district_id} key={place.district_id}/>)];
        });
        return (
            <div className={classes.place_bloc} id="place_bloc">
                        <select onChange={(e)=>{this.getdist(e.target.value)}} name="" id="">
                            <option value="">Select your State </option>
                            {states}
                        </select>
                        <select onChange={(e)=>{this.setState({dist:e.target.value})}} name="" id="">
                            <option value="">Select District</option>
                            {districts}
                        </select>
                        <input onClick={()=>{this.props.getweekslots(this.state.dist)}} type="button" value="Search" placeholder="Enter The Location" />
                    </div>
        );
    }
}

export default Place;