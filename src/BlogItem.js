import React from 'react';

let BlogItem = (props) => {
    return(
        <div className="blog">
            <h3>{props.title}</h3>
            <p>{props.desc} </p>
        </div>
    )
}

export default BlogItem;