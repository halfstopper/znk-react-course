import React, { useState } from 'react';
import PropTypes from 'prop-types';
const LikeBtn = ({ type, counter })=>{
    const[myCount,setMyCount] = useState(counter);
    return(
        <button 
            onClick = {handleClick} 
            className="btn btn-default"
            title={ type === "like" ? "+1" : "-1"}>
        {myCount}
        <i className={type === "like"? "glyphicon glyphicon-thumbs-up" : "glyphicon glyphicon-thumbs-down"} />
        </button>
    );

    function handleClick(){
        setMyCount (preValue => preValue +1);
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