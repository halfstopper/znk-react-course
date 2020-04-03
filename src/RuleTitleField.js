import React from "react";
const RuleTitleField = ({field}) => {
    return (
        <div className="form-group">
            <label htmlFor="rule-title">Title</label>
            <input {...field} className="form-control" id="rule-title" placeholder = "Title" />
        </div>
    );
};
export default RuleTitleField;
