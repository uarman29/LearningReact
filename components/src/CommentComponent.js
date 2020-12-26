import React from 'react';

const CommentComponent = (props) =>{
    return (
        <div className = "comment">
            <a href = "/" className = "avatar">
                <img alt = "avatar" src={props.avatarImg}/>
            </a>
            <div className="content">
                <a href="/" classname="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeCreated}</span>
                </div>
                <div className="text">{props.commentText}</div>
            </div>
        </div>
    );
};

export default CommentComponent;