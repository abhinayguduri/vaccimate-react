import React , {Component} from 'react';
import classes from '../index.css';
import Place from '../components/sbyplace/Place';
import Heading from '../components/heading/Heading';
import Filters from '../components/filter/Filter';
import Calender from '../components/calender/Calender';
import axios from 'axios';
import moment from 'moment';
class Layout extends Component{
    state = {
        weekslots: [],
        slotcount:'',
        minor:false,
        old:false,
        free:false,
        paid:false,
        covaxin:false,
        covishield:false,
        sputnikv:false,
        showall:true,
        hideunav:false,
    }

    async getweekslots(id){
        if(id>0){
            const response = await axios.get('http://localhost:3001/api/slotsforweek/'+id);
            await this.setState({slotcount:response.data.count});
            await this.setState({weekslots:response.data.centers});
        }
    }
     getslotsbydate(e){
        const date = moment(e.target.value,'mm-dd-yyyy');
        console.log(date);
    }
   async applyfilter(id){
        if(id===1){
            const val = this.state.minor;
            await this.setState({minor : !val});
        }
        if(id===2){
            const val = this.state.old;
            await this.setState({old : !val});
        }
        if(id===3){
            const val = this.state.covishield;
            await this.setState({covishield : !val});
        }
        if(id===4){
            const val = this.state.covaxin;
            await this.setState({covaxin : !val});
        }
        if(id===5){
            const val = this.state.sputnikv;
            await this.setState({sputnikv : !val});
        }
        if(id===6){
            const val = this.state.free;
            await this.setState({free : !val});
        }
        if(id===7){
            const val = this.state.paid;
            await this.setState({paid : !val});
        }
        const count =  await this.state.minor+this.state.old+this.state.covishield+this.state.covaxin+this.state.sputnikv+
        this.state.free+this.state.paid;
        if(count===0){
            this.setState({showall:true});
        }else{
            this.setState({showall:false});
        }
    }
    async toggleunav(){
        const hideunav = this.state.hideunav;
        await this.setState({hideunav: !hideunav});
    }
    render(){
        return (
            <div>
            <nav className={classes.navbar}>
        <div className={classes.logo}>
            <p>Logo</p>
        </div>
        <div className={classes.reg_button}>
            <p>Register / Login</p>
        </div>
    </nav>
    <div className={classes.wrapper}>
        <div className={classes.container}>
            <div className={classes.location_bloc}>
                <div className={classes.location}>
                        <div className={classes.icon}>
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className={classes.location_input}>
                            <input type="text" placeholder="Enter The Location" />
                        </div>
                    </div>
                    <Heading  title="Or Search by State and District"/>
                    <Place getweekslots={(id)=>{this.getweekslots(id)}}/>
                    <Heading  title="Filters"/>
                    <Filters tstate={this.state} applyfilter={(id)=>{this.applyfilter(id)}}/>
                    <Heading title="Available Slots in your selected Location with your preferences"/>
                    <Calender getslotsbydate={(e)=>{this.getslotsbydate(e)}} toggleunav={()=>{this.toggleunav()}} tstate={this.state} weekslots={this.state.weekslots} />
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Layout;