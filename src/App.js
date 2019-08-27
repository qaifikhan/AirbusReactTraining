import React, {Component} from 'react';

import Comment from './Comment';

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      commenList: [
        {
          profilePic: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
          username: 'Username1',
          message: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
          showReplies: false,
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
          showReplies: false,
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
          showReplies: false,
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
    }  
    console.log('Constructor');
  }

 
  heading = "Blog 23 Comments"

  onBtnClick = () => {
    let updatedVal = !this.state.showList;
    this.setState({showList: updatedVal});
  }

  onReplyBtnClick = (pos) => {
    let updatedArrayList = [...this.state.commenList];
    let updatedCommentObj = updatedArrayList[pos];
    let updatedReplyStatus = !updatedCommentObj.showReplies;
    updatedCommentObj.showReplies = updatedReplyStatus;
    updatedArrayList[pos] = updatedCommentObj;

    this.setState({commenList: updatedArrayList});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    console.log('Component Should Update')
    return true;
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  render() {
    console.log('Render');
    let commList = this.state.commenList.map((item, commentKey) => {
      return <Comment data={item} pos={commentKey} key={commentKey} btnClick={() => this.onReplyBtnClick(commentKey)}
       />
    })

    return (
      <div className="App">
        <h1>{this.heading}</h1>
        {this.state.showList ? commList : null}
      </div>
    );
  }
}

export default App;
