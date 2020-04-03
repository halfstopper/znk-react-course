import React from "react";
const RuleDescriptionField = ({rule}) => {
    return (
        <div className="form-group">
            <label htmlFor="rule-desc">Description</label>
            <textarea className="form-control" id="rule-desc" placeholder = "Description" defaultValue={rule && rule.description} />
        </div>
    );
};
export default RuleDescriptionField;
