import types from "./blogs.types";

const initial_state = {
  blogs: [],
};

const blogsReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case types.GET_BLOGS:
      return {
        ...state,
        ...payload,
        blogs: payload,
      };

    default:
      return state;
  }
};

export default blogsReducer;
