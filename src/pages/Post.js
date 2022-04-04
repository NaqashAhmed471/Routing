import React from "react";
import { useParams, useLocation } from "react-router";

const Post = () => {
  const { id } = useParams();
  console.log(useLocation());
  return <h2>Id is = {id}</h2>;
};

export default Post;
