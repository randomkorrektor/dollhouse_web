import React from 'react';
import Header from './Header';
import {
    Link
} from 'react-router';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    getPosts() {
        return fetch('http://localhost:3000/api/posts')
            .then(function (response) {
                return response.json();
            })
            .catch(alert);
    }

    async componentDidMount() {
        this.setState({ posts: (await this.getPosts()).data });
    }

    render() {
        const posts = this.state.posts.map((post, i) => <span key={i}>{post.text}</span>)
        return (<div>
            <Header />
            <div>
                <Link to="/products">Shop</Link>
            </div>
            <div>
                {posts}
            </div>
        </div>);
    }
}
