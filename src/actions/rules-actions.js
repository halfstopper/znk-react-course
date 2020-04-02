import rules from '../data.json';

// Action creator
export const RULES_LOADED = "RULES_LOADED";
export const loadRules = () => {
  return {
    type: RULES_LOADED,
    payload: rules
  };
};

