import { blogPostsReducer } from "../reducers/blogPostsReducers";
import {
  addBlogPost,
  deleteBlogPost,
  editBlogPost,
} from "../actions/addBlogPost";
import createDataContext from "./createDataContext";

const addPost = (dispatch) => {
  return (blogPost, cb) => {
    dispatch(addBlogPost(blogPost));
    cb();
  };
};

const deletePost = (dispatch) => {
  return (id) => {
    dispatch(deleteBlogPost(id));
  };
};

const editPost = (dispatch) => {
  return (blogPost, cb) => {
    dispatch(editBlogPost(blogPost));
    cb();
  };
};

const { Context, Provider } = createDataContext(
  blogPostsReducer,
  { addPost, deletePost, editPost },
  {
    blogPosts: [],
  }
);

export { Context, Provider };
