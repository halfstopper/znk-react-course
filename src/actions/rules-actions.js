//import rules from '../data.json';
import axios from 'axios';

// Action creator for Rules
export const RULES_LOADED = "RULES_LOADED";
export const loadRules = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/rest/rules");
      dispatch({
        type: RULES_LOADED,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Action creator for Rule Add
export const RULE_ADD = "RULE_ADD";
export const addRule = (rule) => {
  return async dispatch => {
    try {
      const response = await axios.post("/rest/rules/", {title: rule.title , description: rule.description });
      dispatch({
        type: RULE_ADD,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Action creator
export const RULE_UPDATE = "RULE_UPDATE";
export const updateRule = (rule) => {
  return async dispatch => {
    try {
      const response = await axios.put("/rest/rules/"+rule.id,{title: rule.title , description: rule.description });
      dispatch({
        type: RULE_UPDATE,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};