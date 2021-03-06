// Action creator
import axios from 'axios';
export const LIKES_LOADED = "LIKES_LOADED";
export const doLike = (id) => {
  return async dispatch => {
    try {
      const response = await axios.post("/rest/rules/"+id+"/likes");
      dispatch({
        type: LIKES_LOADED,
        payload: id
      });
    } catch (error) {
      console.log(error);
    }
  };
}