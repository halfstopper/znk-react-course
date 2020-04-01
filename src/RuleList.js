import React from 'react';
import Rule from './Rule';

//Using destructing for props
const RuleList = ({rules}) =>{
    return(  
        <div>
            {rules.map((item,idx) => <Rule key={idx} rule={item} />)}
        </div>
    );
}
export default RuleList;
