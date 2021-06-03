import React,{Component} from 'react';
import classes from '../../index.css';
class Filter extends Component{
    render(){
        const style = {
            "background-color": "#21CE99",
             "color": "white",
              "border" : "1px solid #21CE99"
        }
        return (
            <div className={classes.filters_bloc}>
                    <div onClick={()=>{this.props.applyfilter(1)}} style={this.props.tstate.minor ? style : null} className={classes.filter_float_left}>
                        <p>Age 18 +</p>
                    </div>
                    <div onClick={()=>{this.props.applyfilter(2)}} style={this.props.tstate.old ? style : null}   className={classes.filter_float_left}>
                        <p>Age 45 +</p>
                    </div>
                    <div onClick={()=>{this.props.applyfilter(3)}} style={this.props.tstate.covishield ? style : null} className={classes.filter_float_left}>
                        <p>Covishield</p>
                    </div>
                    <div onClick={()=>{this.props.applyfilter(4)}} style={this.props.tstate.covaxin ? style : null} className={classes.filter_float_left}>
                        <p>Covaxin</p>
                    </div>
                    <div onClick={()=>{this.props.applyfilter(5)}} style={this.props.tstate.sputnikv ? style : null} className={classes.filter_float_left}>
                        <p>Sputnik - V</p>
                    </div>
                    <div onClick={()=>{this.props.applyfilter(6)}} style={this.props.tstate.free ? style : null} className={classes.filter_float_left}>
                        <p>Free</p>
                    </div>
                    <div onClick={()=>{this.props.applyfilter(7)}} style={this.props.tstate.paid ? style : null} className={classes.filter_float_left}>
                        <p>Paid</p>
                    </div>
                </div>
        );
    }
}

export default Filter;