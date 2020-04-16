import {
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  EDIT_BLOG_POST,
} from "../actionTypes";

export const addBlogPost = (blogPost) => ({
  type: ADD_BLOG_POST,
  payload: { ...blogPost },
});

export const deleteBlogPost = (id) => ({
  type: DELETE_BLOG_POST,
  payload: { id },
});

export const editBlogPost = (blogPost) => ({
  type: EDIT_BLOG_POST,
  payload: { ...blogPost },
});
