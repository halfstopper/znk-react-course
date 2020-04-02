// Action creator
import axios from 'axios';
export const DISLIKES_LOADED = "DISLIKES_LOADED";
export const doDislike = (id) => {
  return async dispatch => {
    try {
      const response = await axios.post("/rest/rules/"+id+"/dislikes");
      dispatch({
        type: DISLIKES_LOADED ,
        payload: id
      });
    } catch (error) {
      console.log(error);
    }
  };
}