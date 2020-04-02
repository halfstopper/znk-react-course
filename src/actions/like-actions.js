// Action creator
export const LIKES_LOADED = "LIKES_LOADED";
export const doLike = (id) => {
  return {
    type: LIKES_LOADED,
    payload: id,
  };
};

export const DISLIKES_LOADED = "DISLIKES_LOADED";
export const doDislike = (id) => {
  return {
    type: DISLIKES_LOADED,
    payload: id,
  };
};