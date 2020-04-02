// Action Reducer
import { RULES_LOADED } from "../actions/rules-actions";
import { LIKES_LOADED } from "../actions/like-actions";
import { DISLIKES_LOADED } from "../actions/dislike-actions";

const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case RULES_LOADED: {
        return action.payload;
    }
    case LIKES_LOADED: {   
        const ruleIndex = state.findIndex(item => item.id === action.payload)
        const newRules = [...state]
        newRules[ruleIndex].likes += 1 
        return newRules;
    }
    case DISLIKES_LOADED: {
        const ruleIndex = state.findIndex(item => item.id === action.payload)
        const newRules = [...state]
        newRules[ruleIndex].dislikes += 1 
        return newRules;
      }
    default:
      return state;
  }
};
export default rulesReducer;
