import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import { getData } from '../actions';

function AllPost({ dispatch, posts }) {
  useEffect(() => {
    getData({ dispatch });
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts && posts.map((post, index) => (
        <div key={index}>
          {post.editing
            ?  <EditComponent post={post} key={post.id} />
            : <Post post={post} key={post.id} />
          }
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state
});

export default connect(mapStateToProps)(AllPost);
