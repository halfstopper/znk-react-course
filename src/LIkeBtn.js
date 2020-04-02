import PropTypes from 'prop-types';
import React from 'react';
import { doLike } from "./actions/like-actions";
import { doDislike} from "./actions/dislike-actions";
import { useDispatch } from 'react-redux';

const LikeBtn = ({ type, counter, id })=>{
    const dispatch = useDispatch()
    return(
        <button 
            onClick = {handleClick} 
            className="btn btn-default"
            title={ type === "like" ? "+1" : "-1"}>
        {counter}
        <i className={type === "like"? "glyphicon glyphicon-thumbs-up" : "glyphicon glyphicon-thumbs-down"} />
        </button>
    );

    function handleClick(){
        type === "like" ? dispatch(doLike(id)) : dispatch(doDislike(id));
    }
}

LikeBtn.defaultProps = {
    counter: 0
  };
  LikeBtn.propTypes = {
    type: PropTypes.oneOf(["like", "dislike"]).isRequired,
    counter: PropTypes.number
  };

export default LikeBtn;