import React, { useState } from 'react';
import './Rule.css';
import LikeBtn from './LIkeBtn';
import PropTypes from 'prop-types';

const Rule = ({rule})=>{
    const [folded, setFolded] = useState(!rule.description);
    return(
        <div className="panel panel-primary">
            <div className="panel-heading" role="presentation" onClick={onTittleClick}>
                {rule.title}
                {folded ? <i className= "pull-right glyphicon glyphicon-chevron-up" /> : <i className= "pull-right glyphicon glyphicon-chevron-down" />}
            </div>
            <div className="panel-body" hidden={folded}>
                <p>{rule.description}</p>
            </div>
            <div className="panel-footer">
                <div className="btn-toolbar">
                {rule.tags.map(item =><span key = {item} className="badge"> {item} </span>)}
                <div className="btn-group btn-group-xs pull-right">
                    <button className="btn btn-primary" title="Update">
                    <i className="glyphicon glyphicon-pencil" />
                    </button>
                </div>
                <div className="btn-group btn-group-xs pull-right">
                    <LikeBtn type="like" counter={rule.likes} />
                    <LikeBtn type="dislike" counter={rule.dislikes} />
                </div>
                </div>
            </div>
        </div>
    );
    function onTittleClick(){
        setFolded(!folded);
    }
}
Rule.propTypes = {
    rule : PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        likes:PropTypes.number.isRequired,
        dislikes:PropTypes.number.isRequired,
        tags:PropTypes.arrayOf(PropTypes.string)
    })
};
export default Rule;