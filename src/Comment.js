import React from 'react';

import classes from './Comment.module.css';

var Comment = (props) => {
    if(props.reply) {
        console.log('Reply Component')
    } else {
        console.log('Comment Component')
    }
    var replyList = props.data.replies !== undefined ? props.data.replies.map((replyItem, pos) => {
        return(
            <Comment data={replyItem} key={pos} reply={true} />
        )
    }) : null;
    return (
        <div className={props.reply ? classes.ReplyCard : classes.card}>
            <img src={props.data.profilePic} alt={'Profile Pic'} />
            <div>
            <h3>{props.data.username}</h3>
            <p>{props.data.message}</p>
            {props.reply ? null : <button onClick={props.btnClick} className={classes.ShowHideBtn}>Show/Hide Replies</button>}

            {props.data.showReplies ? replyList: null}
            </div>
        </div>
    )
}

export default Comment;