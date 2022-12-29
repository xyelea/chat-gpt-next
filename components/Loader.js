import React from "react";
import { Comment } from "react-loader-spinner";

function Loader({ loading }) {
  return (
    <Comment
      visible={loading}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
}

export default Loader;
