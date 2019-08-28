import React, {Component} from 'react';
import axios from 'axios';

class PostList extends Component {
    state = {
        todoList: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            this.setState({todoList: response.data})
        })
        .catch()
    }

    render() {
        let totoItems = this.state.todoList.map((item) => {
            console.log(item);
            return(
                <div>
                    <h3>{item.title}</h3>
                    <p>{'Status:' + item.completed}</p>
                </div>
            )
        });

        return(
            <div>
                <div>Post List</div>
                {totoItems}              
            </div>
        )
    }
}

export default PostList;