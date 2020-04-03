import React from "react";
const RuleTitleField = ({rule}) => {
    return (
        <div className="form-group">
            <label htmlFor="rule-title">Title</label>
            <input type="text" className="form-control" id="rule-title" placeholder = "Title" defaultValue={rule && rule.title} />
        </div>
    );
};
export default RuleTitleField;
