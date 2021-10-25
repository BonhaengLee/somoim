import React from 'react';
import CommentsEditor from '../../global/commentEditor/CommentEditor';
import styles from './CommentsContainer.module.scss';

const CommentsList = (comments) => (
  <section>
    {comments.length > 0 ? (
      comments.map((comment) => (
        <article>
          <p>{comment}</p>
        </article>
      ))
    ) : (
      <article>
        <p>댓글이 없습니다.</p>
      </article>
    )}
  </section>
);

const CommentsContainer = (comments): JSX.Element => (
  <>
    <div className={styles.commentsEditor}>
      <CommentsEditor />
    </div>
    <div className={styles.commentsList}>
      <CommentsList comments={comments} />
    </div>
  </>
);

export default CommentsContainer;
