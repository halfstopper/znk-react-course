import React, { useEffect } from "react";
import Rule from './Rule';
import { connect } from 'react-redux';
import { loadRules } from "./actions/rules-actions";


const RuleList = ({ rules, fetchRules }) => {
    useEffect(() => {
        fetchRules();
    }, []);
    return(  
        <div>
            {rules.map((item,idx) => <Rule key={idx} rule={item} />)}
        </div>
    );
  };

  const mapStateToProps = ({ rules }) => ({
    rules
  });

  const mapDispatchToProps = (dispatch)=>{
    return {
        fetchRules:()=>dispatch(loadRules())

    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RuleList);