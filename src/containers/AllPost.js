import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import { getData } from '../actions';
import { Container, Table } from 'reactstrap';

function AllPost({ dispatch, posts }) {
  useEffect(() => {
    getData({ dispatch });
  }, []);

  return (
    <Container>
      <h4>Data Komoditas</h4>
      <Table hover>
        <thead>
          <tr>
            <th>Komoditas</th>
            <th>Provinsi</th>
            <th>Kota</th>
            <th>Size</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
      {posts && posts.map((item, index) => (
        <tbody key={index}>
          {item.isEdit
            ?  <EditComponent item={item} key={item.id} />
            : <Post item={item} key={item.id} />
          }
        </tbody>
      ))}
      </Table>
    </Container>
  );
}

const mapStateToProps = state => ({
  posts: state
});

export default connect(mapStateToProps)(AllPost);
