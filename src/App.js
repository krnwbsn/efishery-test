import React, { Component } from "react";
import PostForm from "./containers/PostForm";
import AllPost from "./containers/AllPost";
import { Container } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Container>
        <Container>
          <h2>efishery test</h2>
          <br />
        </Container>
        <PostForm />
        <AllPost />
      </Container>
    );
  }
}

export default App;
