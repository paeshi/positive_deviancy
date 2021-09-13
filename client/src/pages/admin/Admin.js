import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../../components/posts/Posts";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      This is the admin page
      <div className="articles">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Admin;
