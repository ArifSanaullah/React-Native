import { blogPostsReducer } from "../reducers/blogPostsReducers";
import jsonServer from "../api/jsonServer";

import {
  deleteBlogPost,
  editBlogPost,
  getBlogPosts,
} from "../actions/addBlogPost";
import createDataContext from "./createDataContext";

const addPost = () => {
  return async (blogPost, cb) => {
    if (blogPost.title && blogPost.content) {
      await jsonServer.post("/blogPosts", blogPost);
      cb();
    }
  };
};

const getPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/blogPosts");
    dispatch(getBlogPosts(res.data));
  };
};

const deletePost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch(deleteBlogPost(id));
  };
};

const editPost = (dispatch) => {
  return async (blogPost, cb) => {
    await jsonServer.put(`/blogPosts/${blogPost.id}`, blogPost);
    dispatch(editBlogPost(blogPost));
    cb();
  };
};

const { Context, Provider } = createDataContext(
  blogPostsReducer,
  { addPost, deletePost, editPost, getPosts },
  {
    blogPosts: [],
  }
);

export { Context, Provider };
