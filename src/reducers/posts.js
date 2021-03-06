import {
  GET_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../actions/types";

const initialState = [];

function postReducer(posts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_POSTS:
      return payload;
    case CREATE_POST:
      return [...posts, payload];
    case UPDATE_POST:
      return posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          };
        } else {
          return post;
        }
      });
    case DELETE_POST:
      return posts.filter(({ id }) => id !== payload.id);
    default:
      return posts;
  }
}

export default postReducer;
