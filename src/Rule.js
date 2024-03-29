import React, { useState } from 'react';
import './Rule.css';
import LikeBtn from './LIkeBtn';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

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
                    <Link to={`/edit/${rule.id}`}><i className="glyphicon glyphicon-pencil"/></Link>
                    </button>
                </div>
                <div className="btn-group btn-group-xs pull-right">
                    <LikeBtn type="like" counter={rule.likes} id={rule.id} />
                    <LikeBtn type="dislike" counter={rule.dislikes} id={rule.id}/>
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
        description:PropTypes.string,
        likes:PropTypes.number.isRequired,
        dislikes:PropTypes.number.isRequired,
        tags:PropTypes.arrayOf(PropTypes.string)
    })
};
export default Rule;