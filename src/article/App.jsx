import React from 'react';
import Button from '../themes/components/Button';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';
import style from './App.module.css';
import classNames from 'classnames';

const ArticleBody = () => {
  return (
    <>
      <h1>Article Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quibusdam
        labore. Necessitatibus, repudiandae laborum consectetur sed rerum vel,
        voluptatem recusandae ipsam quo nisi et neque, quos fuga saepe. Nemo,
        maxime.
      </p>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt..
      </p>
    </>
  );
};

export const ButtonVoteUp = ({ votes }) => {
  return (
    <Button
      type="primary"
      className={classNames(style.VoteButton, style.VoteUpButton)}
    >
      <ThumbsUp /> <span>{votes}</span>
    </Button>
  );
};

export const ButtonVoteDown = ({ votes }) => {
  return (
    <Button
      type="danger"
      className={classNames(style.VoteButton, style.VoteDownButton)}
    >
      <ThumbsDown /> <span>{votes}</span>
    </Button>
  );
};

export const UserCommentActions = ({ votesUp, votesDown }) => {
  return (
    <div>
      <ButtonVoteUp votes={votesUp} />
      <ButtonVoteDown votes={votesDown} />
    </div>
  );
};

export const UserComment = ({ comment }) => {
  return (
    <div className={style.UserComment}>
      <div>Author: {comment.author}</div>
      <div>
        <p>{comment.content}</p>
      </div>
      <UserCommentActions votesUp={comment.votesUp} votesDown={comment.votesDown} />
    </div>
  );
};

export const UserComments = () => {
  const comments = [
    {
      author: 'Juanma',
      content:
        'Quisque non facilisis ligula. Aenean lobortis sodales lectus, blandit rhoncus massa finibus ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      votesUp: 5,
      votesDown: 3,
    },
    {
      author: 'coco',
      content:
        'Cras imperdiet sagittis tellus in tincidunt. Aliquam erat volutpat. Quisque vel ipsum nisi.',
      votesUp: 1,
      votesDown: 25,
    },
  ];

  return (
    <div>
      {comments.map((comment, idx) => {
        return (
          <UserComment key={`${comment.author}-${idx}`} comment={comment} />
        );
      })}
    </div>
  );
};

const CreateCommentTextArea = () => {
  return (
    <textarea
      className={style.CreateCommentTextArea}
      placeholder="your comment here.."
      name="comment"
      id="comment"
      rows={5}
    ></textarea>
  );
};

const CreateCommentActions = () => {
  return (
    <div className={style.CreateCommentActions}>
      <Button type="primary" className={style.CreateCommentActionsButton}>
        Send
      </Button>
      <Button type="danger" className={style.CreateCommentActionsButton}>
        Cancel
      </Button>
    </div>
  );
};

const CreateComment = () => {
  return (
    <form
      action="/create-comment"
      method="POST"
      className={style.CreateComment}
      onSubmit={(e) => e.preventDefault()}
    >
      <CreateCommentTextArea />
      <CreateCommentActions />
    </form>
  );
};

const Comments = () => {
  return (
    <div className={style.Comments}>
      <CreateComment />
      <UserComments />
    </div>
  );
};

const Article = () => {
  return (
    <div className={style.Article}>
      <ArticleBody />
      <Comments />
    </div>
  );
};

const ArticleScreen = () => {
  return (
    <div className={classNames(style.ArticleScreen)}>
      <Article />
    </div>
  );
};

const App = () => {
  return <ArticleScreen />;
};

export default App;
