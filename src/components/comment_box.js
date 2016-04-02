import React from 'react';

let count: number = 0;

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }

  handleCommentSubmit(comment: Comment) {
    comment.id = ++count;
    this.setState({ comments: this.state.comments.concat(comment) });
  }

  render() {
    return(
      <div className="commentBox">
        <h1>Comments</h1>
      </div>
    );
  }
};
