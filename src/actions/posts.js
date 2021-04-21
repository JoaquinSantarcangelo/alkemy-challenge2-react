import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./types";

import PostService from "../services/PostServices";

//Get All Posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await PostService.getAll();

    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Create Post
export const createPost = (title, text) => async (dispatch) => {
  try {
    const res = await PostService.create({ title, text });

    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

// Update Post
export const updatePost = (id, data) => async (dispatch) => {
  try {
    const res = await PostService.update(id, data);

    dispatch({
      type: UPDATE_POST,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

//Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await PostService.remove(id);

    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
