import React from "react";
const RuleDescriptionField = ({field}) => {
    return (
        <div className="form-group">
            <label htmlFor="rule-desc">Description</label>
            <textarea {...field} className="form-control" id="rule-desc" placeholder = "Description" defaultValue={field.value} />
        </div>
    );
};
export default RuleDescriptionField;
