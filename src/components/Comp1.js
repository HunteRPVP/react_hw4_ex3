import { Button } from "grommet";
import React from "react";

export default class Comp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      comments: [],
    };

    this.myRef = React.createRef();
  }

  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount,
    });
  };

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments: comments,
    });
    this.myRef.current.value = "";
  };

  render() {
    return (
      <div>
        <h1>State</h1>
        <div>
          <Button primary onClick={this.handler} style={{ width: "200px" }}>
            Increase number below
          </Button>
        </div>
        <div>{this.state.count % 2 === 0 ? "even" : "odd"}</div>
        <div>{this.state.count}</div>
        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <Button primary onClick={this.addComment} style={{ width: "150px" }}>
            Add comment
          </Button>
        </div>
        <div>
          <ul style={{ listStylePosition: "inside" }}>
            {this.state.comments.map((comment, index) => (
              <li key={index.toString()}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
