import React from 'react';

const Option = (props)=>{
    return (<option key={props.key}  value={props.id}>{props.name}</option>);
}

export default Option;