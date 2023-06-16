import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [postid, setPostid] = useState(0);
  const [idFromButtonClick, setIdFromButtonClick] = useState(0);

  const handleClick = () => {
    setIdFromButtonClick(postid);
  };

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         setPosts(response.data);
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        setPost(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={postid}
        onChange={(e) => {
          setPostid(e.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
