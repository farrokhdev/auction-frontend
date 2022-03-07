import types from "./blogs.types";
import axios from "../../../utils/request";

// ----- get all blogs --------

export const setBlogs = (payload) => ({
  type: types.SET_BLOGS,
  payload,
});

export const getBlogs = (loading, setLoading) => {
  setLoading(true);
  return (dispatch) => {
    axios
      .get(`https://artchart.net/api/v1/articles/recent`, {
        Headers: {
          "Accept-Language": "fa",
        },
      })
      .then((r) => {
        if (r?.data.code === 200) dispatch(setBlogs(r.data.data.result));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
};
