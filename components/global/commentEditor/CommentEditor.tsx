import React, { useState } from 'react';
import styles from './CommentEditor.module.scss';

const CommentEditor = (): JSX.Element => {
  const [commentInput, setCommentInput] = useState();
  const changeInput = (e) => {
    setCommentInput(e.target.value);
  };

  return (
    <input
      type="text"
      name="comment-editor"
      value={commentInput}
      onChange={changeInput}
      className={styles.input}
    />
  );
};

export default CommentEditor;
