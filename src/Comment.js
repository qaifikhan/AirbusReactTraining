import React from 'react';

import classes from './Comment.module.css';

var Comment = (props) => {
    console.log('CommentItem Props => ', props);
    return (
        <div className={classes.card}>
            <img src={props.data.profilePic} alt={'Profile Pic'} />
            <div>
            <h3>{props.data.username}</h3>
            <p>{props.data.message}</p>
            {/* {replies} */}
            </div>
        </div>
    )
}

export default Comment;