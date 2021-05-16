import { Button } from "grommet";
import React, { useState } from "react";

function Comp2() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]); 

  let myRef = React.createRef();

  let handler = () => {
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

  let addComment = () => {
      let comment = myRef.current.value;
      let commentsValue = [...comments, comment];
      setComments(commentsValue);
      myRef.current.value = '';
  }

  return (
    <div>
      <h1>State</h1>
      <div>
        <Button primary onClick={handler} style={{ width: "200px" }}>
          Increase number below
        </Button>
      </div>
      <div>{count % 2 === 0 ? "even" : "odd"}</div>
      <div>{count}</div>
      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <Button primary onClick={addComment} style={{ width: "150px" }}>
          Add comment
        </Button>
      </div>
      <div>
        <ul style={{ listStylePosition: "inside" }}>
          {comments.map((comment, index) => (
            <li key={index.toString()}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Comp2;
