import React from "react";
import Rule from './Rule';
import { connect } from 'react-redux';

const RuleList = ({ rules, fetchRules }) => {
    return(  
        <div>
            {rules.map((item,idx) => <Rule key={idx} rule={item} />)}
        </div>
    );
  };

  const mapStateToProps = ({ rules }) => ({
    rules
  });

  export default connect(
    mapStateToProps,
  )(RuleList);