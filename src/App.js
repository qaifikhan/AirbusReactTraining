import React from 'react';

import Comment from './Comment';

import logo from './logo.svg';
import './App.css';

let commenList = [
  {
    profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    username: 'Username1',
    message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    replies: [
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply1',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply2',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply3',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
    ]
  },
  {
    profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    username: 'Username2',
    message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    replies: [
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply1',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply2',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply3',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
    ]
  },
  {
    profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    username: 'Username3',
    message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    replies: [
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply1',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply2',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
      {
        profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        username: 'Reply3',
        message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
      },
    ]
  }
]

function App() {
  let heading = "Blog 23 Comments"

  let commList = commenList.map((item, commentKey) => {
    // var replies = item.replies.map((replyItem, pos) => {
    //   return(
    //     <Comment data={replyItem} position={pos} name="Arshad" />
    //   )
    // })
    return <Comment data={item} position={commentKey} />
  })

  return (
    <div className="App">
      <h1>{heading}</h1>
      
      {commList}
    </div>
  );
}

export default App;
