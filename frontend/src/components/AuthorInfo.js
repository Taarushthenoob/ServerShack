import React from 'react';

const AuthorInfo = ({ avatar, author, time, label, qualification }) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <span className="avatar">
          <img alt="avatar" src={avatar} />
        </span>
        <div className="content">
          <span className="author">{author}</span>
          <div className="metadata">
            <span className="date">{time}</span>
            <div className="rating">
              <span className="ui tag label">{label}</span>
            </div>
          </div>
          <div className="text">{qualification}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
