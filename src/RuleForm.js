import React from "react";
import { connect } from 'react-redux';
import RuleDescriptionField from "./RuleDescriptionField";
import RuleTitleField from "./RuleTitleField";

const RuleForm = ({rules, match}) => {
    const ruleId = match.params.id
    const rule = rules.find(item => item.id=== parseInt(ruleId));
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">New rule</h3>
            </div>
            <div className="panel-body">
                <form>
                    <RuleTitleField rule ={rule}/>
                    <RuleDescriptionField rule ={rule}/>
                <button type="submit" className="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>  
    );
    
};
const mapStateToProps = ({ rules }) => ({
    rules
  });

export default connect(
    mapStateToProps
)(RuleForm);
