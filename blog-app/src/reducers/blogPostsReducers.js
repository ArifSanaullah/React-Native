import {
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  EDIT_BLOG_POST,
  GET_BLOG_POSTS,
} from "../actionTypes";

export const blogPostsReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload],
      };

    case DELETE_BLOG_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };

    case EDIT_BLOG_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };

    case GET_BLOG_POSTS:
      return {
        ...state,
        blogPosts: action.payload.blogPosts,
      };

    default:
      return state;
  }
};
